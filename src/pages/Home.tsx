import { Link } from 'react-router-dom';
import { categories } from '../data/works';

const containerStyle: React.CSSProperties = { maxWidth: 1280, margin: '0 auto' };

const heroIcons = [
  <svg key="mentou" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>,
  <svg key="haibao" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  <svg key="baozhuang" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
  <svg key="huace" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
  <svg key="buganqiao" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  <svg key="wenbianji" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>,
  <svg key="dayin" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>,
  <svg key="loukongzi" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="m6 16 6-12 6 12"/><path d="M8 12h8"/></svg>,
  <svg key="taijin" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
  <svg key="guanggao" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="m7 8 3 3-3 3"/><path d="M13 13h4"/></svg>,
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden px-6"
        style={{ paddingTop: 128, paddingBottom: 48 }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
        </div>
        <div className="relative text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
          <p className="fade-in text-xs tracking-widest text-accent/70 mb-6 uppercase">
            Professional Design Studio
          </p>
          <h1 className="fade-in stagger-1 font-serif text-5xl font-bold leading-tight text-fg md:text-7xl">
            聚鑫时代
            <br />
            <span className="text-accent">图文广告</span>
          </h1>
          <p className="fade-in stagger-2 mt-6 text-base leading-relaxed text-muted md:text-lg">
            专业平面设计与制作服务，从创意设计到成品交付，为您提供一站式广告解决方案
          </p>
          <div className="fade-in stagger-3 mt-8 flex items-center justify-center gap-4 text-xs text-muted/60">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-px w-8 bg-accent/30"></span>
              10大服务分类
            </span>
            <span className="text-accent/30">|</span>
            <span className="flex items-center gap-1.5">
              专业品质保障
              <span className="inline-block h-px w-8 bg-accent/30"></span>
            </span>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 py-16 md:py-20">
        <div style={containerStyle}>
          <h2 className="fade-in mb-10 text-center font-serif text-2xl font-bold text-fg md:text-3xl">
            服务分类
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="fade-in group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  {heroIcons[i]}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-fg transition-colors group-hover:text-accent">
                  {cat.name}
                </h3>
                <p className="text-xs leading-relaxed text-muted line-clamp-2">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 px-6 py-6">
        <div className="flex items-center justify-between text-xs text-muted" style={containerStyle}>
          <span>&copy; 2026 聚鑫时代图文广告</span>
          <span className="text-muted/50">384483.xyz</span>
        </div>
      </footer>
    </main>
  );
}