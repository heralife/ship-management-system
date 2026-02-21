export type CrewRank = '선장' | '기관장' | '항해사' | '기관사' | '갑판장' | '조기장' | '갑판원' | '기관원' | '조리장' | '조리원';
export type CertificationStatus = '유효' | '만료임박' | '만료';
export type CrewStatus = '승선중' | '휴가중' | '대기중' | '교육중';

export interface Certification {
  name: string;
  issuedDate: string;
  expiryDate: string;
  issuedBy: string;
  status: CertificationStatus;
}

export interface CrewMember {
  id: string;
  name: string;
  rank: CrewRank;
  shipId?: string;
  shipName?: string;
  nationality: string;
  dateOfBirth: string;
  hireDate: string;
  contactNumber: string;
  email: string;
  certifications: Certification[];
  seaServiceYears: number;
  status: CrewStatus;
}
