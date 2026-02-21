import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { fleetStatusData } from '../../data/dashboard';

const FleetStatusChart: React.FC = () => {
  return (
    <div className="card">
      <h3 className="card-header">선박 현황</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={fleetStatusData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              dataKey="count"
              nameKey="status"
              stroke="none"
            >
              {fleetStatusData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: 'rgb(var(--navy-800))', border: '1px solid rgb(var(--navy-700))', borderRadius: '8px', color: 'rgb(var(--foreground))' }}
              formatter={(value: any, name: any) => [`${value}척`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-4 mt-2">
        {fleetStatusData.map(item => (
          <div key={item.status} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-navy-300">{item.status} ({item.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetStatusChart;
