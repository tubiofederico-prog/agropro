'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const usuarios = [
  { id: 1, nombre: 'Juan Díaz', rol: 'Administrador', email: 'juan@agropro.com', estado: 'activo' },
  { id: 2, nombre: 'María López', rol: 'Ventas', email: 'maria@agropro.com', estado: 'activo' },
  { id: 3, nombre: 'Carlos Gómez', rol: 'Logística', email: 'carlos@agropro.com', estado: 'activo' },
  { id: 4, nombre: 'Sandra Pérez', rol: 'Bodega', email: 'sandra@agropro.com', estado: 'activo' },
  { id: 5, nombre: 'Roberto Sánchez', rol: 'Facturación', email: 'roberto@agropro.com', estado: 'inactivo' },
];

const roles = [
  { nombre: 'Administrador', permisos: 'Acceso total al sistema' },
  { nombre: 'Ventas', permisos: 'Crear pedidos, gestionar clientes' },
  { nombre: 'Logística', permisos: 'Gestionar despachos y entregas' },
  { nombre: 'Bodega', permisos: 'Alistamiento e inventario' },
  { nombre: 'Facturación', permisos: 'Crear facturas y gestionar cartera' },
  { nombre: 'Conductor', permisos: 'Ver rutas y entregas asignadas' },
];

export default function ConfiguracionPage() {
  return (
    <>
      <PageHeader title="Configuración" subtitle="Gestión de usuarios, roles y parámetros" />

      <div className="space-y-8">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Usuarios del Sistema</h3>
            <Button variant="primary" size="sm">
              + Nuevo Usuario
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Nombre</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Rol</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900 font-medium">{user.nombre}</td>
                    <td className="py-3 px-4">
                      <Badge variant="info">{user.rol}</Badge>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{user.email}</td>
                    <td className="py-3 px-4">
                      <Badge variant={user.estado === 'activo' ? 'success' : 'danger'}>
                        {user.estado}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Roles y Permisos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((rol) => (
              <div key={rol.nombre} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">{rol.nombre}</h4>
                <p className="text-sm text-gray-600">{rol.permisos}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Parámetros del Sistema</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
              <input
                type="text"
                defaultValue="Distribuidora AgroPro S.A.S"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email de Contacto</label>
              <input
                type="email"
                defaultValue="contacto@agropro.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">NIT Empresa</label>
              <input
                type="text"
                defaultValue="900.234.567-9"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Días de Crédito por Defecto</label>
              <input
                type="number"
                defaultValue="30"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button variant="primary">Guardar Cambios</Button>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Integraciones</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">GPS Tracker</h4>
                <p className="text-xs text-gray-600">Integración con sistema GPS de vehículos</p>
              </div>
              <Badge variant="info">Configurado</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Sistema Contable</h4>
                <p className="text-xs text-gray-600">Exportar facturas a contabilidad</p>
              </div>
              <Badge variant="warning">Pendiente</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Notificaciones SMS</h4>
                <p className="text-xs text-gray-600">Enviar alertas por SMS a clientes</p>
              </div>
              <Badge variant="info">Configurado</Badge>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
