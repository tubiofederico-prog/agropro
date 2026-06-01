'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Truck, MapPin, Phone } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StatusBadge from '@/components/ui/StatusBadge';
import Timeline from '@/components/ui/Timeline';
import Modal from '@/components/ui/Modal';
import { pedidos } from '@/data/pedidos';

export default function DetallePedidoPage({ params }: { params: { id: string } }) {
  const pedido = pedidos.find((p) => p.id === params.id);
  const [showModalFirma, setShowModalFirma] = useState(false);
  const [showModalAsignar, setShowModalAsignar] = useState(false);

  if (!pedido) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Pedido no encontrado</p>
        <Link href="/pedidos">
          <Button variant="primary" className="mt-4">
            Volver a Pedidos
          </Button>
        </Link>
      </div>
    );
  }

  const timeline = [
    { status: 'recibido', description: 'Pedido recibido en el sistema', timestamp: pedido.fecha, responsable: 'Sistema' },
    { status: 'validando_inventario', description: 'Validando disponibilidad de stock', timestamp: '2026-05-29 10:30' },
    { status: 'listo_alistamiento', description: 'Listo para preparación en bodega', timestamp: '2026-05-30 14:15' },
    { status: 'en_ruta', description: 'En camino hacia el destino', timestamp: '2026-05-31 08:00' },
  ];

  return (
    <>
      <PageHeader
        title={`Pedido ${pedido.numero}`}
        subtitle={pedido.clienteNombre}
        action={
          <Link href="/pedidos">
            <Button variant="secondary" className="gap-2">
              <ChevronLeft size={18} />
              Volver
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Información General</h2>
              <StatusBadge status={pedido.estado} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Número de Pedido</p>
                <p className="text-sm font-medium text-gray-900">{pedido.numero}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Fecha</p>
                <p className="text-sm font-medium text-gray-900">{pedido.fecha}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Cliente</p>
                <p className="text-sm font-medium text-gray-900">{pedido.clienteNombre}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Finca</p>
                <p className="text-sm font-medium text-gray-900">{pedido.fincaNombre}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Información de Entrega</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={18} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Dirección</p>
                  <p className="text-sm text-gray-900">{pedido.direccionEntrega}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Teléfono</p>
                  <p className="text-sm text-gray-900">{pedido.telefonoEntrega}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Productos</h3>
            <div className="space-y-2">
              {pedido.lineas.map((linea) => (
                <div key={linea.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{linea.productoNombre}</p>
                    <p className="text-xs text-gray-500">{linea.cantidadConfirmada} unidades @ ${linea.precioUnitario.toLocaleString()}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${linea.subtotal.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Resumen</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium text-gray-900">${pedido.totalPedido.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="font-medium text-gray-900">Total:</span>
                <span className="font-bold text-lg text-blue-700">${pedido.totalPedido.toLocaleString()}</span>
              </div>
            </div>
            {pedido.observaciones && (
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 font-medium">Observaciones:</p>
                <p className="text-xs text-gray-700 mt-1">{pedido.observaciones}</p>
              </div>
            )}
          </Card>

          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Acciones</h3>
            <div className="space-y-2">
              {!['entregado', 'facturado'].includes(pedido.estado) && (
                <>
                  <Button variant="primary" className="w-full" size="sm">
                    Editar Pedido
                  </Button>
                  <Button variant="secondary" className="w-full" size="sm" onClick={() => setShowModalAsignar(true)}>
                    Asignar Vehículo
                  </Button>
                  <Button variant="ghost" className="w-full" size="sm">
                    Generar Remisión
                  </Button>
                </>
              )}
              {pedido.estado === 'entregado' && (
                <Button variant="success" className="w-full" size="sm">
                  Generar Factura
                </Button>
              )}
              <Button variant="ghost" className="w-full" size="sm">
                Ver Remisión
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <h3 className="font-semibold text-gray-900 mb-4">Trazabilidad</h3>
        <Timeline events={timeline} />
      </Card>

      <Modal
        isOpen={showModalAsignar}
        title="Asignar Vehículo"
        onClose={() => setShowModalAsignar(false)}
        footer={
          <>
            <Button variant="secondary" onClick={() => setShowModalAsignar(false)}>
              Cancelar
            </Button>
            <Button variant="primary">Asignar</Button>
          </>
        }
      >
        <p className="text-sm text-gray-600 mb-4">Selecciona un vehículo disponible para este pedido:</p>
        <div className="space-y-2">
          {['VEH003 - Furgoneta', 'VEH006 - Camión', 'VEH007 - Furgoneta'].map((veh) => (
            <label key={veh} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="vehiculo" className="w-4 h-4" />
              <span className="text-sm text-gray-900">{veh}</span>
            </label>
          ))}
        </div>
      </Modal>
    </>
  );
}
