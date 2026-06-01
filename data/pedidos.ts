export interface LineaPedido {
  id: string;
  productoId: string;
  productoNombre: string;
  cantidadSolicitada: number;
  cantidadConfirmada: number;
  cantidadEntregada: number;
  precioUnitario: number;
  subtotal: number;
}

export interface Pedido {
  id: string;
  numero: string;
  clienteId: string;
  clienteNombre: string;
  fincaId: string;
  fincaNombre: string;
  direccionEntrega: string;
  mayordoloId: string;
  mayordomoNombre: string;
  telefonoEntrega: string;
  fecha: string; // ISO date
  fechaEntregaEstimada: string; // ISO date
  estado:
    | 'recibido'
    | 'validando_inventario'
    | 'pendiente_stock'
    | 'listo_alistamiento'
    | 'en_preparacion'
    | 'listo_despacho'
    | 'en_ruta'
    | 'entregado'
    | 'facturado';
  lineas: LineaPedido[];
  totalPedido: number;
  observaciones?: string;
  remisionId?: string;
  vehiculoAsignado?: string;
  rutaId?: string;
  recibidoPor?: string;
  fechaEntrega?: string;
  requiereEntregasParciales: boolean;
  esRecurrente: boolean;
  frecuenciaRecurrencia?: number; // días
}

export const pedidos: Pedido[] = [
  {
    id: '1',
    numero: 'PED-2026-0001',
    clienteId: 'CLI001',
    clienteNombre: 'Ganadería Los Andes',
    fincaId: 'FIN001-1',
    fincaNombre: 'Finca Las Mesas',
    direccionEntrega: 'Km 2 vía a Pereira, Pereira',
    mayordoloId: 'MAY001',
    mayordomoNombre: 'Rogelio Martínez',
    telefonoEntrega: '+57 321 4445566',
    fecha: '2026-05-28',
    fechaEntregaEstimada: '2026-06-02',
    estado: 'entregado',
    lineas: [
      {
        id: 'LIN001',
        productoId: 'PROD001',
        productoNombre: 'Concentrado Ganadero Premium 16%',
        cantidadSolicitada: 10,
        cantidadConfirmada: 10,
        cantidadEntregada: 10,
        precioUnitario: 85000,
        subtotal: 850000,
      },
      {
        id: 'LIN002',
        productoId: 'PROD003',
        productoNombre: 'Mineral Bovino Completo',
        cantidadSolicitada: 3,
        cantidadConfirmada: 3,
        cantidadEntregada: 3,
        precioUnitario: 45000,
        subtotal: 135000,
      },
    ],
    totalPedido: 985000,
    observaciones: 'Entrega exitosa. Recibido por Rogelio Martínez',
    remisionId: 'REM001',
    vehiculoAsignado: 'VEH001',
    rutaId: 'RUT001',
    recibidoPor: 'Rogelio Martínez',
    fechaEntrega: '2026-06-02',
    requiereEntregasParciales: false,
    esRecurrente: true,
    frecuenciaRecurrencia: 7,
  },
  {
    id: '2',
    numero: 'PED-2026-0002',
    clienteId: 'CLI002',
    clienteNombre: 'Hacienda Santa Rosa',
    fincaId: 'FIN002-1',
    fincaNombre: 'Hacienda Santa Rosa Principal',
    direccionEntrega: 'Sector Manizales, Manizales',
    mayordoloId: 'MAY002',
    mayordomoNombre: 'Andrés Felipe Gómez',
    telefonoEntrega: '+57 320 8889999',
    fecha: '2026-05-30',
    fechaEntregaEstimada: '2026-06-03',
    estado: 'en_ruta',
    lineas: [
      {
        id: 'LIN003',
        productoId: 'PROD002',
        productoNombre: 'Concentrado Ganadero Economía 12%',
        cantidadSolicitada: 15,
        cantidadConfirmada: 15,
        cantidadEntregada: 0,
        precioUnitario: 65000,
        subtotal: 975000,
      },
      {
        id: 'LIN004',
        productoId: 'PROD009',
        productoNombre: 'Desparasitante Oral Líquido',
        cantidadSolicitada: 2,
        cantidadConfirmada: 2,
        cantidadEntregada: 0,
        precioUnitario: 55000,
        subtotal: 110000,
      },
    ],
    totalPedido: 1085000,
    observaciones: 'En ruta hacia destino. Salida: 31 mayo 2026',
    remisionId: 'REM002',
    vehiculoAsignado: 'VEH002',
    rutaId: 'RUT002',
    requiereEntregasParciales: false,
    esRecurrente: true,
    frecuenciaRecurrencia: 5,
  },
  {
    id: '3',
    numero: 'PED-2026-0003',
    clienteId: 'CLI003',
    clienteNombre: 'Producción Avícola del Eje',
    fincaId: 'FIN003-1',
    fincaNombre: 'Granja Avícola Principal',
    direccionEntrega: 'Carrera 5 No 8-40, Armenia',
    mayordoloId: 'MAY004',
    mayordomoNombre: 'Sergio Guzmán',
    telefonoEntrega: '+57 315 2223333',
    fecha: '2026-05-29',
    fechaEntregaEstimada: '2026-06-01',
    estado: 'listo_despacho',
    lineas: [
      {
        id: 'LIN005',
        productoId: 'PROD005',
        productoNombre: 'Alimento Aves Ponedoras Premium',
        cantidadSolicitada: 8,
        cantidadConfirmada: 8,
        cantidadEntregada: 0,
        precioUnitario: 72000,
        subtotal: 576000,
      },
      {
        id: 'LIN006',
        productoId: 'PROD014',
        productoNombre: 'Premezcla Mineral Avícola',
        cantidadSolicitada: 2,
        cantidadConfirmada: 2,
        cantidadEntregada: 0,
        precioUnitario: 92000,
        subtotal: 184000,
      },
    ],
    totalPedido: 760000,
    observaciones: 'Listo para cargar y enviar',
    remisionId: 'REM003',
    requiereEntregasParciales: false,
    esRecurrente: true,
    frecuenciaRecurrencia: 3,
  },
  {
    id: '4',
    numero: 'PED-2026-0004',
    clienteId: 'CLI004',
    clienteNombre: 'Cría Integral de Porcinos',
    fincaId: 'FIN004-1',
    fincaNombre: 'Granja Porcícola La Esperanza',
    direccionEntrega: 'Finca La Esperanza, Palestina',
    mayordoloId: 'MAY005',
    mayordomoNombre: 'Roberto Vergara',
    telefonoEntrega: '+57 318 5556666',
    fecha: '2026-05-31',
    fechaEntregaEstimada: '2026-06-04',
    estado: 'en_preparacion',
    lineas: [
      {
        id: 'LIN007',
        productoId: 'PROD006',
        productoNombre: 'Concentrado Porcino Engorde',
        cantidadSolicitada: 12,
        cantidadConfirmada: 12,
        cantidadEntregada: 0,
        precioUnitario: 58000,
        subtotal: 696000,
      },
      {
        id: 'LIN008',
        productoId: 'PROD004',
        productoNombre: 'Sal Mineral Porcina',
        cantidadSolicitada: 4,
        cantidadConfirmada: 4,
        cantidadEntregada: 0,
        precioUnitario: 35000,
        subtotal: 140000,
      },
    ],
    totalPedido: 836000,
    observaciones: 'En bodega en preparación. Finalizando alistamiento.',
    remisionId: 'REM004',
    requiereEntregasParciales: false,
    esRecurrente: true,
    frecuenciaRecurrencia: 10,
  },
  {
    id: '5',
    numero: 'PED-2026-0005',
    clienteId: 'CLI005',
    clienteNombre: 'Finca Las Guacamayas',
    fincaId: 'FIN005-1',
    fincaNombre: 'Finca Las Guacamayas',
    direccionEntrega: 'Vía vieja a Cartago, Cartago',
    mayordoloId: 'MAY006',
    mayordomoNombre: 'Guillermo Torres',
    telefonoEntrega: '+57 321 9990000',
    fecha: '2026-05-31',
    fechaEntregaEstimada: '2026-06-05',
    estado: 'pendiente_stock',
    lineas: [
      {
        id: 'LIN009',
        productoId: 'PROD001',
        productoNombre: 'Concentrado Ganadero Premium 16%',
        cantidadSolicitada: 8,
        cantidadConfirmada: 8,
        cantidadEntregada: 0,
        precioUnitario: 85000,
        subtotal: 680000,
      },
      {
        id: 'LIN010',
        productoId: 'PROD008',
        productoNombre: 'Antibiótico Oxitetraciclina',
        cantidadSolicitada: 1,
        cantidadConfirmada: 0,
        cantidadEntregada: 0,
        precioUnitario: 95000,
        subtotal: 0,
      },
    ],
    totalPedido: 680000,
    observaciones: 'Pendiente por falta de stock del producto PROD008 (Antibiótico agotado)',
    requiereEntregasParciales: true,
    esRecurrente: true,
    frecuenciaRecurrencia: 14,
  },
  {
    id: '6',
    numero: 'PED-2026-0006',
    clienteId: 'CLI007',
    clienteNombre: 'Asociación Ganaderos Quindío',
    fincaId: 'FIN007-1',
    fincaNombre: 'Centro de Distribución Asogaqu',
    direccionEntrega: 'Cra 13 No 14-50, Montenegro',
    mayordoloId: 'MAY008',
    mayordomoNombre: 'Óscar Gutierrez',
    telefonoEntrega: '+57 320 7778888',
    fecha: '2026-06-01',
    fechaEntregaEstimada: '2026-06-05',
    estado: 'validando_inventario',
    lineas: [
      {
        id: 'LIN011',
        productoId: 'PROD001',
        productoNombre: 'Concentrado Ganadero Premium 16%',
        cantidadSolicitada: 20,
        cantidadConfirmada: 20,
        cantidadEntregada: 0,
        precioUnitario: 85000,
        subtotal: 1700000,
      },
      {
        id: 'LIN012',
        productoId: 'PROD003',
        productoNombre: 'Mineral Bovino Completo',
        cantidadSolicitada: 5,
        cantidadConfirmada: 5,
        cantidadEntregada: 0,
        precioUnitario: 45000,
        subtotal: 225000,
      },
      {
        id: 'LIN013',
        productoId: 'PROD010',
        productoNombre: 'Semilla Pasto Mejorado',
        cantidadSolicitada: 10,
        cantidadConfirmada: 10,
        cantidadEntregada: 0,
        precioUnitario: 28000,
        subtotal: 280000,
      },
    ],
    totalPedido: 2205000,
    observaciones: 'En validación de inventario en bodega central',
    requiereEntregasParciales: false,
    esRecurrente: true,
    frecuenciaRecurrencia: 8,
  },
  {
    id: '7',
    numero: 'PED-2026-0007',
    clienteId: 'CLI008',
    clienteNombre: 'La Tana Ganadera',
    fincaId: 'FIN008-1',
    fincaNombre: 'Hacienda La Tana',
    direccionEntrega: 'Finca La Tana, Santa Rosa de Cabal',
    mayordoloId: 'MAY009',
    mayordomoNombre: 'Fernando Acosta',
    telefonoEntrega: '+57 313 0001111',
    fecha: '2026-06-01',
    fechaEntregaEstimada: '2026-06-03',
    estado: 'listo_alistamiento',
    lineas: [
      {
        id: 'LIN014',
        productoId: 'PROD001',
        productoNombre: 'Concentrado Ganadero Premium 16%',
        cantidadSolicitada: 6,
        cantidadConfirmada: 6,
        cantidadEntregada: 0,
        precioUnitario: 85000,
        subtotal: 510000,
      },
      {
        id: 'LIN015',
        productoId: 'PROD007',
        productoNombre: 'Vitaminas Inyectable A+D+E',
        cantidadSolicitada: 2,
        cantidadConfirmada: 2,
        cantidadEntregada: 0,
        precioUnitario: 125000,
        subtotal: 250000,
      },
    ],
    totalPedido: 760000,
    observaciones: 'Alistamiento completado. Listo para asignar vehículo',
    remisionId: 'REM005',
    requiereEntregasParciales: false,
    esRecurrente: true,
    frecuenciaRecurrencia: 6,
  },
  {
    id: '8',
    numero: 'PED-2026-0008',
    clienteId: 'CLI009',
    clienteNombre: 'Agropecuaria La Montaña',
    fincaId: 'FIN009-1',
    fincaNombre: 'Lote Ganadero Principal',
    direccionEntrega: 'Vereda Cerritos, Salento',
    mayordoloId: 'MAY010',
    mayordomoNombre: 'Winston Sáenz',
    telefonoEntrega: '+57 314 4445555',
    fecha: '2026-06-01',
    fechaEntregaEstimada: '2026-06-04',
    estado: 'recibido',
    lineas: [
      {
        id: 'LIN016',
        productoId: 'PROD001',
        productoNombre: 'Concentrado Ganadero Premium 16%',
        cantidadSolicitada: 12,
        cantidadConfirmada: 12,
        cantidadEntregada: 0,
        precioUnitario: 85000,
        subtotal: 1020000,
      },
      {
        id: 'LIN017',
        productoId: 'PROD011',
        productoNombre: 'Fertilizante NPK 15-15-15',
        cantidadSolicitada: 5,
        cantidadConfirmada: 5,
        cantidadEntregada: 0,
        precioUnitario: 38000,
        subtotal: 190000,
      },
    ],
    totalPedido: 1210000,
    observaciones: 'Pedido recibido. Pendiente validación de inventario',
    requiereEntregasParciales: false,
    esRecurrente: true,
    frecuenciaRecurrencia: 12,
  },
];
