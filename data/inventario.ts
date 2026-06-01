export interface MovimientoInventario {
  id: string;
  productoId: string;
  productoNombre: string;
  tipoMovimiento: 'entrada' | 'salida' | 'ajuste';
  cantidad: number;
  fecha: string;
  referencia: string; // OC, Pedido, etc.
  responsable: string;
  observaciones?: string;
}

export const movimientos: MovimientoInventario[] = [
  {
    id: 'MOV001',
    productoId: 'PROD001',
    productoNombre: 'Concentrado Ganadero Premium 16%',
    tipoMovimiento: 'entrada',
    cantidad: 50,
    fecha: '2026-05-28',
    referencia: 'OC-2026-0045',
    responsable: 'Juan López',
    observaciones: 'Entrada por compra a proveedor principal',
  },
  {
    id: 'MOV002',
    productoId: 'PROD001',
    productoNombre: 'Concentrado Ganadero Premium 16%',
    tipoMovimiento: 'salida',
    cantidad: 10,
    fecha: '2026-06-02',
    referencia: 'PED-2026-0001',
    responsable: 'Carlos Gómez',
    observaciones: 'Salida por entrega pedido',
  },
  {
    id: 'MOV003',
    productoId: 'PROD002',
    productoNombre: 'Concentrado Ganadero Economía 12%',
    tipoMovimiento: 'entrada',
    cantidad: 100,
    fecha: '2026-05-25',
    referencia: 'OC-2026-0044',
    responsable: 'Juan López',
    observaciones: 'Compra a proveedor alternativo',
  },
  {
    id: 'MOV004',
    productoId: 'PROD002',
    productoNombre: 'Concentrado Ganadero Economía 12%',
    tipoMovimiento: 'salida',
    cantidad: 15,
    fecha: '2026-06-01',
    referencia: 'PED-2026-0002',
    responsable: 'Carlos Gómez',
    observaciones: 'Salida por entrega',
  },
  {
    id: 'MOV005',
    productoId: 'PROD008',
    productoNombre: 'Antibiótico Oxitetraciclina',
    tipoMovimiento: 'salida',
    cantidad: 5,
    fecha: '2026-05-20',
    referencia: 'PED-2026-0099',
    responsable: 'Carlos Gómez',
    observaciones: 'Último stock vendido',
  },
  {
    id: 'MOV006',
    productoId: 'PROD003',
    productoNombre: 'Mineral Bovino Completo',
    tipoMovimiento: 'entrada',
    cantidad: 30,
    fecha: '2026-05-30',
    referencia: 'OC-2026-0050',
    responsable: 'Juan López',
    observaciones: 'Reposición de stock',
  },
  {
    id: 'MOV007',
    productoId: 'PROD003',
    productoNombre: 'Mineral Bovino Completo',
    tipoMovimiento: 'salida',
    cantidad: 3,
    fecha: '2026-06-02',
    referencia: 'PED-2026-0001',
    responsable: 'Carlos Gómez',
    observaciones: 'Salida por entrega',
  },
  {
    id: 'MOV008',
    productoId: 'PROD011',
    productoNombre: 'Fertilizante NPK 15-15-15',
    tipoMovimiento: 'entrada',
    cantidad: 150,
    fecha: '2026-05-22',
    referencia: 'OC-2026-0048',
    responsable: 'Juan López',
    observaciones: 'Entrada estacional para temporada agrícola',
  },
  {
    id: 'MOV009',
    productoId: 'PROD011',
    productoNombre: 'Fertilizante NPK 15-15-15',
    tipoMovimiento: 'ajuste',
    cantidad: -5,
    fecha: '2026-05-27',
    referencia: 'INV-2026-0001',
    responsable: 'Supervisor',
    observaciones: 'Ajuste por merma y deterioro detectado en inventario físico',
  },
  {
    id: 'MOV010',
    productoId: 'PROD005',
    productoNombre: 'Alimento Aves Ponedoras Premium',
    tipoMovimiento: 'entrada',
    cantidad: 50,
    fecha: '2026-05-24',
    referencia: 'OC-2026-0046',
    responsable: 'Juan López',
    observaciones: 'Compra periódica para clientes avícolas',
  },
];
