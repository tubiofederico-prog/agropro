'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Badge from '@/components/ui/Badge';
import { pedidos } from '@/data/pedidos';

export default function LogisticaPage() {
  const pedidosLogistica = pedidos.filter((p) => !['recibido'].includes(p.estado) && !['facturado'].includes(p.estado));

  const porEstado = {
    validando: pedidosLogistica.filter((p) => p.estado === 'validando_inventario').length,
    listo_alistamiento: pedidosLogistica.filter((p) => p.estado === 'listo_alistamiento').length,
    en_preparacion: pedidosLogistica.filter((p) => p.estado === 'en_preparacion').length,
    listo_despacho: pedidosLogistica.filter((p) => p.estado === 'listo_despacho').length,
    en_ruta: pedidosLogistica.filter((p) => p.estado === 'en_ruta').length,
  };

  return (
    <>
      <PageHeader
        title="Logística y Despachos"
        subtitle="Gestión de alistamientos, despachos y entregas"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">Validando</p>
          <p className="text-3xl font-bold text-blue-600">{porEstado.validando}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">P/ Alistamiento</p>
          <p className="text-3xl font-bold text-green-600">{porEstado.listo_alistamiento}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">En Preparación</p>
          <p className="text-3xl font-bold text-yellow-600">{porEstado.en_preparacion}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">P/ Despacho</p>
          <p className="text-3xl font-bold text-orange-600">{porEstado.listo_despacho}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">En Ruta</p>
          <p className="text-3xl font-bold text-purple-600">{porEstado.en_ruta}</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pedidos por Estado Logístico</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Pedido</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cliente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Destino</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Vehículo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidosLogistica.map((pedido) => (
                <tr key={pedido.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">{pedido.numero}</td>
                  <td className="py-3 px-4 text-gray-700">{pedido.clienteNombre}</td>
                  <td className="py-3 px-4 text-gray-700">{pedido.fincaNombre}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={pedido.estado} />
                  </td>
                  <td className="py-3 px-4 text-gray-700">{pedido.vehiculoAsignado || '-'}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        Ver
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
