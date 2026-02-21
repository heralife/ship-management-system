export type MaintenanceStatus = '예정' | '진행중' | '완료' | '지연' | '취소';
export type MaintenancePriority = '긴급' | '높음' | '보통' | '낮음';
export type MaintenanceType = '정기점검' | '긴급수리' | '부품교체' | '도크입거' | '검사';

export interface MaintenanceOrder {
  id: string;
  orderNumber: string;
  shipId: string;
  shipName: string;
  title: string;
  description: string;
  type: MaintenanceType;
  status: MaintenanceStatus;
  priority: MaintenancePriority;
  assignedTo: string;
  scheduledDate: string;
  completedDate?: string;
  estimatedCost: number;
  actualCost?: number;
  parts: string[];
}
