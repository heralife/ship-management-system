import React from 'react';
import { Info, Layers, Package, Palette, FolderOpen, Terminal } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const Section: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="card">
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-navy-700">
      <span className="text-maritime-blue">{icon}</span>
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
    </div>
    {children}
  </div>
);

const Row: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="flex items-start justify-between py-2 border-b border-navy-800 last:border-0">
    <span className="text-sm text-navy-400 w-36 shrink-0">{label}</span>
    <span className="text-sm text-foreground text-right">{value}</span>
  </div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-maritime-blue/20 text-maritime-blue text-xs font-mono px-2 py-0.5 rounded">
    {children}
  </span>
);

const SystemInfoPage: React.FC = () => {
  return (
    <div className="page-container">
      <PageHeader
        title="시스템 정보"
        subtitle="선박통합관리시스템 기술 스펙 및 구성 정보"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* 프로젝트 개요 */}
        <Section icon={<Info size={18} />} title="프로젝트 개요">
          <Row label="시스템명" value="선박통합관리시스템" />
          <Row label="영문명" value="Ship Management System" />
          <Row label="버전" value={<Badge>v1.0.0</Badge>} />
          <Row label="데이터 방식" value="Mock 데이터 (프론트엔드 전용)" />
          <Row label="언어" value="한국어 UI" />
        </Section>

        {/* 기술 스택 */}
        <Section icon={<Layers size={18} />} title="기술 스택">
          <Row label="프레임워크" value={<Badge>React 19</Badge>} />
          <Row label="언어" value={<Badge>TypeScript</Badge>} />
          <Row label="스타일" value={<Badge>Tailwind CSS v3</Badge>} />
          <Row label="라우팅" value={<Badge>react-router-dom v7</Badge>} />
          <Row label="차트" value={<Badge>recharts v3</Badge>} />
          <Row label="아이콘" value={<Badge>lucide-react</Badge>} />
          <Row label="날짜" value={<Badge>date-fns (한국어)</Badge>} />
          <Row label="빌드" value={<Badge>Create React App</Badge>} />
        </Section>

        {/* 디자인 시스템 */}
        <Section icon={<Palette size={18} />} title="디자인 시스템">
          <Row label="배경색" value={
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded border border-navy-600" style={{ backgroundColor: '#0a1929' }} />
              <Badge>#0a1929</Badge>
            </span>
          } />
          <Row label="액센트" value={
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded" style={{ backgroundColor: '#0077b6' }} />
              <Badge>#0077b6</Badge>
            </span>
          } />
          <Row label="폰트" value="Pretendard (한국어)" />
          <Row label="사이드바" value="고정 280px / 모바일 드로어" />
          <Row label="레이아웃" value="카드 기반, 반응형" />
        </Section>

        {/* 라이브러리 */}
        <Section icon={<Package size={18} />} title="설치 패키지">
          <Row label="react" value={<Badge>^19.0.0</Badge>} />
          <Row label="react-router-dom" value={<Badge>^7.0.0</Badge>} />
          <Row label="recharts" value={<Badge>^3.0.0</Badge>} />
          <Row label="lucide-react" value={<Badge>latest</Badge>} />
          <Row label="date-fns" value={<Badge>latest</Badge>} />
          <Row label="tailwindcss" value={<Badge>^3.0.0</Badge>} />
        </Section>

        {/* 폴더 구조 */}
        <Section icon={<FolderOpen size={18} />} title="폴더 구조">
          {[
            { path: 'src/types/', desc: '타입 정의 (6개)' },
            { path: 'src/data/', desc: 'Mock 데이터 (6개)' },
            { path: 'src/utils/', desc: 'format.ts, constants.ts' },
            { path: 'src/hooks/', desc: 'useSearch, usePagination' },
            { path: 'src/components/layout/', desc: 'Layout, Sidebar, Header, Breadcrumb' },
            { path: 'src/components/common/', desc: '공통 컴포넌트 (6개)' },
            { path: 'src/components/charts/', desc: '차트 컴포넌트 (4개)' },
            { path: 'src/pages/', desc: '페이지 컴포넌트 (13개)' },
            { path: 'src/routes/', desc: 'AppRoutes.tsx' },
          ].map(item => (
            <div key={item.path} className="flex items-start justify-between py-2 border-b border-navy-800 last:border-0">
              <code className="text-xs text-maritime-blue font-mono">{item.path}</code>
              <span className="text-xs text-navy-400 text-right">{item.desc}</span>
            </div>
          ))}
        </Section>

        {/* 라우트 */}
        <Section icon={<Terminal size={18} />} title="라우트 구성 (16개)">
          {[
            { path: '/', desc: '→ /dashboard 리다이렉트' },
            { path: '/dashboard', desc: '대시보드' },
            { path: '/ships', desc: '선박 목록' },
            { path: '/ships/register', desc: '선박 등록' },
            { path: '/ships/:id', desc: '선박 상세' },
            { path: '/voyages', desc: '운항 목록' },
            { path: '/voyages/schedule', desc: '운항 일정' },
            { path: '/voyages/:id', desc: '운항 상세' },
            { path: '/maintenance', desc: '정비 목록' },
            { path: '/maintenance/work-order', desc: '작업 지시' },
            { path: '/maintenance/:id', desc: '정비 상세' },
            { path: '/crew', desc: '선원 목록' },
            { path: '/crew/assignment', desc: '선원 배정' },
            { path: '/crew/:id', desc: '선원 상세' },
            { path: '/alerts', desc: '알림' },
            { path: '/notices', desc: '공지사항' },
          ].map(item => (
            <div key={item.path} className="flex items-start justify-between py-2 border-b border-navy-800 last:border-0">
              <code className="text-xs text-maritime-blue font-mono">{item.path}</code>
              <span className="text-xs text-navy-400">{item.desc}</span>
            </div>
          ))}
        </Section>

      </div>

      {/* 개발 명령어 */}
      <div className="card mt-6">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-navy-700">
          <span className="text-maritime-blue"><Terminal size={18} /></span>
          <h2 className="text-base font-semibold text-foreground">개발 명령어</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            { cmd: 'npm start', desc: '개발 서버 실행' },
            { cmd: 'npm run build', desc: '프로덕션 빌드' },
            { cmd: 'npm test', desc: '테스트 실행' },
          ].map(item => (
            <div key={item.cmd} className="bg-navy-900 rounded-lg px-4 py-3 flex items-center gap-3">
              <code className="text-maritime-blue font-mono text-sm">{item.cmd}</code>
              <span className="text-navy-400 text-xs">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemInfoPage;
