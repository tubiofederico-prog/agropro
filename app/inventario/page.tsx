'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, AlertTriangle } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Badge from '@/components/ui/Badge';
import BarChartWidget from '@/components/charts/BarChartWidget';
import { productos } from '@/data/productos';

export default function InventarioPage() {
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('');

  const productosFiltrados = productos.filter((p) => {
    const matchBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const matchFiltro = !filtro || p.estado === filtro;
    return matchBusqueda && matchFiltro;
  });

  const stockCritico = productos.filter((p) => p.estado === 'agotado' || p.estado === 'bajo_stock').length;
  const datosStock = [
    { name: 'Disponible', value: 10 },
    { name: 'Bajo Stock', value: 3 },
    { name: 'Agotado', value: 1 },
    { name: 'Reservado', value: 1 },
  ];

  return (
    <>
      <PageHeader
        title="Gestión de Inventario"
        subtitle="Control de stock, movimientos y alertas"
        action={
          <div className="flex gap-2">
            <Link href="/inventario/movimientos">
              <Button variant="secondary">Ver Movimientos</Button>
            </Link>
            <Link href="/inventario/stock-bajo">
              <Button variant="danger">⚠️ Stock Bajo</Button>
            </Link>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <p className="text-xs text-gray-500">Total Productos</p>
          <p className="text-2xl font-bold text-gray-900">{productos.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs text-gray-500">Disponibles</p>
          <p className="text-2xl font-bold text-green-600">{productos.filter((p) => p.estado === 'disponible').length}</p>
        </Card>
        <Card className="p-6 border-yellow-200">
          <p className="text-xs text-gray-500">Stock Bajo</p>
          <p className="text-2xl font-bold text-yellow-600">{productos.filter((p) => p.estado === 'bajo_stock').length}</p>
        </Card>
        <Card className="p-6 border-red-200">
          <p className="text-xs text-gray-500">Agotados</p>
          <p className="text-2xl font-bold text-red-600">{productos.filter((p) => p.estado === 'agotado').length}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <BarChartWidget title="Estado del Inventario" data={datosStock} dataKey="value" />
      </div>

      <Card className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los estados</option>
            <option value="disponible">Disponible</option>
            <option value="bajo_stock">Bajo Stock</option>
            <option value="agotado">Agotado</option>
            <option value="reservado">Reservado</option>
          </select>
        </div>
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Producto</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Categoría</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Stock</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Mínimo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.map((prod) => (
                <tr key={prod.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">{prod.nombre}</td>
                  <td className="py-3 px-4 text-gray-700">{prod.categoria}</td>
                  <td className="py-3 px-4 text-gray-700">{prod.stockActual}</td>
                  <td className="py-3 px-4 text-gray-700">{prod.stockMinimo}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={prod.estado} />
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
