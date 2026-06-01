'use client';

import React, { useState } from 'react';
import { Bell, Search, User, ChevronDown } from 'lucide-react';
import Badge from '../ui/Badge';

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Stock Crítico',
      message: 'Antibiótico Oxitetraciclina agotado',
      timestamp: '5 min',
      unread: true,
    },
    {
      id: 2,
      title: 'Pedido Entregado',
      message: 'PED-2026-0001 entregado correctamente',
      timestamp: '2h',
      unread: false,
    },
    {
      id: 3,
      title: 'Remisión Vencida',
      message: 'REM002 aún no facturada',
      timestamp: '4h',
      unread: true,
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 shadow-sm z-20 lg:ml-64">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar pedidos, clientes, productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 ml-6">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notificaciones</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                        notif.unread ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium text-sm text-gray-900">{notif.title}</h4>
                        <span className="text-xs text-gray-500">{notif.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600">{notif.message}</p>
                      {notif.unread && <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />}
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-200 text-center">
                  <a href="/alertas" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Ver todas
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              JD
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Juan Díaz</p>
              <p className="text-xs text-gray-500">Administrador</p>
            </div>
            <ChevronDown size={16} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
