import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import TabGroup from '../../components/common/TabGroup';
import { mockAlerts } from '../../data/alerts';
import { formatRelativeTime } from '../../utils/format';

const severityTabs = [
  { key: 'all', label: '전체' },
  { key: '긴급', label: '긴급' },
  { key: '경고', label: '경고' },
  { key: '정보', label: '정보' },
  { key: '알림', label: '알림' },
];

const severityIcon = (severity: string) => {
  switch (severity) {
    case '긴급': return 'text-red-400';
    case '경고': return 'text-yellow-400';
    case '정보': return 'text-blue-400';
    default: return 'text-navy-400';
  }
};

const AlertListPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = mockAlerts.filter(a => filter === 'all' || a.severity === filter);

  return (
    <div>
      <PageHeader title="알림" subtitle="시스템 알림 목록" />
      <TabGroup tabs={severityTabs} activeTab={filter} onTabChange={setFilter} />

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="card text-center py-12"><p className="text-navy-400">알림이 없습니다.</p></div>
        ) : (
          filtered.map(alert => (
            <div
              key={alert.id}
              className={`card cursor-pointer transition-colors ${!alert.isRead ? 'border-l-4 border-l-maritime-blue' : ''}`}
              onClick={() => setExpanded(expanded === alert.id ? null : alert.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <AlertTriangle size={20} className={severityIcon(alert.severity)} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{alert.title}</span>
                      {!alert.isRead && <span className="w-2 h-2 bg-maritime-blue rounded-full" />}
                    </div>
                    <p className="text-xs text-navy-400 mt-1">
                      {alert.shipName && `${alert.shipName} · `}{alert.category} · {formatRelativeTime(alert.createdAt)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={alert.severity} />
                  {expanded === alert.id ? <ChevronUp size={18} className="text-navy-400" /> : <ChevronDown size={18} className="text-navy-400" />}
                </div>
              </div>
              {expanded === alert.id && (
                <div className="mt-4 pt-4 border-t border-navy-700">
                  <p className="text-sm text-navy-200 leading-relaxed">{alert.message}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlertListPage;
