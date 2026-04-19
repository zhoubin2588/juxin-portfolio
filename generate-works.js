/**
 * 作品管理脚本
 * 使用方法：
 * 1. 将作品图片放入 public/works/对应分类文件夹
 * 2. 运行：node generate-works.js
 * 3. 重新构建：npm run build
 */
const fs = require('fs');
const path = require('path');

const worksDir = path.join(__dirname, 'public', 'works');
const categories = fs.readdirSync(worksDir).filter(f => {
  return fs.statSync(path.join(worksDir, f)).isDirectory();
});

let totalWorks = 0;

categories.forEach(catId => {
  const catDir = path.join(worksDir, catId);
  const files = fs.readdirSync(catDir).filter(f => 
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  ).sort();

  const works = files.map(f => ({
    src: `/works/${catId}/${f}`,
    alt: f.replace(/\.[^.]+$/, '')
  }));

  fs.writeFileSync(
    path.join(catDir, 'index.json'),
    JSON.stringify(works, null, 2)
  );

  console.log(`[OK] ${catId}: ${works.length} 件作品`);
  totalWorks += works.length;
});

console.log(`\n共 ${totalWorks} 件作品，${categories.length} 个分类`);
