# 선박통합관리시스템

> Ship Integrated Management System

[![Demo](https://img.shields.io/badge/🚢_Live_Demo-배포화면_보기-0077b6?style=for-the-badge)](https://heralife.github.io/ship-management-system)
[![GitHub](https://img.shields.io/badge/GitHub-소스코드-181717?style=for-the-badge&logo=github)](https://github.com/heralife/ship-management-system)

React 19 + TypeScript + Tailwind CSS 기반의 선박통합관리 웹 애플리케이션입니다.

## 화면 미리보기

| 대시보드 | 선박관리 |
|---|---|
| ![대시보드](screenshots/01_dashboard.png) | ![선박관리](screenshots/02_ships.png) |

| 운항관리 | 정비관리 |
|---|---|
| ![운항관리](screenshots/03_voyages.png) | ![정비관리](screenshots/04_maintenance.png) |

---

## 주요 기능

- **대시보드** — KPI 카드, 함대 현황 차트, 실시간 알림
- **선박관리** — 선박 목록, 상세 정보, 신규 등록
- **운항관리** — 운항 목록, 상세 조회, 운항 일정
- **정비관리** — 정비 이력, 상세 조회, 작업 지시
- **선원관리** — 선원 목록, 상세 정보, 배정 관리
- **알림 / 공지사항**

## 기술 스택

| 항목 | 버전 | 용도 |
|------|------|------|
| React | 19 | UI 프레임워크 (Create React App) |
| TypeScript | CRA 기본 | 정적 타입 |
| Tailwind CSS | v3 | 스타일링 (커스텀 navy/maritime 팔레트) |
| react-router-dom | v7 | 라우팅 (16개 라우트) |
| recharts | v3 | 차트 / 데이터 시각화 |
| lucide-react | latest | 아이콘 |
| date-fns | latest | 날짜 포맷 (한국어 로케일) |

## 디자인 컨셉

| 항목 | 값 |
|------|------|
| 배경 | 다크 네이비 `#0a1929` |
| 액센트 | 해양 블루 `#0077b6` |
| 폰트 | Pretendard (한국어) |
| 사이드바 | 고정 280px / 접기 64px / 모바일 드로어 |
| 레이아웃 | 카드 기반, 반응형 |

## 폴더 구조

```
src/
├── types/          # 타입 정의 (ship, voyage, maintenance, crew, alert, dashboard)
├── data/           # Mock 데이터
├── utils/          # format.ts, constants.ts
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
│   ├── Alert/      # AlertListPage, NoticeListPage
│   └── System/     # SystemInfoPage
└── routes/         # AppRoutes.tsx
```

## 코딩 컨벤션

- **컴포넌트**: `React.FC` 타입, 함수형 컴포넌트
- **CSS**: Tailwind 유틸리티 클래스, `index.css`의 `@layer components`에 공통 클래스 정의
- **데이터**: `src/data/`에서 Mock 데이터 import
- **라우팅**: react-router-dom의 `NavLink`, `Link`, `useParams` 사용
- **아이콘**: lucide-react에서 import
- **한국어 UI**: 모든 라벨, 상태값, 메뉴 한국어 사용

## 개발 실행

```bash
npm install
npm start       # 개발 서버 (localhost:3000)
npm run build   # 프로덕션 빌드
npm test        # 테스트
```

## ⚠️ 저작권 안내

**Copyright (c) 2026 heralife. All Rights Reserved.**

본 소프트웨어는 저작권법의 보호를 받습니다.
저작권자의 사전 서면 동의 없이 무단 복제, 배포, 수정, 상업적 이용을 금지합니다.
자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요.
