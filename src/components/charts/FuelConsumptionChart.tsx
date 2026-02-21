import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { fuelConsumptionData } from '../../data/dashboard';

const FuelConsumptionChart: React.FC = () => {
  return (
    <div className="card">
      <h3 className="card-header">연료 소비 추이 (MT)</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={fuelConsumptionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--navy-700))" />
            <XAxis dataKey="month" tick={{ fill: 'rgb(var(--navy-300))', fontSize: 12 }} />
            <YAxis tick={{ fill: 'rgb(var(--navy-300))', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgb(var(--navy-800))', border: '1px solid rgb(var(--navy-700))', borderRadius: '8px', color: 'rgb(var(--foreground))' }}
              formatter={(value: any, name: any) => [`${value.toLocaleString()} MT`, name]}
            />
            <Legend wrapperStyle={{ color: 'rgb(var(--navy-300))', fontSize: 12 }} />
            <Line type="monotone" dataKey="실제" stroke="#0077b6" strokeWidth={2} dot={{ fill: '#0077b6', r: 3 }} />
            <Line type="monotone" dataKey="목표" stroke="#6b7280" strokeWidth={2} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FuelConsumptionChart;
