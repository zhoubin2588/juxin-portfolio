import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center" style={{ paddingTop: 64 }}>
      <div className="text-center">
        <p className="mb-4 text-6xl font-serif font-bold text-accent/30">404</p>
        <p className="mb-2 text-lg text-muted">页面不存在</p>
        <p className="mb-6 text-sm text-muted/50">请检查访问地址是否正确</p>
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