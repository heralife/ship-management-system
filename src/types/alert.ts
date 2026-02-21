export type AlertSeverity = '긴급' | '경고' | '정보' | '알림';
export type AlertCategory = '안전' | '정비' | '운항' | '선원' | '시스템';

export interface Alert {
  id: string;
  title: string;
  message: string;
  severity: AlertSeverity;
  category: AlertCategory;
  shipId?: string;
  shipName?: string;
  createdAt: string;
  isRead: boolean;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;
  isPinned: boolean;
  viewCount: number;
}
