# 선박통합관리시스템 (Ship Management System)

## 프로젝트 개요
React + TypeScript + Tailwind CSS 기반 선박통합관리시스템 웹 애플리케이션.
프론트엔드 전용(Mock 데이터 기반), 해양 테마 다크 네이비 UI.

## 기술 스택
- **React 19** (Create React App, TypeScript 템플릿)
- **Tailwind CSS v3** (CRA 호환, 커스텀 navy/maritime 색상 팔레트)
- **react-router-dom v7** (라우팅, 16개 라우트)
- **recharts v3** (차트/시각화)
- **lucide-react** (아이콘)
- **date-fns** (날짜 포맷, 한국어 로케일)

## 디자인 컨셉
- 배경: 다크 네이비 (#0a1929)
- 액센트: 해양 블루 (#0077b6)
- 사이드바: 고정 280px, 모바일 드로어
- 폰트: Pretendard (한국어)
- 카드 기반 레이아웃, 반응형 지원

## 폴더 구조
```
src/
├── types/          # 타입 정의 (ship, voyage, maintenance, crew, alert, dashboard)
├── data/           # Mock 데이터
├── utils/          # format.ts (날짜/숫자 포맷), constants.ts
├── hooks/          # useSearch, usePagination
├── components/
│   ├── layout/     # Layout, Sidebar, Header, Breadcrumb
│   ├── common/     # KPICard, StatusBadge, DataTable, SearchInput, PageHeader, TabGroup, Pagination
│   └── charts/     # FleetStatusChart, VoyageTimelineChart, MaintenanceTrendChart, FuelConsumptionChart
├── pages/
│   ├── Dashboard/  # DashboardPage
│   ├── Ship/       # ShipListPage, ShipDetailPage, ShipRegisterPage
│   ├── Voyage/     # VoyageListPage, VoyageDetailPage, VoyageSchedulePage
│   ├── Maintenance/# MaintenanceListPage, MaintenanceDetailPage, WorkOrderPage
│   ├── Crew/       # CrewListPage, CrewDetailPage, CrewAssignmentPage
│   └── Alert/      # AlertListPage, NoticeListPage
├── routes/         # AppRoutes.tsx
├── App.tsx
├── index.tsx
└── index.css       # Tailwind 디렉티브 + 공통 컴포넌트 클래스
```

## 코딩 컨벤션
- 컴포넌트: React.FC 타입, 함수형 컴포넌트
- CSS: Tailwind 유틸리티 클래스 사용, index.css의 @layer components에 공통 클래스 정의
- 데이터: src/data/에서 Mock 데이터 import
- 라우팅: react-router-dom의 NavLink, Link, useParams 사용
- 아이콘: lucide-react에서 import
- 한국어 UI: 모든 라벨, 상태값, 메뉴 등 한국어 사용

## 명령어
- `npm start` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm test` - 테스트 실행
