import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Ship } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { mockVoyages } from '../../data/voyages';

const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

const VoyageSchedulePage: React.FC = () => {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(2);

  const prevMonth = () => {
    if (month === 1) { setYear(y => y - 1); setMonth(12); } else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 12) { setYear(y => y + 1); setMonth(1); } else setMonth(m => m + 1);
  };

  const monthStr = `${year}-${String(month).padStart(2, '0')}`;
  const monthVoyages = mockVoyages.filter(v =>
    v.departureDate.startsWith(monthStr) || v.estimatedArrival.startsWith(monthStr)
  );

  return (
    <div>
      <PageHeader title="운항 일정" subtitle="월별 운항 일정 조회" />

      <div className="flex items-center justify-center gap-4 mb-6">
        <button onClick={prevMonth} className="p-2 rounded-lg text-navy-300 hover:text-foreground hover:bg-navy-700/20">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-bold text-foreground">{year}년 {months[month - 1]}</h2>
        <button onClick={nextMonth} className="p-2 rounded-lg text-navy-300 hover:text-foreground hover:bg-navy-700/20">
          <ChevronRight size={20} />
        </button>
      </div>

      {monthVoyages.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-navy-400">해당 월에 운항 일정이 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {monthVoyages.map(voyage => (
            <Link key={voyage.id} to={`/voyages/${voyage.id}`} className="card block hover:border-maritime-blue transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-maritime-blue/20 p-3 rounded-lg">
                    <Ship className="text-maritime-blue" size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">{voyage.voyageNumber}</span>
                      <StatusBadge status={voyage.status} />
                    </div>
                    <p className="text-sm text-navy-300">{voyage.shipName} | {voyage.cargoType}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-foreground">{voyage.departurePort.name} → {voyage.arrivalPort.name}</p>
                  <p className="text-xs text-navy-400">{voyage.departureDate} ~ {voyage.estimatedArrival}</p>
                </div>
              </div>
              {voyage.progress > 0 && voyage.progress < 100 && (
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 h-2 bg-navy-700 rounded-full">
                    <div className="h-full bg-maritime-blue rounded-full" style={{ width: `${voyage.progress}%` }} />
                  </div>
                  <span className="text-xs text-navy-300">{voyage.progress}%</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VoyageSchedulePage;
