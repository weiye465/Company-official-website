"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroINS() {
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });

  useEffect(() => {
    if (!imgRef.current) return;
    const el = imgRef.current;
    const tween = gsap.fromTo(el, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", onComplete: () => { gsap.set(el, { clearProps: "all" }); } });
    return () => { if (tween) tween.kill(); gsap.set(el, { clearProps: "all" }); };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 brand-gradient opacity-25 pointer-events-none" />
      <div aria-hidden className="absolute -inset-[15%] bg-[radial-gradient(70%_70%_at_50%_0%,rgba(255,121,0,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-x-0 top-[-10%] h-[600px] opacity-40 blur-3xl bg-gradient-to-b from-foreground/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:pt-20 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 lg:col-span-5">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-[46px] sm:text-[68px] lg:text-[76px] font-extrabold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-orange-400 to-amber-300"
            >
              深圳市慧泽致远人工智能科技有限公司
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-[15px] sm:text-lg text-foreground/80 max-w-xl"
            >
              面向中大型团队的 AI 数据门户：统一接入、多源联动、自动洞察与高可用交付，兼顾美学与性能。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-3 items-center"
            >
              <motion.a
                ref={btnRef}
                href="https://www.aishujufenxi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-background shadow-sm bg-gradient-to-r from-[var(--brand)] to-orange-400 hover:opacity-95 transition"
                style={{ x: sx, y: sy }}
                onMouseMove={(e) => {
                  if (!btnRef.current) return;
                  const rect = btnRef.current.getBoundingClientRect();
                  mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.05);
                  my.set((e.clientY - (rect.top + (rect.height / 2)) ) * 0.05);
                }}
                onMouseLeave={() => { mx.set(0); my.set(0); }}
              >
                立即体验产品
              </motion.a>
              <a
                href="#integrations"
                className="group relative inline-flex items-center rounded-md border border-foreground/15 bg-background/60 backdrop-blur px-6 py-3 text-sm text-foreground hover:border-foreground/30 transition"
              >
                <span className="relative">产品功能</span>
                <span className="ml-2 h-4 w-4 rounded-full bg-gradient-to-r from-[var(--brand)] to-orange-400 opacity-60 group-hover:opacity-100 transition" />
              </a>
            </motion.div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-foreground/60">
              <span className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-background/70 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--brand)] to-orange-400" />
                企业级权限
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-background/70 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--brand)] to-orange-400" />
                多源接入
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-background/70 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--brand)] to-orange-400" />
                自动洞察
              </span>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7 relative">
            <div className="absolute -inset-6 sm:-inset-8 rounded-[28px] bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,121,0,0.10),transparent_60%)] opacity-60" />
            <motion.img
              ref={imgRef}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
              alt="AI neural grid"
              className="relative w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover rounded-[24px] border border-foreground/10 shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-foreground/10" />

          </div>
        </div>
      </div>
    </section>
  );
}
