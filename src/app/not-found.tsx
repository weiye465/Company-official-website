import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-orange-400">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">页面未找到</h2>
      <p className="mt-2 text-foreground/70">您访问的页面不存在或已被移除</p>
      <Link 
        href="/" 
        className="mt-8 px-6 py-3 rounded-md bg-gradient-to-r from-[var(--brand)] to-orange-400 text-white font-medium hover:opacity-90 transition-opacity"
      >
        返回首页
      </Link>
    </div>
  );
}