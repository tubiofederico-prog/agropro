export interface Alerta {
  id: string;
  tipo: 'stock' | 'cliente' | 'remision' | 'logistica' | 'flota' | 'ruta' | 'facturacion';
  prioridad: 'baja' | 'media' | 'alta' | 'critica';
  titulo: string;
  descripcion: string;
  fecha: string;
  resuelta: boolean;
  accionRecomendada?: string;
  idRelacionado?: string; // ID del recurso relacionado (producto, cliente, pedido, etc.)
}

export const alertas: Alerta[] = [
  {
    id: 'ALR001',
    tipo: 'stock',
    prioridad: 'critica',
    titulo: 'Producto Agotado: Antibiótico Oxitetraciclina',
    descripcion:
      'El producto PROD008 (Antibiótico Oxitetraciclina) está completamente agotado. Hay 1 pedido bloqueado esperando este producto.',
    fecha: '2026-05-31',
    resuelta: false,
    accionRecomendada: 'Realizar orden de compra urgente. Contactar a proveedor principal.',
    idRelacionado: 'PROD008',
  },
  {
    id: 'ALR002',
    tipo: 'stock',
    prioridad: 'alta',
    titulo: 'Stock Bajo: Sal Mineral Porcina',
    descripcion: 'Producto PROD004 con stock bajo (80 unidades). Stock mínimo: 20.',
    fecha: '2026-05-31',
    resuelta: false,
    accionRecomendada: 'Programar compra para próxima semana.',
    idRelacionado: 'PROD004',
  },
  {
    id: 'ALR003',
    tipo: 'cliente',
    prioridad: 'alta',
    titulo: 'Cliente Inactivo: Ganadería Buenavista',
    descripcion:
      'El cliente CLI006 (Ganadería Buenavista) no ha realizado compras en 52 días. Su frecuencia habitual es cada 7 días.',
    fecha: '2026-05-30',
    resuelta: false,
    accionRecomendada: 'Contactar al cliente para confirmación de status.',
    idRelacionado: 'CLI006',
  },
  {
    id: 'ALR004',
    tipo: 'remision',
    prioridad: 'alta',
    titulo: 'Remisión Pendiente de Factura',
    descripcion:
      'La remisión REM002 (Hacienda Santa Rosa) fue entregada el 2026-06-03 pero aún no ha sido facturada.',
    fecha: '2026-06-03',
    resuelta: false,
    accionRecomendada: 'Generar factura inmediatamente para registrar el ingreso.',
    idRelacionado: 'REM002',
  },
  {
    id: 'ALR005',
    tipo: 'facturacion',
    prioridad: 'alta',
    titulo: 'Factura Vencida: Hacienda Santa Rosa',
    descripcion: 'La factura FAC003 emitida a Hacienda Santa Rosa venció el 2026-06-18. Saldo pendiente: $1.085.000.',
    fecha: '2026-06-20',
    resuelta: false,
    accionRecomendada: 'Iniciar seguimiento de cobro. Considerar suspensión de crédito.',
    idRelacionado: 'FAC003',
  },
  {
    id: 'ALR006',
    tipo: 'logistica',
    prioridad: 'media',
    titulo: 'Pedido en Alistamiento Retrasado',
    descripcion:
      'El pedido PED-2026-0004 (Cría Integral de Porcinos) se encuentra en preparación desde el 2026-05-31. Fecha de entrega estimada vencida.',
    fecha: '2026-06-01',
    resuelta: false,
    accionRecomendada: 'Verificar estado de alistamiento en bodega.',
    idRelacionado: 'PED-2026-0004',
  },
  {
    id: 'ALR007',
    tipo: 'stock',
    prioridad: 'media',
    titulo: 'Stock Bajo: Premezcla Mineral Avícola',
    descripcion: 'Producto PROD014 con stock bajo (75 unidades). Stock mínimo: 20.',
    fecha: '2026-05-29',
    resuelta: false,
    accionRecomendada: 'Reponer stock en próximos días.',
    idRelacionado: 'PROD014',
  },
  {
    id: 'ALR008',
    tipo: 'flota',
    prioridad: 'media',
    titulo: 'Vehículo en Mantenimiento',
    descripcion: 'El vehículo VEH005 (HKM-102) se encuentra en mantenimiento preventivo. Estimado 2 días.',
    fecha: '2026-05-31',
    resuelta: false,
    accionRecomendada: 'Redistribuir cargas a otros vehículos disponibles.',
    idRelacionado: 'VEH005',
  },
  {
    id: 'ALR009',
    tipo: 'ruta',
    prioridad: 'media',
    titulo: 'Oportunidad de Optimización de Ruta',
    descripcion:
      'La ruta RUT003 puede ser optimizada. Hay un cliente (CLI010) muy cercano a PAR005 que podría agregarse.',
    fecha: '2026-06-01',
    resuelta: false,
    accionRecomendada: 'Revisar pedidos cercanos y consolidar en una misma ruta.',
    idRelacionado: 'RUT003',
  },
  {
    id: 'ALR010',
    tipo: 'stock',
    prioridad: 'baja',
    titulo: 'Stock Bajo: Vitaminas Inyectable A+D+E',
    descripcion: 'Producto PROD007 con stock bajo (45 unidades). Stock mínimo: 20.',
    fecha: '2026-05-28',
    resuelta: true,
    accionRecomendada: 'Reponer en próxima orden de compra.',
    idRelacionado: 'PROD007',
  },
  {
    id: 'ALR011',
    tipo: 'remision',
    prioridad: 'baja',
    titulo: 'Remisión Pendiente de Firma',
    descripcion: 'La remisión REM004 fue enviada el 2026-06-02 pero aún no ha sido firmada por el cliente.',
    fecha: '2026-06-02',
    resuelta: false,
    accionRecomendada: 'Hacer seguimiento al conductor para obtener firma.',
    idRelacionado: 'REM004',
  },
];
