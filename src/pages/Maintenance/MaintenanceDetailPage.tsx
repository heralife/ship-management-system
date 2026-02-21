import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Wrench, Ship, User, Calendar } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { mockMaintenance } from '../../data/maintenance';
import { formatDate, formatCurrency } from '../../utils/format';

const MaintenanceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const order = mockMaintenance.find(m => m.id === id);

  if (!order) {
    return <div className="card text-center py-12"><p className="text-navy-400">정비 작업을 찾을 수 없습니다.</p></div>;
  }

  return (
    <div>
      <PageHeader
        title={order.orderNumber}
        subtitle={order.title}
        actions={<Link to="/maintenance" className="btn-secondary flex items-center gap-2"><ArrowLeft size={18} /> 목록</Link>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card flex items-center gap-4">
          <div className="bg-yellow-500/20 p-3 rounded-lg"><Wrench className="text-yellow-400" size={24} /></div>
          <div><p className="text-navy-300 text-sm">유형</p><p className="text-foreground font-medium">{order.type}</p></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-maritime-blue/20 p-3 rounded-lg"><Ship className="text-maritime-blue" size={24} /></div>
          <div><p className="text-navy-300 text-sm">선박</p><p className="text-foreground font-medium">{order.shipName}</p></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg"><User className="text-green-400" size={24} /></div>
          <div><p className="text-navy-300 text-sm">담당자</p><p className="text-foreground font-medium">{order.assignedTo}</p></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg"><Calendar className="text-maritime-accent" size={24} /></div>
          <div><p className="text-navy-300 text-sm">예정일</p><p className="text-foreground font-medium">{formatDate(order.scheduledDate)}</p></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h3 className="card-header">작업 상세</h3>
          <div className="space-y-4">
            {[
              ['작업번호', order.orderNumber],
              ['선박', order.shipName],
              ['작업명', order.title],
              ['유형', order.type],
              ['상태', null, <StatusBadge key="s" status={order.status} />],
              ['우선순위', null, <StatusBadge key="p" status={order.priority} />],
              ['담당자', order.assignedTo],
              ['예정일', formatDate(order.scheduledDate)],
              ['완료일', order.completedDate ? formatDate(order.completedDate) : '-'],
            ].map(([label, value, node]) => (
              <div key={label as string} className="flex justify-between py-2 border-b border-navy-700">
                <span className="text-navy-300">{label}</span>
                {node || <span className="text-foreground">{value}</span>}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-navy-300 text-sm mb-2">작업 설명</p>
            <p className="text-navy-100 text-sm leading-relaxed bg-navy-900 p-4 rounded-lg">{order.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="card-header">비용 정보</h3>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-navy-700">
                <span className="text-navy-300">예상 비용</span>
                <span className="text-foreground font-medium">{formatCurrency(order.estimatedCost)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-navy-700">
                <span className="text-navy-300">실제 비용</span>
                <span className="text-foreground font-medium">{order.actualCost ? formatCurrency(order.actualCost) : '-'}</span>
              </div>
              {order.actualCost && (
                <div className="flex justify-between py-2">
                  <span className="text-navy-300">차이</span>
                  <span className={order.actualCost > order.estimatedCost ? 'text-red-400 font-medium' : 'text-green-400 font-medium'}>
                    {order.actualCost > order.estimatedCost ? '+' : ''}{formatCurrency(order.actualCost - order.estimatedCost)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="card-header">소요 부품</h3>
            {order.parts.length === 0 ? (
              <p className="text-navy-400 text-sm">소요 부품 없음</p>
            ) : (
              <div className="space-y-2">
                {order.parts.map((part, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-navy-900 rounded-lg">
                    <div className="w-2 h-2 bg-maritime-blue rounded-full" />
                    <span className="text-sm text-navy-100">{part}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceDetailPage;
