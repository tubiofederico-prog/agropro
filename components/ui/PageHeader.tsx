import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  breadcrumb?: Array<{ label: string; href?: string }>;
}

export default function PageHeader({
  title,
  subtitle,
  action,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      {breadcrumb && (
        <div className="text-sm text-gray-600 mb-4">
          {breadcrumb.map((item, idx) => (
            <span key={idx}>
              {idx > 0 && <span className="mx-2">/</span>}
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  );
}
