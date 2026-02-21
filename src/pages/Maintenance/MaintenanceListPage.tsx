import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Wrench, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import KPICard from '../../components/common/KPICard';
import SearchInput from '../../components/common/SearchInput';
import DataTable, { Column } from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import TabGroup from '../../components/common/TabGroup';
import Pagination from '../../components/common/Pagination';
import { useSearch } from '../../hooks/useSearch';
import { usePagination } from '../../hooks/usePagination';
import { mockMaintenance } from '../../data/maintenance';
import { MaintenanceOrder } from '../../types/maintenance';
import { formatCurrency } from '../../utils/format';

const statusTabs = [
  { key: 'all', label: '전체' },
  { key: '진행중', label: '진행중' },
  { key: '예정', label: '예정' },
  { key: '완료', label: '완료' },
  { key: '지연', label: '지연' },
];

const MaintenanceListPage: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const inProgress = mockMaintenance.filter(m => m.status === '진행중').length;
  const scheduled = mockMaintenance.filter(m => m.status === '예정').length;
  const completed = mockMaintenance.filter(m => m.status === '완료').length;
  const delayed = mockMaintenance.filter(m => m.status === '지연').length;

  const filtered = mockMaintenance.filter(m => statusFilter === 'all' || m.status === statusFilter);
  const searched = useSearch<MaintenanceOrder>(filtered, ['orderNumber', 'shipName', 'title', 'assignedTo'], query);
  const { page, setPage, totalPages, paginatedItems, totalItems } = usePagination(searched);

  const columns: Column<MaintenanceOrder>[] = [
    { key: 'orderNumber', header: '작업번호', render: (m) => <span className="font-medium text-maritime-light">{m.orderNumber}</span> },
    { key: 'shipName', header: '선박명' },
    { key: 'title', header: '작업명' },
    { key: 'type', header: '유형' },
    { key: 'status', header: '상태', render: (m) => <StatusBadge status={m.status} /> },
    { key: 'priority', header: '우선순위', render: (m) => <StatusBadge status={m.priority} /> },
    { key: 'assignedTo', header: '담당자' },
    { key: 'scheduledDate', header: '예정일' },
    { key: 'estimatedCost', header: '예상비용', render: (m) => formatCurrency(m.estimatedCost) },
  ];

  return (
    <div>
      <PageHeader
        title="정비관리"
        subtitle="정비 작업 현황 조회 및 관리"
        actions={
          <button className="btn-primary flex items-center gap-2" onClick={() => navigate('/maintenance/work-order')}>
            <Plus size={18} /> 작업지시서
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="진행중" value={`${inProgress}건`} icon={<Wrench className="text-yellow-400" size={24} />} iconBgColor="bg-yellow-500/20" />
        <KPICard title="예정" value={`${scheduled}건`} icon={<Clock className="text-blue-400" size={24} />} iconBgColor="bg-blue-500/20" />
        <KPICard title="완료" value={`${completed}건`} icon={<CheckCircle className="text-green-400" size={24} />} iconBgColor="bg-green-500/20" />
        <KPICard title="지연" value={`${delayed}건`} icon={<AlertTriangle className="text-red-400" size={24} />} iconBgColor="bg-red-500/20" />
      </div>

      <TabGroup tabs={statusTabs} activeTab={statusFilter} onTabChange={(key) => { setStatusFilter(key); setPage(1); }} />
      <div className="mb-4 max-w-md">
        <SearchInput value={query} onChange={(v) => { setQuery(v); setPage(1); }} placeholder="작업번호, 선박명, 작업명 검색..." />
      </div>
      <DataTable columns={columns} data={paginatedItems} onRowClick={(m) => navigate(`/maintenance/${m.id}`)} />
      <Pagination page={page} totalPages={totalPages} totalItems={totalItems} onPageChange={setPage} />
    </div>
  );
};

export default MaintenanceListPage;
