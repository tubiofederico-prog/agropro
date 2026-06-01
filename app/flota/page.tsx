'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Badge from '@/components/ui/Badge';
import BarChartWidget from '@/components/charts/BarChartWidget';
import { flota } from '@/data/flota';
import { conductores } from '@/data/conductores';

export default function FlotaPage() {
  const estadosFlota = [
    { name: 'Disponible', value: flota.filter((v) => v.estado === 'disponible').length },
    { name: 'En Carga', value: flota.filter((v) => v.estado === 'en_carga').length },
    { name: 'En Ruta', value: flota.filter((v) => v.estado === 'en_ruta').length },
    { name: 'Mantenimiento', value: flota.filter((v) => v.estado === 'mantenimiento').length },
  ];

  return (
    <>
      <PageHeader
        title="Gestión de Flota"
        subtitle="Vehículos, conductores y disponibilidad"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {estadosFlota.map((est, idx) => (
          <Card key={idx} className="p-6 text-center">
            <p className="text-xs text-gray-500 mb-2">{est.name}</p>
            <p className="text-3xl font-bold text-blue-600">{est.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <BarChartWidget title="Estado de Vehículos" data={estadosFlota} dataKey="value" />
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehículos</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Placa</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Tipo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Capacidad</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Conductor</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {flota.map((veh) => {
                const conductor = conductores.find((c) => c.id === veh.conductor);
                return (
                  <tr key={veh.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900 font-medium">{veh.placa}</td>
                    <td className="py-3 px-4 text-gray-700">{veh.tipo}</td>
                    <td className="py-3 px-4 text-gray-700">{veh.capacidadToneladas}t / {veh.capacidadVolumen}m³</td>
                    <td className="py-3 px-4">
                      <StatusBadge status={veh.estado} />
                    </td>
                    <td className="py-3 px-4 text-gray-700">{conductor?.nombre || '-'}</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        Ver
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conductores</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Nombre</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cédula</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Teléfono</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Exp.</th>
              </tr>
            </thead>
            <tbody>
              {conductores.map((cond) => (
                <tr key={cond.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">{cond.nombre}</td>
                  <td className="py-3 px-4 text-gray-700">{cond.cedula}</td>
                  <td className="py-3 px-4 text-gray-700">{cond.telefono}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={cond.estado} />
                  </td>
                  <td className="py-3 px-4 text-gray-700">{cond.experiencia} años</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
