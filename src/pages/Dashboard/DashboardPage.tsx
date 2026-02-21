import React from 'react';
import { Ship, Navigation, MapPin, Wrench, AlertTriangle } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import KPICard from '../../components/common/KPICard';
import StatusBadge from '../../components/common/StatusBadge';
import FleetStatusChart from '../../components/charts/FleetStatusChart';
import VoyageTimelineChart from '../../components/charts/VoyageTimelineChart';
import MaintenanceTrendChart from '../../components/charts/MaintenanceTrendChart';
import FuelConsumptionChart from '../../components/charts/FuelConsumptionChart';
import { mockShips } from '../../data/ships';
import { mockAlerts } from '../../data/alerts';
import { mockVoyages } from '../../data/voyages';
import { mockMaintenance } from '../../data/maintenance';
import { formatRelativeTime } from '../../utils/format';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const activeShips = mockShips.filter(s => s.status === '운항중').length;
  const monthlyVoyages = mockVoyages.filter(v => v.departureDate.startsWith('2026-02')).length;
  const pendingMaintenance = mockMaintenance.filter(m => m.status !== '완료' && m.status !== '취소').length;
  const recentAlerts = mockAlerts.filter(a => !a.isRead).slice(0, 5);

  return (
    <div>
      <PageHeader title="대시보드" subtitle="선단 현황 요약" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="총 선박" value={`${mockShips.length}척`} icon={<Ship className="text-maritime-blue" size={24} />} />
        <KPICard title="운항중" value={`${activeShips}척`} change={8.3} icon={<Navigation className="text-green-400" size={24} />} iconBgColor="bg-green-500/20" />
        <KPICard title="금월 운항" value={`${monthlyVoyages}건`} change={5.2} icon={<MapPin className="text-maritime-accent" size={24} />} iconBgColor="bg-cyan-500/20" />
        <KPICard title="미완료 정비" value={`${pendingMaintenance}건`} icon={<Wrench className="text-yellow-400" size={24} />} iconBgColor="bg-yellow-500/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <FleetStatusChart />
        <VoyageTimelineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MaintenanceTrendChart />
        <FuelConsumptionChart />
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">최근 알림</h3>
          <Link to="/alerts" className="text-sm text-maritime-blue hover:text-maritime-light">더보기</Link>
        </div>
        <div className="space-y-3">
          {recentAlerts.map(alert => (
            <div key={alert.id} className="flex items-center gap-4 p-3 bg-navy-900 rounded-lg">
              <AlertTriangle size={18} className={
                alert.severity === '긴급' ? 'text-red-400' :
                alert.severity === '경고' ? 'text-yellow-400' : 'text-blue-400'
              } />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate">{alert.title}</p>
                <p className="text-xs text-navy-400">{alert.shipName && `${alert.shipName} · `}{formatRelativeTime(alert.createdAt)}</p>
              </div>
              <StatusBadge status={alert.severity} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
