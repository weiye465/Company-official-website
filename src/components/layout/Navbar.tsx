"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const items = useMemo(() => ([
    { href: "#product", label: "产品介绍" },
    { href: "#security", label: "数据安全" },
    { href: "#features", label: "功能特点" },
    { href: "#pricing", label: "价格方案" },
    { href: "#research", label: "客户评价" },
    { href: "#knowledge", label: "常见问题" },
  ]), []);

  // 滚动进度条计算（使用 rAF 降低开销）
  useEffect(() => {
    let ticking = false;

    const computeProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalScrollable = scrollHeight - clientHeight;
      const progress = totalScrollable > 0 ? scrollTop / totalScrollable : 0;
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          computeProgress();
          ticking = false;
        });
      }
    };

    const handleResize = () => {
      computeProgress();
    };

    computeProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener("resize", handleResize as EventListener);
    };
  }, []);
  
  // 关闭移动菜单当点击外部区域 - 优化性能
  useEffect(() => {
    if (!open) return;
    
    const handleClick = () => setOpen(false);
    // 移除setTimeout，减少延迟
    window.addEventListener('click', handleClick);
    
    return () => window.removeEventListener('click', handleClick);
  }, [open]);
  

  return (
    <header 
      className={`w-full fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-black/10 dark:border-white/10 shadow-sm`}
    >
      <div className="relative h-0.5 bg-foreground/5">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--brand)] via-orange-400 to-amber-200"
          style={{ width: `${Math.min(Math.max(scrollProgress, 0), 1) * 100}%` }}
        />
      </div>
      <nav className="relative mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <div className="font-bold tracking-tight">
          <Link href="/" className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-orange-400">慧泽致远</Link>
        </div>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-1 text-[15px] bg-background/50 px-1 py-0.5 rounded-full">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  className="group relative inline-flex items-center px-3.5 py-2 rounded-md text-foreground/90 hover:text-foreground transition underline-offset-[8px] hover:underline decoration-[var(--brand)] decoration-2"
                  href={item.href}
                  data-scrollto
                >
                  <span className="relative z-[1]">{item.label}</span>
                  <span className="sr-only">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="https://www.aishujufenxi.com/" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex rounded-md bg-gradient-to-r from-[var(--brand)] to-orange-400 text-background px-4 py-2 text-sm hover:opacity-95 transition shadow-md hover:shadow-lg">开始使用</a>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground/15 bg-background"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
          >
            <span className="h-3.5 w-3.5 relative">
              <span className={`absolute inset-x-0 top-0 h-0.5 rounded bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 top-1.5 h-0.5 rounded bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute inset-x-0 top-3 h-0.5 rounded bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      </nav>
      <div
        className={`md:hidden overflow-hidden border-t border-foreground/10 bg-background ${open ? 'block' : 'hidden'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto max-w-7xl px-4 py-3">
          <ul className="flex flex-col gap-1 py-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-scrollto
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-md px-3.5 py-2.5 text-[15px] text-foreground/90 hover:text-foreground transition underline-offset-[6px] hover:underline decoration-[var(--brand)] decoration-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="https://www.aishujufenxi.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block w-full text-center rounded-md bg-gradient-to-r from-[var(--brand)] to-orange-400 text-background px-4 py-2.5 text-sm hover:opacity-95 transition shadow-md hover:shadow-lg">开始使用</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
