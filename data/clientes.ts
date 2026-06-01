export interface Mayordomo {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
}

export interface Finca {
  id: string;
  nombre: string;
  direccion: string;
  municipio: string;
  departamento: string;
  coordenadas: { lat: number; lng: number };
  mayordomo: Mayordomo;
  frecuenciaCompra: number; // días
  areaHectareas: number;
  actividad: string;
}

export interface Cliente {
  id: string;
  nombre: string;
  razonSocial: string;
  nit: string;
  contacto: string;
  telefono: string;
  email: string;
  fincas: Finca[];
  estado: 'activo' | 'inactivo' | 'suspendido';
  carteraPendiente: number;
  diasCreditoPromedio: number;
  ultimoCompra: string; // fecha ISO
  frecuenciaPromedioCompra: number; // días
}

export const clientes: Cliente[] = [
  {
    id: 'CLI001',
    nombre: 'Ganadería Los Andes',
    razonSocial: 'Ganadería Los Andes S.A.S',
    nit: '900.123.456-1',
    contacto: 'Juan Carlos López',
    telefono: '+57 312 5551234',
    email: 'juan@losandes.com',
    estado: 'activo',
    carteraPendiente: 2850000,
    diasCreditoPromedio: 30,
    ultimoCompra: '2026-05-28',
    frecuenciaPromedioCompra: 7,
    fincas: [
      {
        id: 'FIN001-1',
        nombre: 'Finca Las Mesas',
        direccion: 'Km 2 vía a Pereira',
        municipio: 'Pereira',
        departamento: 'Risaralda',
        coordenadas: { lat: 4.8133, lng: -75.696 },
        mayordomo: {
          id: 'MAY001',
          nombre: 'Rogelio Martínez',
          telefono: '+57 321 4445566',
          email: 'rogelio@losandes.com',
        },
        frecuenciaCompra: 7,
        areaHectareas: 85,
        actividad: 'Ganadería de leche',
      },
    ],
  },
  {
    id: 'CLI002',
    nombre: 'Hacienda Santa Rosa',
    razonSocial: 'Hacienda Santa Rosa E.U.',
    nit: '800.456.789-2',
    contacto: 'María Isabel Rodríguez',
    telefono: '+57 310 6667788',
    email: 'maria@santarosa.com',
    estado: 'activo',
    carteraPendiente: 1950000,
    diasCreditoPromedio: 15,
    ultimoCompra: '2026-05-30',
    frecuenciaPromedioCompra: 5,
    fincas: [
      {
        id: 'FIN002-1',
        nombre: 'Hacienda Santa Rosa Principal',
        direccion: 'Sector Manizales',
        municipio: 'Manizales',
        departamento: 'Caldas',
        coordenadas: { lat: 5.0667, lng: -75.5 },
        mayordomo: {
          id: 'MAY002',
          nombre: 'Andrés Felipe Gómez',
          telefono: '+57 320 8889999',
          email: 'andres@santarosa.com',
        },
        frecuenciaCompra: 5,
        areaHectareas: 120,
        actividad: 'Ganadería de carne',
      },
      {
        id: 'FIN002-2',
        nombre: 'Lote anexo Potrerillos',
        direccion: 'Sector Potrerillos',
        municipio: 'Manizales',
        departamento: 'Caldas',
        coordenadas: { lat: 5.08, lng: -75.52 },
        mayordomo: {
          id: 'MAY003',
          nombre: 'Carlos Alberto Díaz',
          telefono: '+57 314 3334455',
          email: 'carlos@santarosa.com',
        },
        frecuenciaCompra: 7,
        areaHectareas: 45,
        actividad: 'Ganadería mixta',
      },
    ],
  },
  {
    id: 'CLI003',
    nombre: 'Producción Avícola del Eje',
    razonSocial: 'Producción Avícola del Eje S.A.S',
    nit: '900.654.321-9',
    contacto: 'Luis Fernando Soto',
    telefono: '+57 311 1112222',
    email: 'luis@avicultor.com',
    estado: 'activo',
    carteraPendiente: 0,
    diasCreditoPromedio: 0,
    ultimoCompra: '2026-05-29',
    frecuenciaPromedioCompra: 3,
    fincas: [
      {
        id: 'FIN003-1',
        nombre: 'Granja Avícola Principal',
        direccion: 'Carrera 5 No 8-40',
        municipio: 'Armenia',
        departamento: 'Quindío',
        coordenadas: { lat: 4.533, lng: -75.731 },
        mayordomo: {
          id: 'MAY004',
          nombre: 'Sergio Guzmán',
          telefono: '+57 315 2223333',
          email: 'sergio@avicultor.com',
        },
        frecuenciaCompra: 3,
        areaHectareas: 8,
        actividad: 'Producción de huevos',
      },
    ],
  },
  {
    id: 'CLI004',
    nombre: 'Cría Integral de Porcinos',
    razonSocial: 'Cría Integral de Porcinos S.A.S',
    nit: '901.234.567-8',
    contacto: 'Javier Restrepo',
    telefono: '+57 312 4445555',
    email: 'javier@porcicultor.com',
    estado: 'activo',
    carteraPendiente: 1250000,
    diasCreditoPromedio: 45,
    ultimoCompra: '2026-05-25',
    frecuenciaPromedioCompra: 10,
    fincas: [
      {
        id: 'FIN004-1',
        nombre: 'Granja Porcícola La Esperanza',
        direccion: 'Finca La Esperanza',
        municipio: 'Palestina',
        departamento: 'Caldas',
        coordenadas: { lat: 5.25, lng: -75.45 },
        mayordomo: {
          id: 'MAY005',
          nombre: 'Roberto Vergara',
          telefono: '+57 318 5556666',
          email: 'roberto@porcicultor.com',
        },
        frecuenciaCompra: 10,
        areaHectareas: 32,
        actividad: 'Cría de porcinos',
      },
    ],
  },
  {
    id: 'CLI005',
    nombre: 'Finca Las Guacamayas',
    razonSocial: 'Finca Las Guacamayas',
    nit: '19.234.567-2',
    contacto: 'Pedro Alonso Jiménez',
    telefono: '+57 313 7778888',
    email: 'pedro@guacamayas.com',
    estado: 'activo',
    carteraPendiente: 750000,
    diasCreditoPromedio: 30,
    ultimoCompra: '2026-05-20',
    frecuenciaPromedioCompra: 14,
    fincas: [
      {
        id: 'FIN005-1',
        nombre: 'Finca Las Guacamayas',
        direccion: 'Vía vieja a Cartago',
        municipio: 'Cartago',
        departamento: 'Valle del Cauca',
        coordenadas: { lat: 4.77, lng: -75.74 },
        mayordomo: {
          id: 'MAY006',
          nombre: 'Guillermo Torres',
          telefono: '+57 321 9990000',
          email: 'guillermo@guacamayas.com',
        },
        frecuenciaCompra: 14,
        areaHectareas: 70,
        actividad: 'Ganadería de leche',
      },
    ],
  },
  {
    id: 'CLI006',
    nombre: 'Ganadería Buenavista',
    razonSocial: 'Ganadería Buenavista S.A.S',
    nit: '900.987.654-1',
    contacto: 'Catalina Moreno',
    telefono: '+57 314 1112222',
    email: 'catalina@buenavista.com',
    estado: 'inactivo',
    carteraPendiente: 0,
    diasCreditoPromedio: 0,
    ultimoCompra: '2026-04-10',
    frecuenciaPromedioCompra: 7,
    fincas: [
      {
        id: 'FIN006-1',
        nombre: 'Buenavista',
        direccion: 'Sector el Jazmín',
        municipio: 'Filandia',
        departamento: 'Quindío',
        coordenadas: { lat: 4.63, lng: -75.82 },
        mayordomo: {
          id: 'MAY007',
          nombre: 'Hipólito Sánchez',
          telefono: '+57 321 3334444',
          email: 'hipolito@buenavista.com',
        },
        frecuenciaCompra: 7,
        areaHectareas: 55,
        actividad: 'Ganadería de leche',
      },
    ],
  },
  {
    id: 'CLI007',
    nombre: 'Asociación Ganaderos Quindío',
    razonSocial: 'Asociación Ganaderos del Quindío',
    nit: '890.000.001-5',
    contacto: 'Enrique Vallejo',
    telefono: '+57 315 5556666',
    email: 'enrique@asogaqu.com',
    estado: 'activo',
    carteraPendiente: 3500000,
    diasCreditoPromedio: 60,
    ultimoCompra: '2026-05-27',
    frecuenciaPromedioCompra: 8,
    fincas: [
      {
        id: 'FIN007-1',
        nombre: 'Centro de Distribución Asogaqu',
        direccion: 'Cra 13 No 14-50',
        municipio: 'Montenegro',
        departamento: 'Quindío',
        coordenadas: { lat: 4.68, lng: -75.72 },
        mayordomo: {
          id: 'MAY008',
          nombre: 'Óscar Gutierrez',
          telefono: '+57 320 7778888',
          email: 'oscar@asogaqu.com',
        },
        frecuenciaCompra: 8,
        areaHectareas: 15,
        actividad: 'Centro de acopio',
      },
    ],
  },
  {
    id: 'CLI008',
    nombre: 'La Tana Ganadera',
    razonSocial: 'La Tana Ganadera S.A.S',
    nit: '900.111.222-3',
    contacto: 'Gerardo López',
    telefono: '+57 312 8889999',
    email: 'gerardo@latana.com',
    estado: 'activo',
    carteraPendiente: 580000,
    diasCreditoPromedio: 15,
    ultimoCompra: '2026-05-31',
    frecuenciaPromedioCompra: 6,
    fincas: [
      {
        id: 'FIN008-1',
        nombre: 'Hacienda La Tana',
        direccion: 'Finca La Tana',
        municipio: 'Santa Rosa de Cabal',
        departamento: 'Risaralda',
        coordenadas: { lat: 4.84, lng: -75.62 },
        mayordomo: {
          id: 'MAY009',
          nombre: 'Fernando Acosta',
          telefono: '+57 313 0001111',
          email: 'fernando@latana.com',
        },
        frecuenciaCompra: 6,
        areaHectareas: 95,
        actividad: 'Ganadería de leche',
      },
    ],
  },
  {
    id: 'CLI009',
    nombre: 'Agropecuaria La Montaña',
    razonSocial: 'Agropecuaria La Montaña S.A.S',
    nit: '901.555.666-7',
    contacto: 'Alejandra Ospina',
    telefono: '+57 310 2223333',
    email: 'alejandra@lamontana.com',
    estado: 'activo',
    carteraPendiente: 2100000,
    diasCreditoPromedio: 30,
    ultimoCompra: '2026-05-26',
    frecuenciaPromedioCompra: 12,
    fincas: [
      {
        id: 'FIN009-1',
        nombre: 'Lote Ganadero Principal',
        direccion: 'Vereda Cerritos',
        municipio: 'Salento',
        departamento: 'Quindío',
        coordenadas: { lat: 4.63, lng: -75.58 },
        mayordomo: {
          id: 'MAY010',
          nombre: 'Winston Sáenz',
          telefono: '+57 314 4445555',
          email: 'winston@lamontana.com',
        },
        frecuenciaCompra: 12,
        areaHectareas: 110,
        actividad: 'Ganadería mixta',
      },
    ],
  },
  {
    id: 'CLI010',
    nombre: 'Productos Agropecuarios ABC',
    razonSocial: 'Productos Agropecuarios ABC Ltda',
    nit: '800.333.444-5',
    contacto: 'Diana Reyes',
    telefono: '+57 311 6667777',
    email: 'diana@abcagro.com',
    estado: 'activo',
    carteraPendiente: 1680000,
    diasCreditoPromedio: 45,
    ultimoCompra: '2026-05-24',
    frecuenciaPromedioCompra: 9,
    fincas: [
      {
        id: 'FIN010-1',
        nombre: 'Bodega distribuidora ABC',
        direccion: 'Parque Industrial Zona Rosa',
        municipio: 'Pereira',
        departamento: 'Risaralda',
        coordenadas: { lat: 4.81, lng: -75.71 },
        mayordomo: {
          id: 'MAY011',
          nombre: 'Miguel Ángel Paredes',
          telefono: '+57 320 8889999',
          email: 'miguel@abcagro.com',
        },
        frecuenciaCompra: 9,
        areaHectareas: 5,
        actividad: 'Centro de distribución',
      },
    ],
  },
];
