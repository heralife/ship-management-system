export interface KPIData {
  label: string;
  value: number | string;
  change?: number;
  changeLabel?: string;
}

export interface FleetStatusData {
  status: string;
  count: number;
  color: string;
}

export interface MonthlyData {
  month: string;
  voyages: number;
  maintenance: number;
  fuel: number;
}
