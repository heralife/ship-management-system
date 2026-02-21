import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { ROUTE_LABELS } from '../../utils/constants';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length <= 1) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-navy-400 mb-4">
      <Link to="/dashboard" className="hover:text-foreground">
        <Home size={14} />
      </Link>
      {pathSegments.map((segment, idx) => {
        const path = '/' + pathSegments.slice(0, idx + 1).join('/');
        const label = ROUTE_LABELS[segment] || segment;
        const isLast = idx === pathSegments.length - 1;

        return (
          <React.Fragment key={path}>
            <ChevronRight size={14} />
            {isLast ? (
              <span className="text-navy-200">{label}</span>
            ) : (
              <Link to={path} className="hover:text-foreground">{label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
