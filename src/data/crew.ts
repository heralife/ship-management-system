import { CrewMember } from '../types/crew';

export const mockCrew: CrewMember[] = [
  {
    id: 'CRW001', name: '김철수', rank: '선장', shipId: 'SHP001', shipName: '한라호',
    nationality: '대한민국', dateOfBirth: '1975-03-15', hireDate: '2005-06-01',
    contactNumber: '010-1234-5678', email: 'cskim@ship.co.kr', seaServiceYears: 21,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2003-05-20', expiryDate: '2028-05-20', issuedBy: '해양수산부', status: '유효' },
      { name: 'GMDSS 무선통신사', issuedDate: '2004-03-10', expiryDate: '2029-03-10', issuedBy: '해양수산부', status: '유효' },
      { name: 'ISM 내부심사원', issuedDate: '2020-01-15', expiryDate: '2026-01-15', issuedBy: 'KR', status: '만료' },
    ],
  },
  {
    id: 'CRW002', name: '이영희', rank: '선장', shipId: 'SHP002', shipName: '백두호',
    nationality: '대한민국', dateOfBirth: '1978-07-22', hireDate: '2008-03-15',
    contactNumber: '010-2345-6789', email: 'yhlee@ship.co.kr', seaServiceYears: 18,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2006-11-10', expiryDate: '2031-11-10', issuedBy: '해양수산부', status: '유효' },
      { name: 'ECDIS 교육 수료', issuedDate: '2022-06-20', expiryDate: '2027-06-20', issuedBy: 'KIMFT', status: '유효' },
    ],
  },
  {
    id: 'CRW003', name: '박민수', rank: '선장', shipId: 'SHP003', shipName: '지리산호',
    nationality: '대한민국', dateOfBirth: '1972-11-08', hireDate: '2002-09-01',
    contactNumber: '010-3456-7890', email: 'mspark@ship.co.kr', seaServiceYears: 24,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2001-02-15', expiryDate: '2026-02-15', issuedBy: '해양수산부', status: '만료임박' },
      { name: '유조선 교육 수료', issuedDate: '2019-08-05', expiryDate: '2026-08-05', issuedBy: 'KIMFT', status: '유효' },
    ],
  },
  {
    id: 'CRW004', name: '최정훈', rank: '선장', shipId: 'SHP004', shipName: '설악호',
    nationality: '대한민국', dateOfBirth: '1980-01-30', hireDate: '2010-01-10',
    contactNumber: '010-4567-8901', email: 'jhchoi@ship.co.kr', seaServiceYears: 16,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2009-04-22', expiryDate: '2029-04-22', issuedBy: '해양수산부', status: '유효' },
      { name: 'LNG선 교육 수료', issuedDate: '2021-03-18', expiryDate: '2027-03-18', issuedBy: 'KIMFT', status: '유효' },
    ],
  },
  {
    id: 'CRW005', name: '정승호', rank: '선장', shipId: 'SHP005', shipName: '태백호',
    nationality: '대한민국', dateOfBirth: '1976-05-12', hireDate: '2006-07-20',
    contactNumber: '010-5678-9012', email: 'shjeong@ship.co.kr', seaServiceYears: 20,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2005-09-15', expiryDate: '2030-09-15', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW006', name: '김동현', rank: '기관장', shipId: 'SHP001', shipName: '한라호',
    nationality: '대한민국', dateOfBirth: '1974-09-18', hireDate: '2004-02-01',
    contactNumber: '010-6789-0123', email: 'dhkim@ship.co.kr', seaServiceYears: 22,
    status: '승선중',
    certifications: [
      { name: '1급 기관사 면허', issuedDate: '2003-08-25', expiryDate: '2028-08-25', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW007', name: '송미래', rank: '항해사', shipId: 'SHP001', shipName: '한라호',
    nationality: '대한민국', dateOfBirth: '1990-12-05', hireDate: '2015-03-01',
    contactNumber: '010-7890-1234', email: 'mrsong@ship.co.kr', seaServiceYears: 11,
    status: '승선중',
    certifications: [
      { name: '2급 항해사 면허', issuedDate: '2014-07-10', expiryDate: '2029-07-10', issuedBy: '해양수산부', status: '유효' },
      { name: 'ARPA 교육 수료', issuedDate: '2023-01-20', expiryDate: '2028-01-20', issuedBy: 'KIMFT', status: '유효' },
    ],
  },
  {
    id: 'CRW008', name: '장기석', rank: '기관사', shipId: 'SHP002', shipName: '백두호',
    nationality: '대한민국', dateOfBirth: '1985-06-25', hireDate: '2012-08-15',
    contactNumber: '010-8901-2345', email: 'ksjang@ship.co.kr', seaServiceYears: 14,
    status: '승선중',
    certifications: [
      { name: '2급 기관사 면허', issuedDate: '2011-12-20', expiryDate: '2026-12-20', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW009', name: '윤서연', rank: '항해사', shipId: 'SHP003', shipName: '지리산호',
    nationality: '대한민국', dateOfBirth: '1992-04-17', hireDate: '2017-06-01',
    contactNumber: '010-9012-3456', email: 'syyun@ship.co.kr', seaServiceYears: 9,
    status: '승선중',
    certifications: [
      { name: '3급 항해사 면허', issuedDate: '2016-11-30', expiryDate: '2026-11-30', issuedBy: '해양수산부', status: '유효' },
      { name: '유조선 교육 수료', issuedDate: '2021-05-10', expiryDate: '2026-05-10', issuedBy: 'KIMFT', status: '유효' },
    ],
  },
  {
    id: 'CRW010', name: '한동훈', rank: '선장', shipId: 'SHP006', shipName: '금강호',
    nationality: '대한민국', dateOfBirth: '1977-08-03', hireDate: '2007-11-15',
    contactNumber: '010-0123-4567', email: 'dhhahn@ship.co.kr', seaServiceYears: 19,
    status: '대기중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2006-03-20', expiryDate: '2031-03-20', issuedBy: '해양수산부', status: '유효' },
      { name: 'LPG선 교육 수료', issuedDate: '2018-09-12', expiryDate: '2026-09-12', issuedBy: 'KIMFT', status: '유효' },
    ],
  },
  {
    id: 'CRW011', name: '오세준', rank: '선장', shipId: 'SHP007', shipName: '독도호',
    nationality: '대한민국', dateOfBirth: '1979-02-28', hireDate: '2009-05-20',
    contactNumber: '010-1111-2222', email: 'sjoh@ship.co.kr', seaServiceYears: 17,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2008-10-15', expiryDate: '2028-10-15', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW012', name: '조현우', rank: '갑판장', shipId: 'SHP001', shipName: '한라호',
    nationality: '대한민국', dateOfBirth: '1982-10-11', hireDate: '2008-04-01',
    contactNumber: '010-2222-3333', email: 'hwjo@ship.co.kr', seaServiceYears: 18,
    status: '승선중',
    certifications: [
      { name: '갑판부 자격증', issuedDate: '2007-06-15', expiryDate: '2027-06-15', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW013', name: '임재현', rank: '선장', shipId: 'SHP010', shipName: '소백호',
    nationality: '대한민국', dateOfBirth: '1973-06-20', hireDate: '2003-01-10',
    contactNumber: '010-3333-4444', email: 'jhlim@ship.co.kr', seaServiceYears: 23,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2002-04-08', expiryDate: '2027-04-08', issuedBy: '해양수산부', status: '유효' },
      { name: 'LNG선 교육 수료', issuedDate: '2023-11-20', expiryDate: '2028-11-20', issuedBy: 'KIMFT', status: '유효' },
    ],
  },
  {
    id: 'CRW014', name: '강태영', rank: '선장', shipId: 'SHP009', shipName: '한강호',
    nationality: '대한민국', dateOfBirth: '1976-12-01', hireDate: '2006-04-15',
    contactNumber: '010-4444-5555', email: 'tykang@ship.co.kr', seaServiceYears: 20,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2005-07-30', expiryDate: '2030-07-30', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW015', name: '윤상민', rank: '선장', shipId: 'SHP008', shipName: '울릉호',
    nationality: '대한민국', dateOfBirth: '1981-04-22', hireDate: '2011-09-01',
    contactNumber: '010-5555-6666', email: 'smyun@ship.co.kr', seaServiceYears: 15,
    status: '승선중',
    certifications: [
      { name: '1급 항해사 면허', issuedDate: '2010-12-10', expiryDate: '2030-12-10', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW016', name: '배수정', rank: '기관장', shipId: 'SHP003', shipName: '지리산호',
    nationality: '대한민국', dateOfBirth: '1975-08-14', hireDate: '2005-02-20',
    contactNumber: '010-6666-7777', email: 'sjbae@ship.co.kr', seaServiceYears: 21,
    status: '승선중',
    certifications: [
      { name: '1급 기관사 면허', issuedDate: '2004-05-18', expiryDate: '2029-05-18', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW017', name: '노진호', rank: '조기장', shipId: 'SHP002', shipName: '백두호',
    nationality: '대한민국', dateOfBirth: '1984-03-09', hireDate: '2010-07-01',
    contactNumber: '010-7777-8888', email: 'jhnoh@ship.co.kr', seaServiceYears: 16,
    status: '승선중',
    certifications: [
      { name: '기관부 자격증', issuedDate: '2009-11-25', expiryDate: '2029-11-25', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW018', name: '서지원', rank: '항해사', shipId: undefined, shipName: undefined,
    nationality: '대한민국', dateOfBirth: '1993-07-30', hireDate: '2018-03-15',
    contactNumber: '010-8888-9999', email: 'jwseo@ship.co.kr', seaServiceYears: 8,
    status: '휴가중',
    certifications: [
      { name: '3급 항해사 면허', issuedDate: '2017-09-20', expiryDate: '2027-09-20', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW019', name: '문재호', rank: '기관사', shipId: undefined, shipName: undefined,
    nationality: '대한민국', dateOfBirth: '1988-11-15', hireDate: '2014-05-01',
    contactNumber: '010-1010-2020', email: 'jhmoon@ship.co.kr', seaServiceYears: 12,
    status: '교육중',
    certifications: [
      { name: '2급 기관사 면허', issuedDate: '2013-08-12', expiryDate: '2028-08-12', issuedBy: '해양수산부', status: '유효' },
      { name: 'LNG선 교육 수료', issuedDate: '2026-01-10', expiryDate: '2031-01-10', issuedBy: 'KIMFT', status: '유효' },
    ],
  },
  {
    id: 'CRW020', name: '권혁준', rank: '갑판원', shipId: undefined, shipName: undefined,
    nationality: '대한민국', dateOfBirth: '1995-02-18', hireDate: '2020-09-01',
    contactNumber: '010-3030-4040', email: 'hjkwon@ship.co.kr', seaServiceYears: 6,
    status: '대기중',
    certifications: [
      { name: '해기사 면허', issuedDate: '2020-06-15', expiryDate: '2030-06-15', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW021', name: '고은비', rank: '조리장', shipId: 'SHP005', shipName: '태백호',
    nationality: '대한민국', dateOfBirth: '1986-09-05', hireDate: '2012-11-10',
    contactNumber: '010-5050-6060', email: 'ebko@ship.co.kr', seaServiceYears: 14,
    status: '승선중',
    certifications: [
      { name: '선박조리사 자격증', issuedDate: '2012-04-20', expiryDate: '2027-04-20', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW022', name: '차민석', rank: '기관원', shipId: 'SHP007', shipName: '독도호',
    nationality: '대한민국', dateOfBirth: '1991-01-25', hireDate: '2016-04-15',
    contactNumber: '010-7070-8080', email: 'mscha@ship.co.kr', seaServiceYears: 10,
    status: '승선중',
    certifications: [
      { name: '기관부 자격증', issuedDate: '2015-10-10', expiryDate: '2025-10-10', issuedBy: '해양수산부', status: '만료' },
    ],
  },
  {
    id: 'CRW023', name: '하승우', rank: '갑판원', shipId: 'SHP004', shipName: '설악호',
    nationality: '대한민국', dateOfBirth: '1994-05-30', hireDate: '2019-02-01',
    contactNumber: '010-9090-0101', email: 'swha@ship.co.kr', seaServiceYears: 7,
    status: '승선중',
    certifications: [
      { name: '해기사 면허', issuedDate: '2018-08-15', expiryDate: '2028-08-15', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW024', name: '신예진', rank: '항해사', shipId: undefined, shipName: undefined,
    nationality: '대한민국', dateOfBirth: '1994-10-12', hireDate: '2019-06-01',
    contactNumber: '010-1212-3434', email: 'yjshin@ship.co.kr', seaServiceYears: 7,
    status: '휴가중',
    certifications: [
      { name: '3급 항해사 면허', issuedDate: '2019-01-20', expiryDate: '2029-01-20', issuedBy: '해양수산부', status: '유효' },
    ],
  },
  {
    id: 'CRW025', name: '양현수', rank: '기관원', shipId: undefined, shipName: undefined,
    nationality: '대한민국', dateOfBirth: '1996-08-07', hireDate: '2021-03-01',
    contactNumber: '010-5656-7878', email: 'hsyang@ship.co.kr', seaServiceYears: 5,
    status: '대기중',
    certifications: [
      { name: '기관부 자격증', issuedDate: '2020-12-10', expiryDate: '2030-12-10', issuedBy: '해양수산부', status: '유효' },
    ],
  },
];
