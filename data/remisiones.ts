export interface Remision {
  id: string;
  numero: string;
  pedidoId: string;
  pedidoNumero: string;
  clienteNombre: string;
  direccionEntrega: string;
  fecha: string;
  estado: 'generada' | 'enviada' | 'firmada' | 'entregada' | 'pendiente_facturar' | 'facturada';
  responsableFirma?: string;
  cedulaResponsable?: string;
  fechaFirma?: string;
  evidenciaFoto?: string;
  total: number;
  observaciones?: string;
  facturaId?: string;
}

export const remisiones: Remision[] = [
  {
    id: 'REM001',
    numero: 'REM-2026-00001',
    pedidoId: '1',
    pedidoNumero: 'PED-2026-0001',
    clienteNombre: 'Ganadería Los Andes',
    direccionEntrega: 'Km 2 vía a Pereira, Pereira',
    fecha: '2026-06-02',
    estado: 'facturada',
    responsableFirma: 'Rogelio Martínez',
    cedulaResponsable: '19.234.567-2',
    fechaFirma: '2026-06-02',
    evidenciaFoto: 'ruta-real',
    total: 985000,
    observaciones: 'Entrega completada y firmada',
    facturaId: 'FAC001',
  },
  {
    id: 'REM002',
    numero: 'REM-2026-00002',
    pedidoId: '2',
    pedidoNumero: 'PED-2026-0002',
    clienteNombre: 'Hacienda Santa Rosa',
    direccionEntrega: 'Sector Manizales, Manizales',
    fecha: '2026-06-03',
    estado: 'entregada',
    responsableFirma: 'Andrés Felipe Gómez',
    cedulaResponsable: '18.234.567-1',
    fechaFirma: '2026-06-03',
    evidenciaFoto: 'ruta-real',
    total: 1085000,
    observaciones: 'Entrega completada sin observaciones',
    facturaId: undefined,
  },
  {
    id: 'REM003',
    numero: 'REM-2026-00003',
    pedidoId: '3',
    pedidoNumero: 'PED-2026-0003',
    clienteNombre: 'Producción Avícola del Eje',
    direccionEntrega: 'Carrera 5 No 8-40, Armenia',
    fecha: '2026-06-01',
    estado: 'generada',
    total: 760000,
    observaciones: 'Remisión generada. Pendiente envío con vehículo',
  },
  {
    id: 'REM004',
    numero: 'REM-2026-00004',
    pedidoId: '4',
    pedidoNumero: 'PED-2026-0004',
    clienteNombre: 'Cría Integral de Porcinos',
    direccionEntrega: 'Finca La Esperanza, Palestina',
    fecha: '2026-06-02',
    estado: 'enviada',
    total: 836000,
    observaciones: 'Enviada con vehículo VEH004. En tránsito',
  },
  {
    id: 'REM005',
    numero: 'REM-2026-00005',
    pedidoId: '7',
    pedidoNumero: 'PED-2026-0007',
    clienteNombre: 'La Tana Ganadera',
    direccionEntrega: 'Finca La Tana, Santa Rosa de Cabal',
    fecha: '2026-06-01',
    estado: 'generada',
    total: 760000,
    observaciones: 'Remisión lista para despacho',
  },
  {
    id: 'REM006',
    numero: 'REM-2026-00006',
    pedidoId: '5',
    pedidoNumero: 'PED-2026-0005',
    clienteNombre: 'Finca Las Guacamayas',
    direccionEntrega: 'Vía vieja a Cartago, Cartago',
    fecha: '2026-05-25',
    estado: 'pendiente_facturar',
    responsableFirma: 'Guillermo Torres',
    cedulaResponsable: '19.456.789-3',
    fechaFirma: '2026-05-26',
    evidenciaFoto: 'ruta-real',
    total: 680000,
    observaciones: 'Entregada. Pendiente de facturación',
  },
  {
    id: 'REM007',
    numero: 'REM-2026-00007',
    pedidoId: '6',
    pedidoNumero: 'PED-2026-0006',
    clienteNombre: 'Asociación Ganaderos Quindío',
    direccionEntrega: 'Cra 13 No 14-50, Montenegro',
    fecha: '2026-05-28',
    estado: 'facturada',
    responsableFirma: 'Óscar Gutierrez',
    cedulaResponsable: '19.567.890-4',
    fechaFirma: '2026-05-28',
    evidenciaFoto: 'ruta-real',
    total: 2205000,
    observaciones: 'Entrega completada y facturada',
    facturaId: 'FAC002',
  },
];
