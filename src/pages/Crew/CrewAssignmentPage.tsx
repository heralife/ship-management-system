import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Ship } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { mockShips } from '../../data/ships';
import { mockCrew } from '../../data/crew';

const CrewAssignmentPage: React.FC = () => {
  const unassigned = mockCrew.filter(c => !c.shipId);

  return (
    <div>
      <PageHeader title="선원 배치관리" subtitle="선박별 선원 배치 현황" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {mockShips.map(ship => {
          const shipCrew = mockCrew.filter(c => c.shipId === ship.id);
          return (
            <div key={ship.id} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-maritime-blue/20 p-2 rounded-lg">
                    <Ship className="text-maritime-blue" size={20} />
                  </div>
                  <div>
                    <Link to={`/ships/${ship.id}`} className="font-medium text-foreground hover:text-maritime-light">{ship.name}</Link>
                    <p className="text-xs text-navy-400">{ship.type} | <StatusBadge status={ship.status} /></p>
                  </div>
                </div>
                <span className="text-sm text-navy-300">{shipCrew.length}명</span>
              </div>
              {shipCrew.length === 0 ? (
                <p className="text-sm text-navy-500">배치된 선원 없음</p>
              ) : (
                <div className="space-y-2">
                  {shipCrew.map(c => (
                    <Link key={c.id} to={`/crew/${c.id}`} className="flex items-center justify-between p-2 bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center">
                          <span className="text-xs text-navy-200">{c.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-sm text-foreground">{c.name}</p>
                          <p className="text-xs text-navy-400">{c.rank}</p>
                        </div>
                      </div>
                      <StatusBadge status={c.status} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {unassigned.length > 0 && (
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-navy-600/50 p-2 rounded-lg">
              <Users className="text-navy-300" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">미배치 선원</h3>
              <p className="text-xs text-navy-400">{unassigned.length}명</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {unassigned.map(c => (
              <Link key={c.id} to={`/crew/${c.id}`} className="flex items-center justify-between p-3 bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center">
                    <span className="text-xs text-navy-200">{c.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{c.name}</p>
                    <p className="text-xs text-navy-400">{c.rank}</p>
                  </div>
                </div>
                <StatusBadge status={c.status} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CrewAssignmentPage;
