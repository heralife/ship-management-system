import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, UserCheck, Clock, GraduationCap } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import KPICard from '../../components/common/KPICard';
import SearchInput from '../../components/common/SearchInput';
import DataTable, { Column } from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import TabGroup from '../../components/common/TabGroup';
import Pagination from '../../components/common/Pagination';
import { useSearch } from '../../hooks/useSearch';
import { usePagination } from '../../hooks/usePagination';
import { mockCrew } from '../../data/crew';
import { CrewMember } from '../../types/crew';

const statusTabs = [
  { key: 'all', label: '전체' },
  { key: '승선중', label: '승선중' },
  { key: '휴가중', label: '휴가중' },
  { key: '대기중', label: '대기중' },
  { key: '교육중', label: '교육중' },
];

const CrewListPage: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const onboard = mockCrew.filter(c => c.status === '승선중').length;
  const onLeave = mockCrew.filter(c => c.status === '휴가중').length;
  const standby = mockCrew.filter(c => c.status === '대기중').length;
  const training = mockCrew.filter(c => c.status === '교육중').length;

  const filtered = mockCrew.filter(c => statusFilter === 'all' || c.status === statusFilter);
  const searched = useSearch<CrewMember>(filtered, ['name', 'rank', 'shipName', 'nationality'], query);
  const { page, setPage, totalPages, paginatedItems, totalItems } = usePagination(searched);

  const columns: Column<CrewMember>[] = [
    { key: 'name', header: '이름', render: (c) => <span className="font-medium text-foreground">{c.name}</span> },
    { key: 'rank', header: '직급' },
    { key: 'shipName', header: '배치 선박', render: (c) => c.shipName || <span className="text-navy-500">미배치</span> },
    { key: 'status', header: '상태', render: (c) => <StatusBadge status={c.status} /> },
    { key: 'seaServiceYears', header: '경력', render: (c) => `${c.seaServiceYears}년` },
    { key: 'nationality', header: '국적' },
    { key: 'contactNumber', header: '연락처' },
  ];

  return (
    <div>
      <PageHeader title="선원관리" subtitle="선원 현황 조회 및 관리" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="승선중" value={`${onboard}명`} icon={<UserCheck className="text-green-400" size={24} />} iconBgColor="bg-green-500/20" />
        <KPICard title="휴가중" value={`${onLeave}명`} icon={<Users className="text-blue-400" size={24} />} iconBgColor="bg-blue-500/20" />
        <KPICard title="대기중" value={`${standby}명`} icon={<Clock className="text-navy-300" size={24} />} iconBgColor="bg-navy-600/50" />
        <KPICard title="교육중" value={`${training}명`} icon={<GraduationCap className="text-yellow-400" size={24} />} iconBgColor="bg-yellow-500/20" />
      </div>

      <TabGroup tabs={statusTabs} activeTab={statusFilter} onTabChange={(key) => { setStatusFilter(key); setPage(1); }} />
      <div className="mb-4 max-w-md">
        <SearchInput value={query} onChange={(v) => { setQuery(v); setPage(1); }} placeholder="이름, 직급, 선박, 국적 검색..." />
      </div>
      <DataTable columns={columns} data={paginatedItems} onRowClick={(c) => navigate(`/crew/${c.id}`)} />
      <Pagination page={page} totalPages={totalPages} totalItems={totalItems} onPageChange={setPage} />
    </div>
  );
};

export default CrewListPage;
