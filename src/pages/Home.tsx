import { staggerClasses, containerStyle } from '../styles';
import { Link } from 'react-router-dom';
import { categories } from '../data/works';
import CategoryIcons from '../data/categoryIcons';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden px-6"
        style={{ paddingTop: 128, paddingBottom: 48 }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/3 blur-3xl"></div>
        </div>
        <div className="relative text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
          <p className="fade-in mb-6 text-xs tracking-widest text-accent/70">
            专业设计 · 精准制作 · 一站式服务
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
              {categories.length}大服务分类
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
                className={`fade-in ${staggerClasses[i % 5]} group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/5`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <CategoryIcons index={i} />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-fg transition-colors group-hover:text-accent">
                  {cat.name}
                </h3>
                <p className="line-clamp-2 text-xs leading-relaxed text-muted">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}