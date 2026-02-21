import React from 'react';
import { Menu, Bell, User, Sun, Moon, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { ROUTE_LABELS } from '../../utils/constants';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  onMenuClick: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, collapsed, onToggleCollapse }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentLabel = ROUTE_LABELS[pathSegments[0]] || '대시보드';

  return (
    <header className="sticky top-0 z-30 bg-navy-900/80 backdrop-blur-md border-b border-navy-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* 모바일: 드로어 열기 */}
          <button onClick={onMenuClick} className="lg:hidden text-navy-300 hover:text-foreground">
            <Menu size={24} />
          </button>
          {/* 데스크탑: 사이드바 접기/펼치기 */}
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex text-navy-300 hover:text-foreground p-1 rounded transition-colors"
            title={collapsed ? '사이드바 펼치기' : '사이드바 접기'}
          >
            {collapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
          </button>
          <h2 className="text-lg font-semibold text-foreground">{currentLabel}</h2>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-navy-300 hover:text-foreground p-2 rounded-lg hover:bg-navy-700/20 transition-colors">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="relative text-navy-300 hover:text-foreground p-2">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-maritime-blue rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="text-sm text-navy-200 hidden sm:inline">관리자</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
