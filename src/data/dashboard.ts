import { FleetStatusData, MonthlyData } from '../types/dashboard';

export const fleetStatusData: FleetStatusData[] = [
  { status: '운항중', count: 6, color: '#22c55e' },
  { status: '정박중', count: 2, color: '#3b82f6' },
  { status: '정비중', count: 1, color: '#eab308' },
  { status: '대기중', count: 1, color: '#6b7280' },
];

export const monthlyData: MonthlyData[] = [
  { month: '3월', voyages: 8, maintenance: 5, fuel: 12500 },
  { month: '4월', voyages: 10, maintenance: 4, fuel: 14200 },
  { month: '5월', voyages: 12, maintenance: 6, fuel: 15800 },
  { month: '6월', voyages: 9, maintenance: 3, fuel: 13100 },
  { month: '7월', voyages: 11, maintenance: 7, fuel: 14900 },
  { month: '8월', voyages: 13, maintenance: 5, fuel: 16200 },
  { month: '9월', voyages: 10, maintenance: 4, fuel: 13800 },
  { month: '10월', voyages: 14, maintenance: 8, fuel: 17100 },
  { month: '11월', voyages: 11, maintenance: 6, fuel: 15300 },
  { month: '12월', voyages: 9, maintenance: 5, fuel: 12900 },
  { month: '1월', voyages: 12, maintenance: 7, fuel: 14600 },
  { month: '2월', voyages: 15, maintenance: 4, fuel: 16800 },
];

export const maintenanceByType = [
  { month: '3월', 정기점검: 2, 긴급수리: 1, 부품교체: 1, 검사: 1 },
  { month: '4월', 정기점검: 2, 긴급수리: 0, 부품교체: 1, 검사: 1 },
  { month: '5월', 정기점검: 3, 긴급수리: 1, 부품교체: 1, 검사: 1 },
  { month: '6월', 정기점검: 1, 긴급수리: 1, 부품교체: 0, 검사: 1 },
  { month: '7월', 정기점검: 3, 긴급수리: 2, 부품교체: 1, 검사: 1 },
  { month: '8월', 정기점검: 2, 긴급수리: 1, 부품교체: 1, 검사: 1 },
  { month: '9월', 정기점검: 2, 긴급수리: 0, 부품교체: 1, 검사: 1 },
  { month: '10월', 정기점검: 3, 긴급수리: 2, 부품교체: 2, 검사: 1 },
  { month: '11월', 정기점검: 2, 긴급수리: 1, 부품교체: 2, 검사: 1 },
  { month: '12월', 정기점검: 2, 긴급수리: 1, 부품교체: 1, 검사: 1 },
  { month: '1월', 정기점검: 3, 긴급수리: 1, 부품교체: 2, 검사: 1 },
  { month: '2월', 정기점검: 2, 긴급수리: 1, 부품교체: 0, 검사: 1 },
];

export const fuelConsumptionData = [
  { month: '3월', 실제: 12500, 목표: 13000 },
  { month: '4월', 실제: 14200, 목표: 13000 },
  { month: '5월', 실제: 15800, 목표: 14000 },
  { month: '6월', 실제: 13100, 목표: 13500 },
  { month: '7월', 실제: 14900, 목표: 14000 },
  { month: '8월', 실제: 16200, 목표: 15000 },
  { month: '9월', 실제: 13800, 목표: 14000 },
  { month: '10월', 실제: 17100, 목표: 15500 },
  { month: '11월', 실제: 15300, 목표: 15000 },
  { month: '12월', 실제: 12900, 목표: 13000 },
  { month: '1월', 실제: 14600, 목표: 14000 },
  { month: '2월', 실제: 16800, 목표: 15000 },
];
