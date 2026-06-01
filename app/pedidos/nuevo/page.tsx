'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { clientes } from '@/data/clientes';
import { productos } from '@/data/productos';

export default function NuevoPedidoPage() {
  const [clienteSeleccionado, setClienteSeleccionado] = useState('');
  const [fincaSeleccionada, setFincaSeleccionada] = useState('');

  const clienteData = clientes.find((c) => c.id === clienteSeleccionado);
  const fincas = clienteData?.fincas || [];

  return (
    <>
      <PageHeader
        title="Crear Nuevo Pedido"
        subtitle="Registrar un nuevo pedido de cliente"
        action={
          <Link href="/pedidos">
            <Button variant="secondary" className="gap-2">
              <ChevronLeft size={18} />
              Volver
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del Pedido</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cliente</label>
                <select
                  value={clienteSeleccionado}
                  onChange={(e) => {
                    setClienteSeleccionado(e.target.value);
                    setFincaSeleccionada('');
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccionar cliente...</option>
                  {clientes.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {clienteData && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Finca de Entrega</label>
                  <select
                    value={fincaSeleccionada}
                    onChange={(e) => setFincaSeleccionada(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Seleccionar finca...</option>
                    {fincas.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Entrega Estimada</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Productos</h3>
            <div className="space-y-3">
              {productos.slice(0, 5).map((prod) => (
                <div key={prod.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{prod.nombre}</h4>
                    <span className="text-sm text-gray-600">${prod.precioUnitario.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Cantidad"
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <span className="text-xs text-gray-600">{prod.unidad}</span>
                    <span className="text-xs text-gray-500 ml-auto">Stock: {prod.stockActual}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex gap-3">
            <Link href="/pedidos" className="flex-1">
              <Button variant="secondary" className="w-full">
                Cancelar
              </Button>
            </Link>
            <Button variant="primary" className="flex-1">
              Crear Pedido
            </Button>
          </div>
        </div>

        <div>
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Resumen</h3>
            {clienteData ? (
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-gray-500">Cliente</p>
                  <p className="font-medium text-gray-900">{clienteData.nombre}</p>
                </div>
                {fincaSeleccionada && (
                  <div>
                    <p className="text-xs text-gray-500">Finca</p>
                    <p className="font-medium text-gray-900">
                      {fincas.find((f) => f.id === fincaSeleccionada)?.nombre}
                    </p>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-xs text-gray-500">Total Estimado</p>
                  <p className="text-2xl font-bold text-gray-900">$0</p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Selecciona un cliente para ver el resumen</p>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
