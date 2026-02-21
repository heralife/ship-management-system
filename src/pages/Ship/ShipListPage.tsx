import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import SearchInput from '../../components/common/SearchInput';
import DataTable, { Column } from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import TabGroup from '../../components/common/TabGroup';
import Pagination from '../../components/common/Pagination';
import { useSearch } from '../../hooks/useSearch';
import { usePagination } from '../../hooks/usePagination';
import { mockShips } from '../../data/ships';
import { Ship, ShipStatus } from '../../types/ship';
import { formatNumber } from '../../utils/format';

const statusTabs = [
  { key: 'all', label: '전체' },
  { key: '운항중', label: '운항중' },
  { key: '정박중', label: '정박중' },
  { key: '정비중', label: '정비중' },
  { key: '대기중', label: '대기중' },
];

const ShipListPage: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockShips.filter(s => statusFilter === 'all' || s.status === statusFilter);
  const searched = useSearch<Ship>(filtered, ['name', 'imoNumber', 'type', 'captain'], query);
  const { page, setPage, totalPages, paginatedItems, totalItems } = usePagination(searched);

  const columns: Column<Ship>[] = [
    { key: 'name', header: '선박명', render: (s) => <span className="font-medium text-foreground">{s.name}</span> },
    { key: 'imoNumber', header: 'IMO 번호' },
    { key: 'type', header: '선종' },
    { key: 'status', header: '상태', render: (s) => <StatusBadge status={s.status} /> },
    { key: 'grossTonnage', header: '총톤수', render: (s) => `${formatNumber(s.grossTonnage)} GT` },
    { key: 'currentPort', header: '현재 위치' },
    { key: 'captain', header: '선장' },
    { key: 'crewCount', header: '승무원', render: (s) => `${s.crewCount}명` },
  ];

  return (
    <div>
      <PageHeader
        title="선박관리"
        subtitle="등록된 선박 목록 조회 및 관리"
        actions={
          <button className="btn-primary flex items-center gap-2" onClick={() => navigate('/ships/register')}>
            <Plus size={18} /> 선박 등록
          </button>
        }
      />
      <TabGroup tabs={statusTabs} activeTab={statusFilter} onTabChange={(key) => { setStatusFilter(key); setPage(1); }} />
      <div className="mb-4 max-w-md">
        <SearchInput value={query} onChange={(v) => { setQuery(v); setPage(1); }} placeholder="선박명, IMO, 선종, 선장 검색..." />
      </div>
      <DataTable columns={columns} data={paginatedItems} onRowClick={(s) => navigate(`/ships/${s.id}`)} />
      <Pagination page={page} totalPages={totalPages} totalItems={totalItems} onPageChange={setPage} />
    </div>
  );
};

export default ShipListPage;
