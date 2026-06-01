import React from 'react';
import Card from './Card';

interface Location {
  id: string;
  nombre: string;
  lat: number;
  lng: number;
  tipo?: 'cliente' | 'bodega' | 'ruta';
}

interface MapMockProps {
  locations: Location[];
  title?: string;
  height?: string;
}

export default function MapMock({
  locations,
  title = 'Mapa de Operaciones',
  height = 'h-96',
}: MapMockProps) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className={`${height} bg-gradient-to-br from-blue-50 to-green-50 relative`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm font-medium text-gray-900">
          {title}
        </div>
        <div className="absolute top-16 left-4 space-y-2">
          <div className="text-xs text-gray-600 bg-white px-3 py-1.5 rounded shadow">
            Total puntos: {locations.length}
          </div>
        </div>
        {locations.map((location, idx) => {
          const xPos = Math.sin(idx) * 20 + 50;
          const yPos = Math.cos(idx) * 20 + 50;
          const typeColor = {
            cliente: 'bg-blue-600',
            bodega: 'bg-purple-600',
            ruta: 'bg-green-600',
          };

          return (
            <div
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${xPos}%`,
                top: `${yPos}%`,
              }}
            >
              <div
                className={`w-8 h-8 rounded-full ${typeColor[location.tipo || 'cliente']} text-white flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white cursor-pointer hover:w-10 hover:h-10 transition-all`}
                title={location.nombre}
              >
                {idx + 1}
              </div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                {location.nombre}
              </div>
            </div>
          );
        })}
        <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-600 space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600" /> Cliente
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-600" /> Bodega
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-600" /> En Ruta
          </div>
        </div>
      </div>
    </Card>
  );
}
