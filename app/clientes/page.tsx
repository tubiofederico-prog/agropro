'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StatusBadge from '@/components/ui/StatusBadge';
import { clientes } from '@/data/clientes';

export default function ClientesPage() {
  const [busqueda, setBusqueda] = useState('');

  const clientesFiltrados = clientes.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.contacto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <PageHeader
        title="Clientes y Fincas"
        subtitle="Gestión de clientes, fincas y mayordomos"
        action={
          <Link href="/clientes/nuevo">
            <Button variant="primary">+ Nuevo Cliente</Button>
          </Link>
        }
      />

      <Card className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar por nombre o contacto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientesFiltrados.map((cliente) => (
          <Card key={cliente.id} className="flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{cliente.nombre}</h3>
                <p className="text-xs text-gray-500">{cliente.nit}</p>
              </div>
              <StatusBadge status={cliente.estado} />
            </div>
            <p className="text-sm text-gray-600 mb-3 flex-1">{cliente.razonSocial}</p>
            <div className="space-y-2 mb-4 text-xs text-gray-600">
              <p>📞 {cliente.telefono}</p>
              <p>👤 {cliente.contacto}</p>
              <p>🏠 {cliente.fincas.length} fincas</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <p className="text-xs text-gray-500">Cartera Pendiente</p>
              <p className="text-lg font-bold text-gray-900">${(cliente.carteraPendiente / 1000).toFixed(0)}K</p>
            </div>
            <Link href={`/clientes/${cliente.id}`}>
              <Button variant="ghost" className="w-full" size="sm">
                Ver Detalle
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
