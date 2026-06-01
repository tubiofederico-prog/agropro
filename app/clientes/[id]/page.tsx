'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, MapPin, Phone, Mail, FileText } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Badge from '@/components/ui/Badge';
import BarChartWidget from '@/components/charts/BarChartWidget';
import { clientes } from '@/data/clientes';

export default function DetalleClientePage({ params }: { params: { id: string } }) {
  const cliente = clientes.find((c) => c.id === params.id);

  if (!cliente) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Cliente no encontrado</p>
      </div>
    );
  }

  const datosHistorial = [
    { name: 'Ene', pedidos: 3 },
    { name: 'Feb', pedidos: 4 },
    { name: 'Mar', pedidos: 2 },
    { name: 'Abr', pedidos: 5 },
    { name: 'May', pedidos: 4 },
  ];

  return (
    <>
      <PageHeader
        title={cliente.nombre}
        subtitle={cliente.razonSocial}
        action={
          <Link href="/clientes">
            <Button variant="secondary" className="gap-2">
              <ChevronLeft size={18} />
              Volver
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Información General</h2>
              <StatusBadge status={cliente.estado} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-500">NIT</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{cliente.nit}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Estado</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{cliente.estado}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Contacto</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{cliente.contacto}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{cliente.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Teléfono</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{cliente.telefono}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Días de Crédito</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{cliente.diasCreditoPromedio}</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fincas Asociadas</h3>
            <div className="space-y-3">
              {cliente.fincas.map((finca) => (
                <div key={finca.id} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{finca.nombre}</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                    <div className="flex gap-2">
                      <MapPin size={14} className="mt-0.5" />
                      {finca.direccion}
                    </div>
                    <div>{finca.areaHectareas} hectáreas</div>
                    <div className="flex gap-2">
                      <Phone size={14} className="mt-0.5" />
                      {finca.mayordomo.telefono}
                    </div>
                    <div>{finca.actividad}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <BarChartWidget title="Historial de Pedidos" data={datosHistorial} dataKey="pedidos" />
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Cartera</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Pendiente por Cobrar</p>
                <p className="text-2xl font-bold text-gray-900">${(cliente.carteraPendiente / 1000).toFixed(0)}K</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Último Pedido</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{cliente.ultimoCompra}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Frecuencia Promedio</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{cliente.frecuenciaPromedioCompra} días</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Acciones</h3>
            <div className="space-y-2">
              <Button variant="primary" className="w-full" size="sm">
                Crear Pedido
              </Button>
              <Button variant="secondary" className="w-full" size="sm">
                Ver Pedidos
              </Button>
              <Button variant="ghost" className="w-full" size="sm">
                Editar Cliente
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
