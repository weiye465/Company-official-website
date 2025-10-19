"use client";

import { useEffect } from "react";
// 移除GSAP导入，使用浏览器原生滚动

export default function SmoothScroll() {
  useEffect(() => {
    // 预先获取所有带有data-scrollto属性的链接，减少点击时的DOM查询
    const scrollLinks = document.querySelectorAll("a[data-scrollto]");
    
    // 为每个链接添加点击事件，而不是在整个文档上监听
    const clickHandlers: { element: Element; handler: (e: Event) => void }[] = [];
    
    scrollLinks.forEach(link => {
      const handler = (e: Event) => {
        e.preventDefault();
        const href = (link as HTMLAnchorElement).getAttribute("href") || "";
        if (!href.startsWith("#")) return;
        
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return;
        
        // 考虑导航栏高度的偏移
        const navbarHeight = 64;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        // 使用浏览器原生scrollTo方法，平滑滚动到目标位置（已考虑导航栏高度）
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      };
      
      link.addEventListener("click", handler);
      clickHandlers.push({ element: link, handler });
    });
    
    // 清理函数，移除所有事件监听器
    return () => {
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
    };
  }, []);

  return null;
}
