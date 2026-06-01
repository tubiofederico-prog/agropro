import React from 'react';
import Badge from './Badge';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusMap: Record<
  string,
  { variant: 'success' | 'warning' | 'danger' | 'info' | 'default'; label: string }
> = {
  activo: { variant: 'success', label: 'Activo' },
  inactivo: { variant: 'danger', label: 'Inactivo' },
  suspendido: { variant: 'danger', label: 'Suspendido' },
  disponible: { variant: 'success', label: 'Disponible' },
  bajo_stock: { variant: 'warning', label: 'Bajo Stock' },
  agotado: { variant: 'danger', label: 'Agotado' },
  reservado: { variant: 'warning', label: 'Reservado' },
  recibido: { variant: 'info', label: 'Recibido' },
  validando_inventario: { variant: 'info', label: 'Validando Inventario' },
  pendiente_stock: { variant: 'warning', label: 'Pendiente Stock' },
  listo_alistamiento: { variant: 'info', label: 'Listo Alistamiento' },
  en_preparacion: { variant: 'info', label: 'En Preparación' },
  listo_despacho: { variant: 'success', label: 'Listo Despacho' },
  en_ruta: { variant: 'info', label: 'En Ruta' },
  entregado: { variant: 'success', label: 'Entregado' },
  facturado: { variant: 'success', label: 'Facturado' },
  en_carga: { variant: 'info', label: 'En Carga' },
  en_espera: { variant: 'warning', label: 'En Espera' },
  mantenimiento: { variant: 'warning', label: 'Mantenimiento' },
  generada: { variant: 'info', label: 'Generada' },
  enviada: { variant: 'info', label: 'Enviada' },
  firmada: { variant: 'success', label: 'Firmada' },
  pendiente_facturar: { variant: 'warning', label: 'Pendiente Facturar' },
  pendiente: { variant: 'warning', label: 'Pendiente' },
  emitida: { variant: 'success', label: 'Emitida' },
  vencida: { variant: 'danger', label: 'Vencida' },
  pagada: { variant: 'success', label: 'Pagada' },
  planificada: { variant: 'info', label: 'Planificada' },
  completada: { variant: 'success', label: 'Completada' },
  pendiente_firma: { variant: 'warning', label: 'Pendiente Firma' },
  visitada: { variant: 'success', label: 'Visitada' },
  resuelta: { variant: 'success', label: 'Resuelta' },
};

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusMap[status] || { variant: 'default' as const, label: status };
  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
}
