'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { alertas } from '@/data/alertas';

export default function AlertasPage() {
  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroPrioridad, setFiltroPrioridad] = useState('');

  const alertasFiltradas = alertas.filter((a) => {
    const matchTipo = !filtroTipo || a.tipo === filtroTipo;
    const matchPrioridad = !filtroPrioridad || a.prioridad === filtroPrioridad;
    return matchTipo && matchPrioridad;
  });

  const tipos = [...new Set(alertas.map((a) => a.tipo))];
  const prioridades = [...new Set(alertas.map((a) => a.prioridad))];

  const alertasCriticas = alertas.filter((a) => a.prioridad === 'critica').length;
  const alertasAltas = alertas.filter((a) => a.prioridad === 'alta').length;

  return (
    <>
      <PageHeader
        title="Alertas y Notificaciones"
        subtitle="Centro de alertas operativas"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-6 text-center border-red-200">
          <p className="text-xs text-gray-500 mb-2">Críticas</p>
          <p className="text-3xl font-bold text-red-600">{alertasCriticas}</p>
        </Card>
        <Card className="p-6 text-center border-orange-200">
          <p className="text-xs text-gray-500 mb-2">Altas</p>
          <p className="text-3xl font-bold text-orange-600">{alertasAltas}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">Total</p>
          <p className="text-3xl font-bold text-blue-600">{alertas.length}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-xs text-gray-500 mb-2">Resueltas</p>
          <p className="text-3xl font-bold text-green-600">{alertas.filter((a) => a.resuelta).length}</p>
        </Card>
      </div>

      <Card className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los tipos</option>
            {tipos.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={filtroPrioridad}
            onChange={(e) => setFiltroPrioridad(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todas las prioridades</option>
            {prioridades.map((prior) => (
              <option key={prior} value={prior}>
                {prior.charAt(0).toUpperCase() + prior.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </Card>

      <div className="space-y-3">
        {alertasFiltradas.map((alerta) => (
          <Card
            key={alerta.id}
            className={`p-4 ${alerta.resuelta ? 'opacity-60 bg-gray-50' : ''}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{alerta.titulo}</h3>
                  <Badge
                    variant={
                      alerta.prioridad === 'critica'
                        ? 'danger'
                        : alerta.prioridad === 'alta'
                          ? 'warning'
                          : alerta.prioridad === 'media'
                            ? 'info'
                            : 'default'
                    }
                  >
                    {alerta.prioridad.charAt(0).toUpperCase() + alerta.prioridad.slice(1)}
                  </Badge>
                  {alerta.resuelta && <Badge variant="success">Resuelta</Badge>}
                </div>
                <p className="text-sm text-gray-600 mb-3">{alerta.descripcion}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{alerta.fecha}</span>
                  {alerta.accionRecomendada && (
                    <span className="text-xs font-medium text-blue-600">{alerta.accionRecomendada}</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <Button variant="ghost" size="sm">
                  Ver
                </Button>
                {!alerta.resuelta && (
                  <Button variant="secondary" size="sm">
                    Resolver
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
