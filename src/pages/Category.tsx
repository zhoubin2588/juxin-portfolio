import { useParams, Link } from 'react-router-dom';
import { categories, works } from '../data/works';
import WorkGallery from '../components/WorkGallery';

const containerStyle: React.CSSProperties = { maxWidth: 1280, margin: '0 auto' };

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <main className="flex min-h-screen items-center justify-center" style={{ paddingTop: 64 }}>
        <div className="text-center">
          <p className="mb-4 text-6xl font-serif font-bold text-accent/30">404</p>
          <p className="mb-6 text-muted">分类不存在</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/30 px-5 py-2.5 text-sm text-accent transition-colors hover:bg-accent/10"
          >
            返回首页
          </Link>
        </div>
      </main>
    );
  }

  const categoryWorks = works.filter((w) => w.category === slug);

  return (
    <main className="min-h-screen">
      <section className="px-6" style={{ paddingTop: 96, paddingBottom: 64 }}>
        <div style={containerStyle}>
          {/* Breadcrumb */}
          <nav className="fade-in mb-8 flex items-center gap-2 text-sm text-muted">
            <Link to="/" className="transition-colors hover:text-fg">
              首页
            </Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-fg">{category.name}</span>
          </nav>

          {/* Category Header */}
          <div className="fade-in stagger-1 mb-10 flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <span className="text-2xl font-serif font-bold text-accent">
                {category.name[0]}
              </span>
            </div>
            <div>
              <h1 className="mb-1 font-serif text-3xl font-bold text-fg md:text-4xl">
                {category.name}
              </h1>
              <p className="text-sm text-muted">{category.description}</p>
              <p className="mt-2 text-xs text-muted/50">
                共 {categoryWorks.length} 个作品
              </p>
            </div>
          </div>

          {/* Works Grid */}
          <WorkGallery works={categoryWorks} />
        </div>
      </section>
    </main>
  );
}