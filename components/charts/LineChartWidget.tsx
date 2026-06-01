'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

interface LineChartData {
  name: string;
  [key: string]: string | number;
}

interface LineChartWidgetProps {
  title: string;
  data: LineChartData[];
  dataKey: string;
  color?: string;
}

export default function LineChartWidget({
  title,
  data,
  dataKey,
  color = '#1d4ed8',
}: LineChartWidgetProps) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
