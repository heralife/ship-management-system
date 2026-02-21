import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = (dateStr: string): string =>
  format(new Date(dateStr), 'yyyy년 MM월 dd일', { locale: ko });

export const formatShortDate = (dateStr: string): string =>
  format(new Date(dateStr), 'yyyy-MM-dd');

export const formatRelativeTime = (dateStr: string): string =>
  formatDistanceToNow(new Date(dateStr), { addSuffix: true, locale: ko });

export const formatNumber = (num: number): string =>
  num.toLocaleString('ko-KR');

export const formatCurrency = (num: number): string =>
  `${num.toLocaleString('ko-KR')}원`;
