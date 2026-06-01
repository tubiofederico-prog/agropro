import React from 'react';
import StatusBadge from './StatusBadge';

interface TimelineEvent {
  status: string;
  description: string;
  timestamp: string;
  responsable?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-6">
      {events.map((event, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${idx === 0 ? 'bg-blue-600' : 'bg-gray-300'}`} />
            {idx < events.length - 1 && <div className="w-0.5 h-12 bg-gray-300 mt-2" />}
          </div>
          <div className="pb-6">
            <div className="flex items-center gap-2 mb-1">
              <StatusBadge status={event.status} />
              <span className="text-xs text-gray-500">{event.timestamp}</span>
            </div>
            <p className="text-sm text-gray-900 font-medium">{event.description}</p>
            {event.responsable && <p className="text-xs text-gray-500 mt-1">Por: {event.responsable}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
