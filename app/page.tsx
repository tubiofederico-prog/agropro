'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import KPICard from '@/components/ui/KPICard';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StatusBadge from '@/components/ui/StatusBadge';
import BarChartWidget from '@/components/charts/BarChartWidget';
import DonutChartWidget from '@/components/charts/DonutChartWidget';
import MapMock from '@/components/ui/MapMock';
import { pedidos } from '@/data/pedidos';
import { alertas } from '@/data/alertas';
import { flota } from '@/data/flota';
import { clientes } from '@/data/clientes';
import { productos } from '@/data/productos';

export default function Dashboard() {
  const pedidosActivos = pedidos.filter((p) => !['entregado', 'facturado'].includes(p.estado)).length;
  const pedidosEntregados = pedidos.filter((p) => p.estado === 'entregado').length;
  const remisionesPendientes = alertas.filter((a) => a.tipo === 'remision').length;
  const vehiculosDisponibles = flota.filter((v) => v.estado === 'disponible').length;
  const stockCritico = productos.filter((p) => p.estado === 'agotado' || p.estado === 'bajo_stock').length;
  const carteraPendiente = clientes.reduce((sum, c) => sum + c.carteraPendiente, 0);

  const pedidosPorEstado = [
    { name: 'Recibido', value: 2, color: '#3b82f6' },
    { name: 'Validando', value: 1, color: '#10b981' },
    { name: 'En Ruta', value: 2, color: '#f59e0b' },
    { name: 'Entregado', value: 2, color: '#06b6d4' },
    { name: 'Facturado', value: 1, color: '#8b5cf6' },
  ];

  const entregazasPorZona = [
    { name: 'Pereira', value: 3 },
    { name: 'Caldas', value: 4 },
    { name: 'Quindío', value: 5 },
    { name: 'Valle', value: 2 },
    { name: 'Risaralda', value: 3 },
  ];

  const ubicacionesFincas = clientes
    .flatMap((c) =>
      c.fincas.map((f) => ({
        id: f.id,
        nombre: f.nombre,
        lat: f.coordenadas.lat,
        lng: f.coordenadas.lng,
        tipo: 'cliente' as const,
      }))
    )
    .slice(0, 8);

  const alertasAltas = alertas.filter((a) => ['alta', 'critica'].includes(a.prioridad)).slice(0, 5);

  const clientesInactivos = clientes.filter((c) => c.estado === 'inactivo').length;

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Resumen operativo general de la plataforma"
        action={
          <div className="flex gap-2">
            <Link href="/pedidos/nuevo">
              <Button size="md" variant="primary">
                + Nuevo Pedido
              </Button>
            </Link>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard
          title="Pedidos Activos"
          value={pedidosActivos}
          subtitle="En proceso"
          icon="📋"
          badgeVariant="info"
          badgeLabel="En Operación"
        />
        <KPICard
          title="Pedidos Entregados"
          value={pedidosEntregados}
          subtitle="Este mes"
          icon="✓"
          badgeVariant="success"
          badgeLabel="Completados"
          trendValue="+12%"
          trend="up"
        />
        <KPICard
          title="Remisiones S/Facturar"
          value={remisionesPendientes}
          subtitle="Pendientes"
          icon="📄"
          badgeVariant="warning"
          badgeLabel="Atención"
        />
        <KPICard
          title="Vehículos Disponibles"
          value={vehiculosDisponibles}
          subtitle="De 7 en flota"
          icon="🚛"
          badgeVariant="success"
          badgeLabel="Listos"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard
          title="Stock Crítico"
          value={stockCritico}
          subtitle="Productos"
          icon="⚠️"
          badgeVariant="danger"
          badgeLabel="Crítico"
          trendValue="-2"
          trend="down"
        />
        <KPICard
          title="Cartera Pendiente"
          value={`$${(carteraPendiente / 1000000).toFixed(1)}M`}
          subtitle="Por cobrar"
          icon="💰"
          badgeVariant="warning"
          badgeLabel="Seguimiento"
        />
        <KPICard
          title="Clientes Activos"
          value={clientes.length - clientesInactivos}
          subtitle={`${clientesInactivos} inactivos`}
          icon="👥"
          badgeVariant="success"
          badgeLabel="Operando"
        />
        <KPICard
          title="Eficiencia Logística"
          value="94%"
          subtitle="Entregas a tiempo"
          icon="📈"
          badgeVariant="success"
          badgeLabel="Excelente"
          trendValue="+3%"
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <DonutChartWidget title="Pedidos por Estado" data={pedidosPorEstado} />
        <BarChartWidget title="Entregas por Zona" data={entregazasPorZona} dataKey="value" />
        <Card className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accesos Rápidos</h3>
          <div className="space-y-2">
            <Link href="/pedidos">
              <Button variant="ghost" className="w-full justify-start text-left">
                📋 Gestionar Pedidos
              </Button>
            </Link>
            <Link href="/logistica">
              <Button variant="ghost" className="w-full justify-start text-left">
                📦 Ver Alistamientos
              </Button>
            </Link>
            <Link href="/flota">
              <Button variant="ghost" className="w-full justify-start text-left">
                🚛 Asignar Vehículos
              </Button>
            </Link>
            <Link href="/remisiones">
              <Button variant="ghost" className="w-full justify-start text-left">
                📄 Gestionar Remisiones
              </Button>
            </Link>
            <Link href="/facturacion">
              <Button variant="ghost" className="w-full justify-start text-left">
                💳 Facturación
              </Button>
            </Link>
            <Link href="/inventario">
              <Button variant="ghost" className="w-full justify-start text-left">
                📦 Revisar Inventario
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MapMock locations={ubicacionesFincas} title="Ubicación de Puntos de Entrega" />
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle size={20} className="text-red-600" />
            Alertas Prioritarias
          </h3>
          <div className="space-y-3">
            {alertasAltas.map((alerta) => (
              <div key={alerta.id} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-medium text-sm text-gray-900">{alerta.titulo}</h4>
                  <Badge
                    variant={
                      alerta.prioridad === 'critica'
                        ? 'danger'
                        : alerta.prioridad === 'alta'
                          ? 'warning'
                          : 'info'
                    }
                  >
                    {alerta.prioridad.charAt(0).toUpperCase() + alerta.prioridad.slice(1)}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mb-2">{alerta.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{alerta.fecha}</span>
                  <Link href="/alertas">
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link href="/alertas" className="block mt-4">
            <Button variant="ghost" className="w-full">
              Ver todas las alertas
            </Button>
          </Link>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pedidos Recientes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Pedido</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cliente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.slice(0, 5).map((pedido) => (
                <tr key={pedido.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">{pedido.numero}</td>
                  <td className="py-3 px-4 text-gray-700">{pedido.clienteNombre}</td>
                  <td className="py-3 px-4 text-gray-700">${(pedido.totalPedido / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={pedido.estado} />
                  </td>
                  <td className="py-3 px-4">
                    <Link href={`/pedidos/${pedido.id}`}>
                      <Button variant="ghost" size="sm">
                        Ver
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/pedidos" className="block mt-4">
          <Button variant="ghost" className="w-full">
            Ver todos los pedidos
          </Button>
        </Link>
      </Card>
    </>
  );
}
