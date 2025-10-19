"use client";

import { useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// 注册GSAP插件
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function AnimationProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === "undefined") return;
    
    // 完全移除平滑滚动效果，避免延迟
    // 注释掉平滑滚动创建代码，使用浏览器原生滚动
    /*
    const smoother = ScrollSmoother.create({
      smooth: 0.5,
      effects: true, 
      normalizeScroll: false,
      ignoreMobileResize: true,
      speed: 0.8,
    });
    */

    // 创建滚动触发动画
    const setupScrollAnimations = () => {
      const tweens: gsap.core.Tween[] = [];
      const triggers: ScrollTrigger[] = [];

      // 渐入动画元素 - 优化性能
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      reveals.forEach((el) => {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 90%", // 提前触发
          once: true,
        });
        
        triggers.push(st);
        
        const t = gsap.fromTo(
          el,
          { y: 15, opacity: 0 }, // 减少移动距离
          {
            y: 0,
            opacity: 1,
            duration: 0.5, // 进一步减少动画时间
            ease: "power1.out", // 使用更简单的缓动函数
            immediateRender: false,
            scrollTrigger: st,
          }
        );
        
        tweens.push(t);
      });

      // 视差滚动元素 - 进一步优化性能
      const parallax = gsap.utils.toArray<HTMLElement>("[data-parallax]");
      parallax.forEach((el, i) => {
        // 进一步减少视差效果的强度
        const speed = el.getAttribute("data-parallax-speed") || (i % 2 ? "-5" : "-3");
        
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3, // 减少阻尼，使动画更流畅
        });
        
        triggers.push(st);
        
        const t = gsap.to(el, {
          yPercent: speed,
          ease: "none",
          scrollTrigger: st,
        });
        
        tweens.push(t);
      });

      // 水平滚动元素 - 优化性能
      const horizontalSections = gsap.utils.toArray<HTMLElement>("[data-horizontal-scroll]");
      horizontalSections.forEach((section) => {
        const items = section.querySelectorAll("[data-horizontal-item]");
        if (items.length === 0) return;
        
        const st = ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 0.3, // 减少阻尼，使动画更流畅
        });
        
        triggers.push(st);
        
        const t = gsap.to(items, {
          xPercent: -100 * (items.length - 1),
          ease: "power1.inOut", // 使用更流畅的缓动函数
          scrollTrigger: st,
        });
        
        tweens.push(t);
      });

      // 缩放效果 - 优化性能
      const zoomElements = gsap.utils.toArray<HTMLElement>("[data-zoom]");
      zoomElements.forEach((el) => {
        const direction = el.getAttribute("data-zoom") || "in";
        const startScale = direction === "in" ? 0.9 : 1.1; // 减小缩放幅度
        const endScale = 1;
        
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 90%", // 提前触发
          end: "center 60%", // 缩短动画区间
          scrub: 0.3, // 减少阻尼，使动画更流畅
        });
        
        triggers.push(st);
        
        const t = gsap.fromTo(
          el,
          { scale: startScale },
          { scale: endScale, ease: "power1.out", scrollTrigger: st } // 使用更简单的缓动函数
        );
        
        tweens.push(t);
      });

      // 移除平滑滚动到锚点的功能，避免与SmoothScroll组件冲突

      return () => {
        tweens.forEach((t) => t.kill());
        triggers.forEach((st) => st.kill());
      };
    };

    // 设置动画
    const cleanup = setupScrollAnimations();

    return () => {
      cleanup();
      // 移除smoother.kill()调用，因为smoother对象已被注释掉
    };
  }, []);

  return <>{children}</>;
}