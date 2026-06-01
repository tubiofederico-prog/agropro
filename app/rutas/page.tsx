'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Badge from '@/components/ui/Badge';
import MapMock from '@/components/ui/MapMock';
import { rutas } from '@/data/rutas';

export default function RutasPage() {
  const estadosRutas = {
    planificada: rutas.filter((r) => r.estado === 'planificada').length,
    en_ruta: rutas.filter((r) => r.estado === 'en_ruta').length,
    completada: rutas.filter((r) => r.estado === 'completada').length,
  };

  const ubicacionesRuta = rutas
    .flatMap((r) =>
      r.paradas.map((p, idx) => ({
        id: p.id,
        nombre: `${idx + 1}. ${p.clienteNombre}`,
        lat: p.coordenadas.lat,
        lng: p.coordenadas.lng,
        tipo: 'ruta' as const,
      }))
    )
    .slice(0, 10);

  return (
    <>
      <PageHeader
        title="Gestión de Rutas"
        subtitle="Planificación y optimización de entregas"
        action={
          <Button variant="primary">+ Nueva Ruta</Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">Planificadas</p>
          <p className="text-3xl font-bold text-blue-600">{estadosRutas.planificada}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">En Ruta</p>
          <p className="text-3xl font-bold text-orange-600">{estadosRutas.en_ruta}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">Completadas</p>
          <p className="text-3xl font-bold text-green-600">{estadosRutas.completada}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MapMock locations={ubicacionesRuta} title="Rutas Activas" />
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rutas</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Ruta</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Zona</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Vehículo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Paradas</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">KM</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {rutas.map((ruta) => (
                <tr key={ruta.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">{ruta.numero}</td>
                  <td className="py-3 px-4 text-gray-700">{ruta.zona}</td>
                  <td className="py-3 px-4 text-gray-700">{ruta.vehiculoId}</td>
                  <td className="py-3 px-4 text-gray-700">{ruta.totalParadas}</td>
                  <td className="py-3 px-4 text-gray-700">{ruta.totalKm} km</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={ruta.estado} />
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
