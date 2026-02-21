import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Ship, Navigation, Wrench, Users, Bell, FileText, X, Anchor, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const navItems = [
  { path: '/system-info', label: '시스템 정보', icon: Info },
  { path: '/dashboard', label: '대시보드', icon: LayoutDashboard },
  { path: '/ships', label: '선박관리', icon: Ship },
  { path: '/voyages', label: '운항관리', icon: Navigation },
  { path: '/maintenance', label: '정비관리', icon: Wrench },
  { path: '/crew', label: '선원관리', icon: Users },
  { path: '/alerts', label: '알림', icon: Bell },
  { path: '/notices', label: '공지사항', icon: FileText },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

interface TooltipState {
  label: string;
  top: number;
  left: number;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, collapsed, onToggleCollapse }) => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, label: string) => {
    if (!collapsed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ label, top: rect.top + rect.height / 2, left: rect.right + 10 });
  };

  const handleMouseLeave = () => setTooltip(null);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        bg-navy-900 border-r border-navy-700
        flex flex-col
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${collapsed ? 'w-[64px]' : 'w-[280px]'}
      `}>
        {/* 로고 */}
        <div className={`flex items-center border-b border-navy-700 h-[73px] ${collapsed ? 'justify-center px-0' : 'justify-between px-6'}`}>
          {collapsed ? (
            <div className="bg-maritime-blue p-2 rounded-lg">
              <Anchor className="text-white" size={20} />
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <div className="bg-maritime-blue p-2 rounded-lg">
                  <Anchor className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">선박통합관리</h1>
                  <p className="text-xs text-navy-400">Ship Management System</p>
                </div>
              </div>
              <button onClick={onClose} className="lg:hidden text-navy-400 hover:text-foreground">
                <X size={20} />
              </button>
            </>
          )}
        </div>

        {/* 네비게이션 */}
        <nav className="flex-1 py-4 space-y-1 overflow-y-auto overflow-x-hidden">
          {navItems.map(item => (
            <div
              key={item.path}
              className="mx-2"
              onMouseEnter={(e) => handleMouseEnter(e, item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-150
                  ${collapsed ? 'justify-center' : ''}
                  ${isActive
                    ? 'bg-maritime-blue text-white'
                    : 'text-navy-300 hover:bg-navy-700/50 hover:text-foreground'
                  }`
                }
              >
                <item.icon size={20} className="shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </NavLink>
            </div>
          ))}
        </nav>

        {/* 하단: 접기 버튼 */}
        <div className="p-4 border-t border-navy-700">
          <button
            onClick={onToggleCollapse}
            className={`hidden lg:flex items-center gap-2 w-full text-navy-400 hover:text-foreground transition-colors
              ${collapsed ? 'justify-center' : 'justify-between'}`}
            title={collapsed ? '사이드바 펼치기' : '사이드바 접기'}
          >
            {!collapsed && <span className="text-xs">사이드바 접기</span>}
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
          {!collapsed && (
            <p className="text-xs text-navy-500 text-center mt-2 lg:hidden">v1.0.0</p>
          )}
        </div>
      </aside>

      {/* 툴팁: overflow 클리핑을 피해 body에 포탈로 렌더링 */}
      {collapsed && tooltip && createPortal(
        <div
          className="pointer-events-none fixed z-[9999] px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap bg-navy-700 text-foreground border border-navy-600 shadow-lg"
          style={{ top: tooltip.top, left: tooltip.left, transform: 'translateY(-50%)' }}
        >
          {/* 왼쪽 화살표 */}
          <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-navy-700" />
          {tooltip.label}
        </div>,
        document.body
      )}
    </>
  );
};

export default Sidebar;
