import { containerStyle } from '../styles';
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-bg/80">
      <div className="flex items-center justify-between px-6 py-8" style={containerStyle}>
        <p className="text-sm text-muted/60">
          &copy; {year} 聚鑫时代图文广告
        </p>
        <p className="text-xs text-muted/40">
          384483.xyz
        </p>
      </div>
    </footer>
  );
}