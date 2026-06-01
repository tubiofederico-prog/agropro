export interface Factura {
  id: string;
  numero: string;
  remisionId: string;
  remisionNumero: string;
  pedidoId: string;
  clienteNombre: string;
  nitCliente: string;
  fecha: string;
  fechaVencimiento: string;
  estado: 'pendiente' | 'emitida' | 'enviada' | 'vencida' | 'pagada';
  total: number;
  saldo: number;
  observaciones?: string;
}

export const facturas: Factura[] = [
  {
    id: 'FAC001',
    numero: 'FAC-2026-000001',
    remisionId: 'REM001',
    remisionNumero: 'REM-2026-00001',
    pedidoId: '1',
    clienteNombre: 'Ganadería Los Andes',
    nitCliente: '900.123.456-1',
    fecha: '2026-06-02',
    fechaVencimiento: '2026-07-02',
    estado: 'pagada',
    total: 985000,
    saldo: 0,
    observaciones: 'Factura pagada el 2026-06-10',
  },
  {
    id: 'FAC002',
    numero: 'FAC-2026-000002',
    remisionId: 'REM007',
    remisionNumero: 'REM-2026-00007',
    pedidoId: '6',
    clienteNombre: 'Asociación Ganaderos Quindío',
    nitCliente: '890.000.001-5',
    fecha: '2026-05-28',
    fechaVencimiento: '2026-07-27',
    estado: 'emitida',
    total: 2205000,
    saldo: 2205000,
    observaciones: 'Factura emitida. Plazo 60 días',
  },
  {
    id: 'FAC003',
    numero: 'FAC-2026-000003',
    remisionId: 'REM002',
    remisionNumero: 'REM-2026-00002',
    pedidoId: '2',
    clienteNombre: 'Hacienda Santa Rosa',
    nitCliente: '800.456.789-2',
    fecha: '2026-06-03',
    fechaVencimiento: '2026-06-18',
    estado: 'vencida',
    total: 1085000,
    saldo: 1085000,
    observaciones: 'Factura vencida. Requiere seguimiento de cobro',
  },
  {
    id: 'FAC004',
    numero: 'FAC-2026-000004',
    remisionId: 'REM006',
    remisionNumero: 'REM-2026-00006',
    pedidoId: '5',
    clienteNombre: 'Finca Las Guacamayas',
    nitCliente: '19.234.567-2',
    fecha: '2026-05-26',
    fechaVencimiento: '2026-06-25',
    estado: 'enviada',
    total: 680000,
    saldo: 680000,
    observaciones: 'Factura enviada por correo. En periodo de pago',
  },
  {
    id: 'FAC005',
    numero: 'FAC-2026-000005',
    remisionId: undefined as any,
    remisionNumero: 'Pendiente remisión',
    pedidoId: '8',
    clienteNombre: 'Agropecuaria La Montaña',
    nitCliente: '901.555.666-7',
    fecha: '2026-06-01',
    fechaVencimiento: '2026-07-01',
    estado: 'pendiente',
    total: 1210000,
    saldo: 1210000,
    observaciones: 'Pendiente generación de remisión',
  },
];
