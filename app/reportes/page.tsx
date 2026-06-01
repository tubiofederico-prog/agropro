'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import BarChartWidget from '@/components/charts/BarChartWidget';
import LineChartWidget from '@/components/charts/LineChartWidget';
import { pedidos } from '@/data/pedidos';
import { facturas } from '@/data/facturas';

export default function ReportesPage() {
  const datosPedidos = [
    { name: 'Sem 1', pedidos: 5, entregados: 3 },
    { name: 'Sem 2', pedidos: 7, entregados: 5 },
    { name: 'Sem 3', pedidos: 4, entregados: 4 },
    { name: 'Sem 4', pedidos: 6, entregados: 5 },
  ];

  const datosFacturacion = [
    { name: 'Sem 1', emitidas: 4, pagadas: 2 },
    { name: 'Sem 2', emitidas: 6, pagadas: 4 },
    { name: 'Sem 3', emitidas: 3, pagadas: 3 },
    { name: 'Sem 4', emitidas: 5, pagadas: 2 },
  ];

  const totalCartera = facturas.reduce((sum, f) => sum + f.saldo, 0);
  const carteraPagada = facturas.filter((f) => f.estado === 'pagada').reduce((sum, f) => sum + f.total, 0);

  return (
    <>
      <PageHeader
        title="Reportes"
        subtitle="Análisis y reportes operativos"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <p className="text-xs text-gray-500">Total Pedidos</p>
          <p className="text-2xl font-bold text-gray-900">{pedidos.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs text-gray-500">Entregados</p>
          <p className="text-2xl font-bold text-green-600">{pedidos.filter((p) => p.estado === 'entregado').length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs text-gray-500">Cartera Total</p>
          <p className="text-2xl font-bold text-gray-900">${(totalCartera / 1000000).toFixed(1)}M</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs text-gray-500">Cartera Cobrada</p>
          <p className="text-2xl font-bold text-green-600">${(carteraPagada / 1000000).toFixed(1)}M</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <BarChartWidget title="Pedidos por Semana" data={datosPedidos} dataKey="pedidos" />
        <BarChartWidget title="Facturación por Semana" data={datosFacturacion} dataKey="emitidas" />
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8">
        <LineChartWidget title="Tendencia de Entregas" data={datosPedidos} dataKey="entregados" />
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Descargar Reportes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Button variant="secondary" className="w-full">
            📊 Reporte Pedidos
          </Button>
          <Button variant="secondary" className="w-full">
            📈 Reporte Logística
          </Button>
          <Button variant="secondary" className="w-full">
            💳 Reporte Facturación
          </Button>
          <Button variant="secondary" className="w-full">
            📦 Reporte Inventario
          </Button>
          <Button variant="secondary" className="w-full">
            🚛 Reporte Flota
          </Button>
          <Button variant="secondary" className="w-full">
            👥 Reporte Clientes
          </Button>
        </div>
      </Card>
    </>
  );
}
