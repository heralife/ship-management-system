import React from 'react';

const statusColorMap: Record<string, string> = {
  '운항중': 'badge-success',
  '정박중': 'badge-info',
  '정비중': 'badge-warning',
  '대기중': 'badge-secondary',
  '승선중': 'badge-success',
  '휴가중': 'badge-info',
  '교육중': 'badge-warning',
  '예정': 'badge-info',
  '진행중': 'badge-warning',
  '완료': 'badge-success',
  '지연': 'badge-danger',
  '취소': 'badge-secondary',
  '긴급': 'badge-danger',
  '높음': 'badge-warning',
  '보통': 'badge-info',
  '낮음': 'badge-secondary',
  '유효': 'badge-success',
  '만료임박': 'badge-warning',
  '만료': 'badge-danger',
  '경고': 'badge-warning',
  '정보': 'badge-info',
  '알림': 'badge-secondary',
};

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const colorClass = statusColorMap[status] || 'badge-secondary';
  return <span className={colorClass}>{status}</span>;
};

export default StatusBadge;
