export interface Conductor {
  id: string;
  nombre: string;
  cedula: string;
  telefono: string;
  email: string;
  licencia: string;
  fechaVencimientoLicencia: string;
  estado: 'activo' | 'inactivo' | 'suspendido';
  vehiculoAsignado?: string;
  rutas?: string[];
  experiencia: number; // años
  evaluacionSeguridad: number; // 1-5
}

export const conductores = [
  {
    id: 'CON001',
    nombre: 'Andrés Santiago García',
    cedula: '19.234.567',
    telefono: '+57 312 5551234',
    email: 'andres.garcia@agropro.com',
    licencia: 'A2-12345678',
    fechaVencimientoLicencia: '2027-03-15',
    estado: 'activo',
    vehiculoAsignado: 'VEH001',
    experiencia: 12,
    evaluacionSeguridad: 5,
    rutas: ['RUT001'],
  },
  {
    id: 'CON002',
    nombre: 'Carlos Eduardo Morales',
    cedula: '19.456.789',
    telefono: '+57 310 6667788',
    email: 'carlos.morales@agropro.com',
    licencia: 'A2-87654321',
    fechaVencimientoLicencia: '2026-11-20',
    estado: 'activo',
    vehiculoAsignado: 'VEH002',
    experiencia: 8,
    evaluacionSeguridad: 4,
    rutas: ['RUT002'],
  },
  {
    id: 'CON003',
    nombre: 'Francisco Javier López',
    cedula: '19.678.901',
    telefono: '+57 314 1112222',
    email: 'francisco.lopez@agropro.com',
    licencia: 'A2-11223344',
    fechaVencimientoLicencia: '2027-06-10',
    estado: 'activo',
    vehiculoAsignado: 'VEH003',
    experiencia: 15,
    evaluacionSeguridad: 5,
    rutas: [],
  },
  {
    id: 'CON004',
    nombre: 'Gilberto Romero Sánchez',
    cedula: '18.901.234',
    telefono: '+57 315 3334444',
    email: 'gilberto.romero@agropro.com',
    licencia: 'A3-55667788',
    fechaVencimientoLicencia: '2026-09-30',
    estado: 'activo',
    vehiculoAsignado: 'VEH004',
    experiencia: 20,
    evaluacionSeguridad: 5,
    rutas: [],
  },
  {
    id: 'CON005',
    nombre: 'Héctor Alberto Gómez',
    cedula: '19.345.678',
    telefono: '+57 311 5556666',
    email: 'hector.gomez@agropro.com',
    licencia: 'A2-99887766',
    fechaVencimientoLicencia: '2027-01-05',
    estado: 'activo',
    vehiculoAsignado: 'VEH005',
    experiencia: 10,
    evaluacionSeguridad: 4,
    rutas: [],
  },
];
