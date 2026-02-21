import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { maintenanceByType } from '../../data/dashboard';

const MaintenanceTrendChart: React.FC = () => {
  return (
    <div className="card">
      <h3 className="card-header">정비 현황</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={maintenanceByType}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--navy-700))" />
            <XAxis dataKey="month" tick={{ fill: 'rgb(var(--navy-300))', fontSize: 12 }} />
            <YAxis tick={{ fill: 'rgb(var(--navy-300))', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgb(var(--navy-800))', border: '1px solid rgb(var(--navy-700))', borderRadius: '8px', color: 'rgb(var(--foreground))' }}
            />
            <Legend wrapperStyle={{ color: 'rgb(var(--navy-300))', fontSize: 12 }} />
            <Bar dataKey="정기점검" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
            <Bar dataKey="긴급수리" stackId="a" fill="#ef4444" />
            <Bar dataKey="부품교체" stackId="a" fill="#eab308" />
            <Bar dataKey="검사" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MaintenanceTrendChart;
