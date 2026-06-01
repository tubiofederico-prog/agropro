export interface Parada {
  id: string;
  pedidoId: string;
  clienteNombre: string;
  fincaNombre: string;
  direccion: string;
  coordenadas: { lat: number; lng: number };
  orden: number;
  estado: 'pendiente' | 'visitada' | 'entregada';
}

export interface Ruta {
  id: string;
  numero: string;
  fecha: string;
  vehiculoId: string;
  conductorId: string;
  zona: string;
  estado: 'planificada' | 'en_ruta' | 'completada';
  paradas: Parada[];
  totalParadas: number;
  totalKm: number;
  tiempoEstimado: number; // minutos
  horaInicio?: string;
  horaFin?: string;
  cargaTotal: number; // toneladas
  capacidadVehiculo: number; // toneladas
}

export const rutas: Ruta[] = [
  {
    id: 'RUT001',
    numero: 'RUT-2026-001',
    fecha: '2026-06-02',
    vehiculoId: 'VEH001',
    conductorId: 'CON001',
    zona: 'Pereira',
    estado: 'en_ruta',
    totalParadas: 1,
    totalKm: 8,
    tiempoEstimado: 45,
    horaInicio: '09:30',
    paradas: [
      {
        id: 'PAR001',
        pedidoId: '1',
        clienteNombre: 'Ganadería Los Andes',
        fincaNombre: 'Finca Las Mesas',
        direccion: 'Km 2 vía a Pereira',
        coordenadas: { lat: 4.8133, lng: -75.696 },
        orden: 1,
        estado: 'visitada',
      },
    ],
    cargaTotal: 0.99,
    capacidadVehiculo: 5,
  },
  {
    id: 'RUT002',
    numero: 'RUT-2026-002',
    fecha: '2026-06-02',
    vehiculoId: 'VEH002',
    conductorId: 'CON002',
    zona: 'Caldas',
    estado: 'en_ruta',
    totalParadas: 2,
    totalKm: 45,
    tiempoEstimado: 120,
    horaInicio: '08:00',
    paradas: [
      {
        id: 'PAR002',
        pedidoId: '2',
        clienteNombre: 'Hacienda Santa Rosa',
        fincaNombre: 'Hacienda Santa Rosa Principal',
        direccion: 'Sector Manizales',
        coordenadas: { lat: 5.0667, lng: -75.5 },
        orden: 1,
        estado: 'visitada',
      },
      {
        id: 'PAR003',
        pedidoId: '4',
        clienteNombre: 'Cría Integral de Porcinos',
        fincaNombre: 'Granja Porcícola La Esperanza',
        direccion: 'Finca La Esperanza',
        coordenadas: { lat: 5.25, lng: -75.45 },
        orden: 2,
        estado: 'pendiente',
      },
    ],
    cargaTotal: 1.92,
    capacidadVehiculo: 5,
  },
  {
    id: 'RUT003',
    numero: 'RUT-2026-003',
    fecha: '2026-06-03',
    vehiculoId: 'VEH003',
    conductorId: 'CON003',
    zona: 'Quindío',
    estado: 'planificada',
    totalParadas: 3,
    totalKm: 65,
    tiempoEstimado: 180,
    paradas: [
      {
        id: 'PAR004',
        pedidoId: '3',
        clienteNombre: 'Producción Avícola del Eje',
        fincaNombre: 'Granja Avícola Principal',
        direccion: 'Carrera 5 No 8-40',
        coordenadas: { lat: 4.533, lng: -75.731 },
        orden: 1,
        estado: 'pendiente',
      },
      {
        id: 'PAR005',
        pedidoId: '7',
        clienteNombre: 'La Tana Ganadera',
        fincaNombre: 'Hacienda La Tana',
        direccion: 'Finca La Tana',
        coordenadas: { lat: 4.84, lng: -75.62 },
        orden: 2,
        estado: 'pendiente',
      },
      {
        id: 'PAR006',
        pedidoId: '6',
        clienteNombre: 'Asociación Ganaderos Quindío',
        fincaNombre: 'Centro de Distribución Asogaqu',
        direccion: 'Cra 13 No 14-50',
        coordenadas: { lat: 4.68, lng: -75.72 },
        orden: 3,
        estado: 'pendiente',
      },
    ],
    cargaTotal: 4.76,
    capacidadVehiculo: 5,
  },
];
