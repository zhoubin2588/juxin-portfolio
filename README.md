# 聚鑫时代图文广告 - 作品集网站

专业平面设计与制作服务展示网站。

## 技术栈

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4
- React Router 7

## 本地开发

```bash
npm install
npm run dev
```

## 添加作品

1. 将图片放入 `public/works/对应分类/` 目录
2. 运行 `node generate-works.js` 生成索引
3. 重新构建 `npm run build`

## 构建

```bash
npm run build
```

产物输出到 `dist/` 目录，可部署到 Cloudflare Pages 等静态托管平台。