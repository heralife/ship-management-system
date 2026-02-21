export type VoyageStatus = '예정' | '운항중' | '완료' | '지연' | '취소';

export interface Port {
  name: string;
  country: string;
  code: string;
}

export interface Voyage {
  id: string;
  voyageNumber: string;
  shipId: string;
  shipName: string;
  departurePort: Port;
  arrivalPort: Port;
  departureDate: string;
  estimatedArrival: string;
  actualArrival?: string;
  status: VoyageStatus;
  cargoType: string;
  cargoWeight: number;
  fuelConsumption: number;
  distance: number;
  progress: number;
}
