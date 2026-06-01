export interface Vehiculo {
  id: string;
  placa: string;
  tipo: string;
  capacidadToneladas: number;
  capacidadVolumen: number;
  conductor?: string;
  estado: 'disponible' | 'en_carga' | 'en_ruta' | 'en_espera' | 'mantenimiento';
  ubicacionActual?: string;
  ultimoMantenimiento: string;
  proximoMantenimiento: string;
  kilometraje: number;
  observaciones?: string;
}

export const flota: Vehiculo[] = [
  {
    id: 'VEH001',
    placa: 'PSB-887',
    tipo: 'Camión',
    capacidadToneladas: 5,
    capacidadVolumen: 12,
    conductor: 'CON001',
    estado: 'en_ruta',
    ubicacionActual: 'Pereira - En camino a Las Mesas',
    ultimoMantenimiento: '2026-05-15',
    proximoMantenimiento: '2026-06-15',
    kilometraje: 45230,
    observaciones: 'En ruta entrega pedido PED-2026-0001',
  },
  {
    id: 'VEH002',
    placa: 'MNP-445',
    tipo: 'Camión',
    capacidadToneladas: 5,
    capacidadVolumen: 12,
    conductor: 'CON002',
    estado: 'en_ruta',
    ubicacionActual: 'Manizales - En camino a Hacienda Santa Rosa',
    ultimoMantenimiento: '2026-05-10',
    proximoMantenimiento: '2026-06-10',
    kilometraje: 38950,
    observaciones: 'En ruta entrega pedido PED-2026-0002',
  },
  {
    id: 'VEH003',
    placa: 'XKT-334',
    tipo: 'Furgoneta',
    capacidadToneladas: 2.5,
    capacidadVolumen: 8,
    conductor: 'CON003',
    estado: 'disponible',
    ubicacionActual: 'Bodega Central - Pereira',
    ultimoMantenimiento: '2026-04-25',
    proximoMantenimiento: '2026-06-25',
    kilometraje: 32145,
    observaciones: 'Disponible para asignar',
  },
  {
    id: 'VEH004',
    placa: 'RQW-778',
    tipo: 'Camión Volqueta',
    capacidadToneladas: 8,
    capacidadVolumen: 16,
    conductor: 'CON004',
    estado: 'en_carga',
    ubicacionActual: 'Bodega Central - Pereira',
    ultimoMantenimiento: '2026-05-20',
    proximoMantenimiento: '2026-06-20',
    kilometraje: 67890,
    observaciones: 'En proceso de carga para ruta múltiple',
  },
  {
    id: 'VEH005',
    placa: 'HKM-102',
    tipo: 'Furgoneta',
    capacidadToneladas: 2.5,
    capacidadVolumen: 8,
    conductor: 'CON005',
    estado: 'mantenimiento',
    ubicacionActual: 'Taller Mecánico - Pereira',
    ultimoMantenimiento: '2026-05-01',
    proximoMantenimiento: '2026-06-01',
    kilometraje: 52670,
    observaciones: 'En mantenimiento preventivo. Estimado 2 días',
  },
  {
    id: 'VEH006',
    placa: 'DVJ-591',
    tipo: 'Camión',
    capacidadToneladas: 5,
    capacidadVolumen: 12,
    conductor: undefined,
    estado: 'disponible',
    ubicacionActual: 'Bodega Central - Pereira',
    ultimoMantenimiento: '2026-05-18',
    proximoMantenimiento: '2026-06-18',
    kilometraje: 41230,
    observaciones: 'Sin conductor asignado actualmente',
  },
  {
    id: 'VEH007',
    placa: 'TYK-876',
    tipo: 'Furgoneta',
    capacidadToneladas: 2.5,
    capacidadVolumen: 8,
    conductor: 'CON001',
    estado: 'disponible',
    ubicacionActual: 'Bodega Central - Pereira',
    ultimoMantenimiento: '2026-05-12',
    proximoMantenimiento: '2026-06-12',
    kilometraje: 28950,
    observaciones: 'Recientemente disponible. Conductor de retorno',
  },
];
