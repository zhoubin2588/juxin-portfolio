import { containerStyle } from '../styles';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6" style={containerStyle}>
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-accent/10 text-sm font-bold text-accent transition-colors group-hover:bg-accent/20">
            JX
          </div>
          <span className={`font-serif text-lg font-semibold tracking-wide transition-colors ${isHome ? 'text-fg' : 'text-fg/80 hover:text-fg'}`}>
            聚鑫时代图文广告
          </span>
        </Link>

        {!isHome && (
          <Link
            to="/"
            className="flex items-center gap-2 rounded px-3 py-1.5 text-sm text-muted transition-colors hover:bg-card hover:text-fg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            返回首页
          </Link>
        )}
      </div>
    </header>
  );
}