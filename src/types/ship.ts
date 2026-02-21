export type ShipStatus = '운항중' | '정박중' | '정비중' | '대기중';
export type ShipType = '컨테이너선' | '벌크선' | '유조선' | 'LNG선' | 'LPG선' | '자동차운반선';

export interface Ship {
  id: string;
  name: string;
  imoNumber: string;
  type: ShipType;
  status: ShipStatus;
  flag: string;
  grossTonnage: number;
  deadweight: number;
  buildYear: number;
  builder: string;
  classificationSociety: string;
  currentPort: string;
  currentPosition: {
    latitude: number;
    longitude: number;
  };
  captain: string;
  crewCount: number;
  lastInspectionDate: string;
  nextInspectionDate: string;
}
