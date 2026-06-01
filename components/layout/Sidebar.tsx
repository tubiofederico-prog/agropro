'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  Truck,
  Boxes,
  Map,
  FileText,
  DollarSign,
  Bell,
  BarChart3,
  Settings,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import clsx from 'clsx';

const modules = [
  { id: 'dashboard', label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { id: 'pedidos', label: 'Pedidos', href: '/pedidos', icon: ShoppingCart },
  { id: 'clientes', label: 'Clientes y Fincas', href: '/clientes', icon: Users },
  { id: 'inventario', label: 'Inventario', href: '/inventario', icon: Package },
  { id: 'logistica', label: 'Logística', href: '/logistica', icon: Boxes },
  { id: 'flota', label: 'Flota', href: '/flota', icon: Truck },
  { id: 'rutas', label: 'Rutas', href: '/rutas', icon: Map },
  { id: 'remisiones', label: 'Remisiones', href: '/remisiones', icon: FileText },
  { id: 'facturacion', label: 'Facturación', href: '/facturacion', icon: DollarSign },
  { id: 'alertas', label: 'Alertas', href: '/alertas', icon: Bell },
  { id: 'reportes', label: 'Reportes', href: '/reportes', icon: BarChart3 },
  { id: 'configuracion', label: 'Configuración', href: '/configuracion', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 lg:hidden text-gray-700 hover:text-gray-900"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={clsx(
          'fixed left-0 top-0 h-screen bg-slate-900 text-white w-64 shadow-lg transition-transform duration-300 z-30 lg:z-20 lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-full flex flex-col">
          <div className="px-6 py-8 border-b border-slate-700">
            <h1 className="text-xl font-bold">AgroPro</h1>
            <p className="text-xs text-slate-400 mt-1">Gestión Operativa</p>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {modules.map((module) => {
              const Icon = module.icon;
              const isActive = pathname === module.href || pathname.startsWith(module.href + '/');
              return (
                <Link
                  key={module.id}
                  href={module.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors',
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  )}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{module.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="px-4 py-6 border-t border-slate-700 text-xs text-slate-400">
            <p>© 2026 AgroPro</p>
            <p>v1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
}
