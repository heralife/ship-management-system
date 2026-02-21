import { Alert, Notice } from '../types/alert';

export const mockAlerts: Alert[] = [
  {
    id: 'ALT001', title: '지리산호 카고펌프 이상', message: '지리산호 카고펌프 #2에서 이상 진동이 감지되었습니다. 즉시 점검이 필요합니다. 진동 수치가 허용 범위를 초과하였으며, 지속 운전 시 장비 손상 우려가 있습니다.',
    severity: '긴급', category: '정비', shipId: 'SHP003', shipName: '지리산호', createdAt: '2026-02-15T08:30:00', isRead: false,
  },
  {
    id: 'ALT002', title: '울릉호 유압장치 수리 지연', message: '울릉호 자동차 데크 유압장치 수리가 예정일 대비 지연되고 있습니다. 부품 수급 문제로 인해 추가 3일 소요 예상됩니다.',
    severity: '경고', category: '정비', shipId: 'SHP008', shipName: '울릉호', createdAt: '2026-02-14T14:20:00', isRead: false,
  },
  {
    id: 'ALT003', title: '한라호 운항 일정 변경', message: '한라호의 로테르담항 도착 예정일이 기상 악화로 인해 2일 연기되었습니다. 수정 ETA: 2026-02-22',
    severity: '정보', category: '운항', shipId: 'SHP001', shipName: '한라호', createdAt: '2026-02-13T10:15:00', isRead: true,
  },
  {
    id: 'ALT004', title: '박민수 선장 자격증 만료 임박', message: '지리산호 박민수 선장의 1급 항해사 면허가 2026-02-15에 만료됩니다. 갱신 절차를 진행해 주시기 바랍니다.',
    severity: '경고', category: '선원', shipId: 'SHP003', shipName: '지리산호', createdAt: '2026-02-10T09:00:00', isRead: false,
  },
  {
    id: 'ALT005', title: '시스템 정기 업데이트 완료', message: '선박통합관리시스템 v2.1.0 업데이트가 성공적으로 완료되었습니다. 새로운 기능: 실시간 연료 모니터링 개선, 보고서 양식 추가',
    severity: '알림', category: '시스템', createdAt: '2026-02-09T18:00:00', isRead: true,
  },
  {
    id: 'ALT006', title: '태백호 냉동컨테이너 온도 이상', message: '태백호 리퍼 컨테이너 Bay 22에서 온도 이상 신호가 감지되었습니다. 설정 온도 -18°C 대비 현재 -12°C로 측정됩니다.',
    severity: '긴급', category: '안전', shipId: 'SHP005', shipName: '태백호', createdAt: '2026-02-16T06:45:00', isRead: false,
  },
  {
    id: 'ALT007', title: '독도호 발라스트 수처리 점검 알림', message: '독도호의 발라스트 수처리 장치 정기 점검 예정일이 다가오고 있습니다. 2026-03-20까지 점검을 완료해야 합니다.',
    severity: '알림', category: '정비', shipId: 'SHP007', shipName: '독도호', createdAt: '2026-02-12T11:30:00', isRead: true,
  },
  {
    id: 'ALT008', title: '소백호 기상 특보', message: '소백호 항로상 아라비아해 인근에 열대저압부 발생이 예보되었습니다. 항로 조정을 검토해 주시기 바랍니다.',
    severity: '경고', category: '운항', shipId: 'SHP010', shipName: '소백호', createdAt: '2026-02-16T15:20:00', isRead: false,
  },
  {
    id: 'ALT009', title: '차민석 기관원 자격증 만료', message: '독도호 차민석 기관원의 기관부 자격증이 2025-10-10에 이미 만료되었습니다. 즉시 갱신이 필요합니다.',
    severity: '긴급', category: '선원', shipId: 'SHP007', shipName: '독도호', createdAt: '2026-02-11T08:00:00', isRead: false,
  },
  {
    id: 'ALT010', title: '백두호 출항 준비 완료', message: '백두호의 상하이항 운항(V-2026-007) 출항 준비가 완료되었습니다. 2026-02-20 출항 예정입니다.',
    severity: '정보', category: '운항', shipId: 'SHP002', shipName: '백두호', createdAt: '2026-02-17T07:00:00', isRead: false,
  },
  {
    id: 'ALT011', title: '설악호 도크 입거 완료 보고', message: '설악호 LNG 탱크 정기 검사 및 스러스터 모터 절연 검사가 순조롭게 진행 중입니다. 현재 진행률 65%',
    severity: '정보', category: '정비', shipId: 'SHP004', shipName: '설악호', createdAt: '2026-02-14T16:00:00', isRead: true,
  },
  {
    id: 'ALT012', title: '월간 연료 소비 보고서 생성', message: '2026년 1월 월간 연료 소비 보고서가 자동 생성되었습니다. 전월 대비 3.2% 감소하였습니다.',
    severity: '알림', category: '시스템', createdAt: '2026-02-01T09:00:00', isRead: true,
  },
];

export const mockNotices: Notice[] = [
  {
    id: 'NTC001', title: '2026년 1분기 안전교육 일정 안내', content: '2026년 1분기 안전교육이 아래와 같이 실시됩니다.\n\n1. 소화훈련: 2026-03-05\n2. 퇴선훈련: 2026-03-06\n3. 비상조타 훈련: 2026-03-07\n\n모든 승선 선원은 필수 참석 바랍니다. 미참석 시 인사고과에 반영됩니다.',
    author: '안전관리팀', category: '안전', createdAt: '2026-02-10T09:00:00', isPinned: true, viewCount: 245,
  },
  {
    id: 'NTC002', title: 'IMO 2026 환경규제 강화 안내', content: 'IMO에서 2026년부터 시행되는 강화된 환경 규제에 대해 안내드립니다.\n\n1. EEXI/CII 규제 강화\n2. 메탄 슬립 규제 도입\n3. 발라스트 수처리 기준 강화\n\n각 선박별 대응 방안을 수립해 주시기 바랍니다.',
    author: '기술관리팀', category: '규정', createdAt: '2026-02-05T10:30:00', isPinned: true, viewCount: 189,
  },
  {
    id: 'NTC003', title: '선원 복지 프로그램 개편 안내', content: '2026년부터 선원 복지 프로그램이 다음과 같이 개편됩니다.\n\n1. 승선 수당 5% 인상\n2. 가족 의료보험 지원 확대\n3. 하선 후 재충전 휴가 2일 추가\n\n자세한 사항은 인사팀에 문의 바랍니다.',
    author: '인사팀', category: '인사', createdAt: '2026-02-03T14:00:00', isPinned: false, viewCount: 312,
  },
  {
    id: 'NTC004', title: '선박통합관리시스템 v2.1 업데이트 안내', content: '시스템이 v2.1로 업데이트되었습니다.\n\n주요 변경사항:\n- 실시간 연료 모니터링 정확도 개선\n- 정비 이력 보고서 양식 추가\n- 대시보드 UI 개선\n- 알림 필터링 기능 추가\n\n문의사항은 IT팀으로 연락 바랍니다.',
    author: 'IT관리팀', category: '시스템', createdAt: '2026-02-09T18:00:00', isPinned: false, viewCount: 156,
  },
  {
    id: 'NTC005', title: '2026년 정기 도크 입거 일정', content: '2026년 정기 도크 입거 일정을 안내합니다.\n\n- 백두호: 2026년 5월 (거제조선소)\n- 독도호: 2026년 7월 (울산조선소)\n- 한강호: 2026년 9월 (목포조선소)\n\n해당 선박은 입거 전 사전 점검 목록을 확인해 주시기 바랍니다.',
    author: '기술관리팀', category: '정비', createdAt: '2026-01-25T11:00:00', isPinned: false, viewCount: 198,
  },
  {
    id: 'NTC006', title: '해적 위험 해역 항해 주의', content: '최근 아덴만 및 기니만 해역에서 해적 활동이 증가하고 있습니다.\n\n해당 해역 통과 시 다음 사항을 준수해 주시기 바랍니다:\n1. BMP5 지침 준수\n2. UKMTO 보고 필수\n3. 야간 항해 시 갑판 조명 강화\n4. AIS 송신 유지',
    author: '안전관리팀', category: '안전', createdAt: '2026-02-15T08:00:00', isPinned: true, viewCount: 276,
  },
];
