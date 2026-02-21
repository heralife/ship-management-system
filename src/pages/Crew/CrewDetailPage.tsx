import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Ship, Phone, Mail, Award } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import TabGroup from '../../components/common/TabGroup';
import DataTable, { Column } from '../../components/common/DataTable';
import { mockCrew } from '../../data/crew';
import { Certification } from '../../types/crew';
import { formatDate } from '../../utils/format';

const tabs = [
  { key: 'info', label: '기본정보' },
  { key: 'certs', label: '자격증' },
];

const CrewDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('info');
  const crew = mockCrew.find(c => c.id === id);

  if (!crew) {
    return <div className="card text-center py-12"><p className="text-navy-400">선원 정보를 찾을 수 없습니다.</p></div>;
  }

  const certColumns: Column<Certification>[] = [
    { key: 'name', header: '자격증명', render: (c) => <span className="font-medium text-foreground">{c.name}</span> },
    { key: 'issuedBy', header: '발급기관' },
    { key: 'issuedDate', header: '발급일', render: (c) => formatDate(c.issuedDate) },
    { key: 'expiryDate', header: '만료일', render: (c) => formatDate(c.expiryDate) },
    { key: 'status', header: '상태', render: (c) => <StatusBadge status={c.status} /> },
  ];

  return (
    <div>
      <PageHeader
        title={crew.name}
        subtitle={`${crew.rank} | ${crew.shipName || '미배치'}`}
        actions={<Link to="/crew" className="btn-secondary flex items-center gap-2"><ArrowLeft size={18} /> 목록</Link>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card flex items-center gap-4">
          <div className="bg-maritime-blue/20 p-3 rounded-lg"><User className="text-maritime-blue" size={24} /></div>
          <div><p className="text-navy-300 text-sm">상태</p><StatusBadge status={crew.status} /></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg"><Ship className="text-green-400" size={24} /></div>
          <div><p className="text-navy-300 text-sm">배치 선박</p><p className="text-foreground font-medium">{crew.shipName || '미배치'}</p></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg"><Award className="text-maritime-accent" size={24} /></div>
          <div><p className="text-navy-300 text-sm">경력</p><p className="text-foreground font-medium">{crew.seaServiceYears}년</p></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-yellow-500/20 p-3 rounded-lg"><Phone className="text-yellow-400" size={24} /></div>
          <div><p className="text-navy-300 text-sm">연락처</p><p className="text-foreground font-medium text-sm">{crew.contactNumber}</p></div>
        </div>
      </div>

      <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'info' && (
        <div className="card">
          <h3 className="card-header">선원 상세 정보</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              ['이름', crew.name], ['직급', crew.rank], ['국적', crew.nationality],
              ['생년월일', formatDate(crew.dateOfBirth)], ['입사일', formatDate(crew.hireDate)],
              ['해상 경력', `${crew.seaServiceYears}년`],
              ['배치 선박', crew.shipName || '미배치'],
              ['연락처', crew.contactNumber], ['이메일', crew.email],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-2 border-b border-navy-700">
                <span className="text-navy-300">{label}</span>
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'certs' && (
        <DataTable
          columns={certColumns}
          data={crew.certifications.map((c, i) => ({ ...c, id: `cert-${i}` }))}
          emptyMessage="등록된 자격증이 없습니다."
        />
      )}
    </div>
  );
};

export default CrewDetailPage;
