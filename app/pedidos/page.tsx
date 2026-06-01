'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StatusBadge from '@/components/ui/StatusBadge';
import { pedidos } from '@/data/pedidos';

export default function PedidosPage() {
  const [filtroEstado, setFiltroEstado] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const pedidosFiltrados = pedidos.filter((p) => {
    const matchEstado = !filtroEstado || p.estado === filtroEstado;
    const matchBusqueda = !busqueda ||
      p.numero.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.clienteNombre.toLowerCase().includes(busqueda.toLowerCase());
    return matchEstado && matchBusqueda;
  });

  const estadosUnicos = [...new Set(pedidos.map((p) => p.estado))];

  return (
    <>
      <PageHeader
        title="Gestión de Pedidos"
        subtitle="Crear, editar y seguimiento de pedidos"
        action={
          <Link href="/pedidos/nuevo">
            <Button variant="primary">+ Nuevo Pedido</Button>
          </Link>
        }
      />

      <Card className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar por número o cliente..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los estados</option>
            {estadosUnicos.map((estado) => (
              <option key={estado} value={estado}>
                {estado.replace(/_/g, ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Pedido</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cliente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Fecha</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidosFiltrados.map((pedido) => (
                <tr key={pedido.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">{pedido.numero}</td>
                  <td className="py-3 px-4 text-gray-700">{pedido.clienteNombre}</td>
                  <td className="py-3 px-4 text-gray-700">${(pedido.totalPedido / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={pedido.estado} />
                  </td>
                  <td className="py-3 px-4 text-gray-700">{pedido.fecha}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Link href={`/pedidos/${pedido.id}`}>
                        <Button variant="ghost" size="sm">
                          Ver
                        </Button>
                      </Link>
                      {!['entregado', 'facturado'].includes(pedido.estado) && (
                        <Link href={`/pedidos/${pedido.id}/editar`}>
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                        </Link>
                      )}
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
