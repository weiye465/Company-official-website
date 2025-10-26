"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform, easeOut } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  
  // Mouse movement effects for button
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 250, damping: 25 });
  const sy = useSpring(my, { stiffness: 250, damping: 25 });
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  // GSAP animation for image reveal
  useEffect(() => {
    if (!imgRef.current) return;
    const el = imgRef.current;
    
    const tl = gsap.timeline({delay: 0.5}); // 延迟显示，确保在导航栏之后
    tl.fromTo(
      el, 
      { y: 30, opacity: 0, scale: 0.95 }, 
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
    
    return () => {
      tl.kill();
      gsap.set(el, { clearProps: "all" });
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 brand-gradient opacity-20 pointer-events-none" />
      <div aria-hidden className="absolute -inset-[15%] bg-[radial-gradient(70%_70%_at_50%_0%,rgba(255,121,0,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute inset-x-0 top-[-10%] h-[600px] opacity-40 blur-3xl bg-gradient-to-b from-foreground/10 to-transparent" />
      {/* 底部渐变过渡效果 */}
      <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      
      {/* Animated particles */}
      <Particles />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              className="text-[36px] sm:text-[48px] lg:text-[48px] font-extrabold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-orange-400 to-amber-300"
            >
              深圳市慧泽致远人工智能科技有限公司
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
              className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-xl"
            >
              以AI为核心的数据分析产品，专注AI+数据分析领域企业级需求。
              让AI技术真正能够解决客户的问题 提升企业内部效率 帮助企业获得成功。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <motion.a
                ref={btnRef}
                href="https://www.aishujufenxi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-background shadow-lg bg-gradient-to-r from-[var(--brand)] to-orange-400 hover:shadow-orange-500/20 transition-shadow duration-300"
                style={{ x: sx, y: sy }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseMove={(e) => {
                  if (!btnRef.current) return;
                  const rect = btnRef.current.getBoundingClientRect();
                  mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.1);
                  my.set((e.clientY - (rect.top + (rect.height / 2)) ) * 0.1);
                }}
                onMouseLeave={() => { mx.set(0); my.set(0); }}
              >
                立即体验产品
              </motion.a>
              
              <motion.a
                href="#pricing"
                className="group relative inline-flex items-center rounded-md border border-foreground/15 bg-background/60 backdrop-blur px-6 py-3 text-base text-foreground hover:border-foreground/30 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative">价格方案</span>
                <span className="ml-2 h-4 w-4 rounded-full bg-gradient-to-r from-[var(--brand)] to-orange-400 opacity-60 group-hover:opacity-100 transition" />
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: easeOut }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-foreground/60"
            >
              {["企业级权限", "多源接入", "自动洞察"].map((tag, i) => (
                <span 
                  key={tag} 
                  className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/70 px-3 py-1.5 hover:border-foreground/20 transition-all duration-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--brand)] to-orange-400" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-6 lg:col-span-7 relative">
            <motion.div 
              className="absolute -inset-6 sm:-inset-10 rounded-[28px] bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,121,0,0.15),transparent_60%)] opacity-70"
              style={{ y }}
            />
            
            <motion.div
              className="relative overflow-hidden rounded-[24px]"
              style={{ opacity }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img
                ref={imgRef}
                src="/bg/hero-img.jpg"
                alt="AI数据分析平台"
                className="w-full object-cover"
              />
              {/* 去除任何边框或阴影 */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Animated particles component
function Particles() {
  // 使用固定的粒子位置和动画参数，避免服务端和客户端渲染不一致
  const particles = [
    { x: 10, y: 20, scale: 0.7, duration: 25, targetX: 80, targetY: 60 },
    { x: 80, y: 15, scale: 0.6, duration: 30, targetX: 20, targetY: 70 },
    { x: 30, y: 50, scale: 0.8, duration: 28, targetX: 70, targetY: 30 },
    { x: 60, y: 80, scale: 0.5, duration: 22, targetX: 40, targetY: 20 },
    { x: 20, y: 90, scale: 0.7, duration: 26, targetX: 90, targetY: 40 },
    { x: 90, y: 30, scale: 0.6, duration: 24, targetX: 10, targetY: 80 },
    { x: 40, y: 60, scale: 0.9, duration: 32, targetX: 60, targetY: 10 },
    { x: 70, y: 40, scale: 0.7, duration: 27, targetX: 30, targetY: 90 },
    { x: 15, y: 75, scale: 0.8, duration: 29, targetX: 85, targetY: 25 },
    { x: 85, y: 35, scale: 0.6, duration: 23, targetX: 15, targetY: 65 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[var(--brand)]/40"
          style={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            scale: particle.scale
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.targetX}%`],
            y: [`${particle.y}%`, `${particle.targetY}%`],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
}