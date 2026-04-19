import NotFound from './NotFound';
import { containerStyle } from '../styles';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, loadWorks, Work } from '../data/works';
import WorkGallery from '../components/WorkGallery';

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    loadWorks(slug).then((data) => {
      setWorks(data);
      setLoading(false);
    });
  }, [slug]);

  if (!category) {
    return <NotFound />;
  }

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
              {!loading && (
                <p className="mt-2 text-xs text-muted/50">
                  共 {works.length} 个作品
                </p>
              )}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent/20 border-t-accent"></div>
            </div>
          )}

          {/* Works Grid */}
          {!loading && <WorkGallery works={works} />}
        </div>
      </section>
    </main>
  );
}