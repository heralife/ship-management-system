import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { monthlyData } from '../../data/dashboard';

const VoyageTimelineChart: React.FC = () => {
  return (
    <div className="card">
      <h3 className="card-header">월별 운항 추이</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="voyageGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0077b6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0077b6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--navy-700))" />
            <XAxis dataKey="month" tick={{ fill: 'rgb(var(--navy-300))', fontSize: 12 }} />
            <YAxis tick={{ fill: 'rgb(var(--navy-300))', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgb(var(--navy-800))', border: '1px solid rgb(var(--navy-700))', borderRadius: '8px', color: 'rgb(var(--foreground))' }}
              formatter={(value: any) => [`${value}건`, '운항']}
            />
            <Area type="monotone" dataKey="voyages" stroke="#0077b6" fill="url(#voyageGradient)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VoyageTimelineChart;
