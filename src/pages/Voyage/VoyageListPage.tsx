import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import SearchInput from '../../components/common/SearchInput';
import DataTable, { Column } from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import TabGroup from '../../components/common/TabGroup';
import Pagination from '../../components/common/Pagination';
import { useSearch } from '../../hooks/useSearch';
import { usePagination } from '../../hooks/usePagination';
import { mockVoyages } from '../../data/voyages';
import { Voyage } from '../../types/voyage';
import { formatNumber } from '../../utils/format';

const statusTabs = [
  { key: 'all', label: '전체' },
  { key: '운항중', label: '운항중' },
  { key: '예정', label: '예정' },
  { key: '완료', label: '완료' },
  { key: '지연', label: '지연' },
];

const VoyageListPage: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockVoyages.filter(v => statusFilter === 'all' || v.status === statusFilter);
  const searched = useSearch<Voyage>(filtered, ['voyageNumber', 'shipName', 'cargoType'], query);
  const { page, setPage, totalPages, paginatedItems, totalItems } = usePagination(searched);

  const columns: Column<Voyage>[] = [
    { key: 'voyageNumber', header: '항차번호', render: (v) => <span className="font-medium text-maritime-light">{v.voyageNumber}</span> },
    { key: 'shipName', header: '선박명' },
    { key: 'departurePort', header: '출발항', render: (v) => `${v.departurePort.name} (${v.departurePort.code})` },
    { key: 'arrivalPort', header: '도착항', render: (v) => `${v.arrivalPort.name} (${v.arrivalPort.code})` },
    { key: 'departureDate', header: '출발일' },
    { key: 'status', header: '상태', render: (v) => <StatusBadge status={v.status} /> },
    { key: 'progress', header: '진행률', render: (v) => (
      <div className="flex items-center gap-2">
        <div className="w-20 h-2 bg-navy-700 rounded-full">
          <div className="h-full bg-maritime-blue rounded-full" style={{ width: `${v.progress}%` }} />
        </div>
        <span className="text-xs">{v.progress}%</span>
      </div>
    )},
    { key: 'cargoWeight', header: '화물량', render: (v) => `${formatNumber(v.cargoWeight)} MT` },
  ];

  return (
    <div>
      <PageHeader title="운항관리" subtitle="운항 현황 조회 및 관리" />
      <TabGroup tabs={statusTabs} activeTab={statusFilter} onTabChange={(key) => { setStatusFilter(key); setPage(1); }} />
      <div className="mb-4 max-w-md">
        <SearchInput value={query} onChange={(v) => { setQuery(v); setPage(1); }} placeholder="항차번호, 선박명, 화물 검색..." />
      </div>
      <DataTable columns={columns} data={paginatedItems} onRowClick={(v) => navigate(`/voyages/${v.id}`)} />
      <Pagination page={page} totalPages={totalPages} totalItems={totalItems} onPageChange={setPage} />
    </div>
  );
};

export default VoyageListPage;
