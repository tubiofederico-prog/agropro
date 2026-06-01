'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Badge from '@/components/ui/Badge';
import { facturas } from '@/data/facturas';
import BarChartWidget from '@/components/charts/BarChartWidget';

export default function FacturacionPage() {
  const totalCartera = facturas.reduce((sum, f) => sum + f.saldo, 0);
  const facturasPendientes = facturas.filter((f) => f.estado === 'pendiente').length;
  const facturasVencidas = facturas.filter((f) => f.estado === 'vencida').length;

  const datosCartera = [
    { name: 'Pendiente', value: facturas.filter((f) => f.estado === 'pendiente').length },
    { name: 'Emitida', value: facturas.filter((f) => f.estado === 'emitida').length },
    { name: 'Enviada', value: facturas.filter((f) => f.estado === 'enviada').length },
    { name: 'Vencida', value: facturas.filter((f) => f.estado === 'vencida').length },
    { name: 'Pagada', value: facturas.filter((f) => f.estado === 'pagada').length },
  ];

  return (
    <>
      <PageHeader
        title="Facturación y Cartera"
        subtitle="Gestión de facturas y cuentas por cobrar"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <p className="text-xs text-gray-500">Total Cartera</p>
          <p className="text-2xl font-bold text-gray-900">${(totalCartera / 1000000).toFixed(1)}M</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs text-gray-500">Facturas Pendientes</p>
          <p className="text-2xl font-bold text-yellow-600">{facturasPendientes}</p>
        </Card>
        <Card className="p-6 border-red-200">
          <p className="text-xs text-gray-500">Facturas Vencidas</p>
          <p className="text-2xl font-bold text-red-600">{facturasVencidas}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs text-gray-500">Facturas Pagadas</p>
          <p className="text-2xl font-bold text-green-600">{facturas.filter((f) => f.estado === 'pagada').length}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <BarChartWidget title="Estado de Facturas" data={datosCartera} dataKey="value" />
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Facturas</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Factura</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cliente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Saldo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Vencimiento</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {facturas.map((fac) => (
                <tr key={fac.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">{fac.numero}</td>
                  <td className="py-3 px-4 text-gray-700">{fac.clienteNombre}</td>
                  <td className="py-3 px-4 text-gray-700">${(fac.total / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">${(fac.saldo / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-4 text-gray-700">{fac.fechaVencimiento}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={fac.estado} />
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
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
