'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

interface BarChartData {
  name: string;
  [key: string]: string | number;
}

interface BarChartWidgetProps {
  title: string;
  data: BarChartData[];
  dataKey: string;
  color?: string;
}

export default function BarChartWidget({
  title,
  data,
  dataKey,
  color = '#1d4ed8',
}: BarChartWidgetProps) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
