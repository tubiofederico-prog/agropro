import React from 'react';
import Card from './Card';
import Badge from './Badge';

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  badgeVariant?: 'success' | 'warning' | 'danger' | 'info' | 'default';
  badgeLabel?: string;
}

export default function KPICard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  badgeVariant,
  badgeLabel,
}: KPICardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-3xl text-blue-600">{icon}</div>}
      </div>
      <div className="flex items-center justify-between">
        {badgeLabel && <Badge variant={badgeVariant}>{badgeLabel}</Badge>}
        {trendValue && (
          <span
            className={`text-xs font-medium ${
              trend === 'up'
                ? 'text-green-600'
                : trend === 'down'
                  ? 'text-red-600'
                  : 'text-gray-600'
            }`}
          >
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </span>
        )}
      </div>
    </Card>
  );
}
