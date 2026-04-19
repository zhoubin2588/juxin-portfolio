import { useState } from 'react';
import { Work } from '../data/works';
import Lightbox from './Lightbox';

interface WorkGalleryProps {
  works: Work[];
}

export default function WorkGallery({ works }: WorkGalleryProps) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  if (works.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border/60 bg-card/30 py-20">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-muted/30">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <p className="text-sm text-muted/50">该分类暂无作品</p>
        <p className="mt-1 text-xs text-muted/30">作品将持续更新</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => (
          <button
            key={work.id}
            onClick={() => setSelectedWork(work)}
            className={`fade-in stagger-${Math.min(index % 5 + 1, 5)} group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg border border-border/30 bg-card/50 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5`}
          >
            <img
              src={work.image}
              alt={work.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-fg">{work.title}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedWork && (
        <Lightbox
          image={selectedWork.image}
          title={selectedWork.title}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </>
  );
}