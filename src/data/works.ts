export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Work {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const categories: Category[] = [
  { slug: 'mentou', name: '门头', description: '店铺门头招牌设计与制作' },
  { slug: 'haibao', name: '海报', description: '活动海报、宣传海报设计' },
  { slug: 'baozhuang', name: '包装', description: '产品包装设计与印刷' },
  { slug: 'huace', name: '画册', description: '企业画册、宣传册设计' },
  { slug: 'buganqiao', name: '不干胶速印', description: '不干胶标签、贴纸设计制作' },
  { slug: 'wenbianji', name: '文本编辑', description: '文档排版、文本编辑整理' },
  { slug: 'dayin', name: '打字复印', description: '打字、复印、扫描服务' },
  { slug: 'loukongzi', name: '镂空字设计制作', description: '发光字、镂空字设计安装' },
  { slug: 'taijin', name: '钛金厂牌', description: '钛金牌、厂牌制作安装' },
  { slug: 'guanggao', name: '各种广告', description: '广告灯箱、展架等广告物料' },
];

interface WorkItem {
  src: string;
  alt: string;
}

const validSlugs = new Set(categories.map(c => c.slug));

/**
 * 从 public/works/{slug}/index.json 动态加载作品数据
 */
export async function loadWorks(slug: string): Promise<Work[]> {
  if (!validSlugs.has(slug)) return [];
  try {
    const response = await fetch(`/works/${slug}/index.json`);
    if (!response.ok) return [];
    const items: WorkItem[] = await response.json();
    return items.map((item, index) => ({
      id: `${slug}-${index}`,
      title: item.alt || `作品 ${index + 1}`,
      category: slug,
      image: item.src,
    }));
  } catch {
    return [];
  }
}
