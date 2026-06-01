'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Badge from '@/components/ui/Badge';
import { remisiones } from '@/data/remisiones';

export default function RemisionesPage() {
  const estadosRem = {
    generada: remisiones.filter((r) => r.estado === 'generada').length,
    enviada: remisiones.filter((r) => r.estado === 'enviada').length,
    firmada: remisiones.filter((r) => r.estado === 'firmada').length,
    entregada: remisiones.filter((r) => r.estado === 'entregada').length,
    pendiente_facturar: remisiones.filter((r) => r.estado === 'pendiente_facturar').length,
    facturada: remisiones.filter((r) => r.estado === 'facturada').length,
  };

  return (
    <>
      <PageHeader
        title="Remisiones y Entregas"
        subtitle="Gestión de remisiones digitales y evidencias"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <Card className="p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Generada</p>
          <p className="text-2xl font-bold text-blue-600">{estadosRem.generada}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Enviada</p>
          <p className="text-2xl font-bold text-purple-600">{estadosRem.enviada}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Firmada</p>
          <p className="text-2xl font-bold text-green-600">{estadosRem.firmada}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Entregada</p>
          <p className="text-2xl font-bold text-cyan-600">{estadosRem.entregada}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">P/ Facturar</p>
          <p className="text-2xl font-bold text-yellow-600">{estadosRem.pendiente_facturar}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Facturada</p>
          <p className="text-2xl font-bold text-emerald-600">{estadosRem.facturada}</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Remisiones</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Remisión</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Pedido</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cliente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Firmada Por</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {remisiones.map((rem) => (
                <tr key={rem.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">{rem.numero}</td>
                  <td className="py-3 px-4 text-gray-700">{rem.pedidoNumero}</td>
                  <td className="py-3 px-4 text-gray-700">{rem.clienteNombre}</td>
                  <td className="py-3 px-4 text-gray-700">${(rem.total / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={rem.estado} />
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-xs">{rem.responsableFirma || '-'}</td>
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
