import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, User, Calendar, Anchor } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import TabGroup from '../../components/common/TabGroup';
import DataTable, { Column } from '../../components/common/DataTable';
import { mockShips } from '../../data/ships';
import { mockVoyages } from '../../data/voyages';
import { mockMaintenance } from '../../data/maintenance';
import { mockCrew } from '../../data/crew';
import { formatDate, formatNumber, formatCurrency } from '../../utils/format';

const tabs = [
  { key: 'info', label: '기본정보' },
  { key: 'voyages', label: '운항이력' },
  { key: 'maintenance', label: '정비이력' },
  { key: 'crew', label: '승무원' },
];

const ShipDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('info');
  const ship = mockShips.find(s => s.id === id);

  if (!ship) {
    return <div className="card text-center py-12"><p className="text-navy-400">선박을 찾을 수 없습니다.</p></div>;
  }

  const shipVoyages = mockVoyages.filter(v => v.shipId === id);
  const shipMaintenance = mockMaintenance.filter(m => m.shipId === id);
  const shipCrew = mockCrew.filter(c => c.shipId === id);

  const voyageColumns: Column<typeof shipVoyages[0]>[] = [
    { key: 'voyageNumber', header: '항차번호', render: (v) => <span className="font-medium text-maritime-light">{v.voyageNumber}</span> },
    { key: 'departurePort', header: '출발항', render: (v) => v.departurePort.name },
    { key: 'arrivalPort', header: '도착항', render: (v) => v.arrivalPort.name },
    { key: 'departureDate', header: '출발일' },
    { key: 'status', header: '상태', render: (v) => <StatusBadge status={v.status} /> },
    { key: 'progress', header: '진행률', render: (v) => (
      <div className="flex items-center gap-2">
        <div className="w-20 h-2 bg-navy-700 rounded-full"><div className="h-full bg-maritime-blue rounded-full" style={{ width: `${v.progress}%` }} /></div>
        <span className="text-xs">{v.progress}%</span>
      </div>
    )},
  ];

  const maintenanceColumns: Column<typeof shipMaintenance[0]>[] = [
    { key: 'orderNumber', header: '작업번호' },
    { key: 'title', header: '작업명' },
    { key: 'type', header: '유형' },
    { key: 'status', header: '상태', render: (m) => <StatusBadge status={m.status} /> },
    { key: 'priority', header: '우선순위', render: (m) => <StatusBadge status={m.priority} /> },
    { key: 'scheduledDate', header: '예정일' },
    { key: 'estimatedCost', header: '예상비용', render: (m) => formatCurrency(m.estimatedCost) },
  ];

  const crewColumns: Column<typeof shipCrew[0]>[] = [
    { key: 'name', header: '이름', render: (c) => <span className="font-medium text-foreground">{c.name}</span> },
    { key: 'rank', header: '직급' },
    { key: 'status', header: '상태', render: (c) => <StatusBadge status={c.status} /> },
    { key: 'seaServiceYears', header: '경력', render: (c) => `${c.seaServiceYears}년` },
    { key: 'contactNumber', header: '연락처' },
  ];

  return (
    <div>
      <PageHeader
        title={ship.name}
        subtitle={`IMO ${ship.imoNumber} | ${ship.type}`}
        actions={
          <Link to="/ships" className="btn-secondary flex items-center gap-2"><ArrowLeft size={18} /> 목록</Link>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="card flex items-center gap-4">
          <div className="bg-maritime-blue/20 p-3 rounded-lg"><Anchor className="text-maritime-blue" size={24} /></div>
          <div>
            <p className="text-navy-300 text-sm">상태</p>
            <StatusBadge status={ship.status} />
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg"><MapPin className="text-green-400" size={24} /></div>
          <div>
            <p className="text-navy-300 text-sm">현재 위치</p>
            <p className="text-foreground font-medium">{ship.currentPort}</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg"><User className="text-maritime-accent" size={24} /></div>
          <div>
            <p className="text-navy-300 text-sm">선장 / 승무원</p>
            <p className="text-foreground font-medium">{ship.captain} / {ship.crewCount}명</p>
          </div>
        </div>
      </div>

      <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'info' && (
        <div className="card">
          <h3 className="card-header">선박 상세 정보</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              ['선박명', ship.name], ['IMO 번호', ship.imoNumber], ['선종', ship.type],
              ['국적', ship.flag], ['총톤수', `${formatNumber(ship.grossTonnage)} GT`],
              ['재화중량톤', `${formatNumber(ship.deadweight)} DWT`], ['건조년도', `${ship.buildYear}년`],
              ['건조소', ship.builder], ['선급', ship.classificationSociety],
              ['최근 검사일', formatDate(ship.lastInspectionDate)],
              ['차기 검사일', formatDate(ship.nextInspectionDate)],
              ['좌표', `${ship.currentPosition.latitude}°N, ${ship.currentPosition.longitude}°E`],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-2 border-b border-navy-700">
                <span className="text-navy-300">{label}</span>
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 'voyages' && <DataTable columns={voyageColumns} data={shipVoyages} emptyMessage="운항 이력이 없습니다." />}
      {activeTab === 'maintenance' && <DataTable columns={maintenanceColumns} data={shipMaintenance} emptyMessage="정비 이력이 없습니다." />}
      {activeTab === 'crew' && <DataTable columns={crewColumns} data={shipCrew} emptyMessage="배치된 승무원이 없습니다." />}
    </div>
  );
};

export default ShipDetailPage;
