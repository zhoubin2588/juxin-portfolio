export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export interface Work {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const categories: Category[] = [
  { slug: 'mentou', name: '门头', icon: 'storefront', description: '店铺门头招牌设计与制作' },
  { slug: 'haibao', name: '海报', icon: 'image', description: '活动海报、宣传海报设计' },
  { slug: 'baozhuang', name: '包装', icon: 'inventory_2', description: '产品包装设计与印刷' },
  { slug: 'huace', name: '画册', icon: 'menu_book', description: '企业画册、宣传册设计' },
  { slug: 'buganqiao', name: '不干胶速印', icon: 'label', description: '不干胶标签、贴纸设计制作' },
  { slug: 'wenbianji', name: '文本编辑', icon: 'edit_note', description: '文档排版、文本编辑整理' },
  { slug: 'dayin', name: '打字复印', icon: 'print', description: '打字、复印、扫描服务' },
  { slug: 'loukongzi', name: '镂空字设计制作', icon: 'text_fields', description: '发光字、镂空字设计安装' },
  { slug: 'taijin', name: '钛金厂牌', icon: 'badge', description: '钛金牌、厂牌制作安装' },
  { slug: 'guanggao', name: '各种广告', icon: 'campaign', description: '广告灯箱、展架等广告物料' },
];

export const works: Work[] = [];