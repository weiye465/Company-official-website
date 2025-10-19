"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: "产品", links: [
      { name: "功能特点", href: "#features" },
      { name: "价格方案", href: "#pricing" },
      { name: "常见问题", href: "#knowledge" },
    ]},
    { title: "资源", links: [
      { name: "文档中心", href: "#" },
      { name: "API参考", href: "#" },
      { name: "使用教程", href: "#" },
    ]},
    { title: "公司", links: [
      { name: "关于我们", href: "#" },
      { name: "联系我们", href: "#contact" },
      { name: "隐私政策", href: "#" },
    ]},
  ];

  return (
    <footer className="border-t border-foreground/10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="text-xl font-bold tracking-tight">深圳市慧泽致远人工智能科技有限公司</Link>
            <p className="mt-4 text-sm text-foreground/70 max-w-xs">
              面向企业级的 AI 数据门户，统一接入、多源联动、自动洞察与高可用交付。
            </p>
            <div className="mt-6 flex space-x-4">
              {["twitter", "github", "linkedin"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="h-8 w-8 rounded-full border border-foreground/10 bg-background/60 flex items-center justify-center text-foreground/70 hover:border-foreground/30 hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-2 md:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((category) => (
                <div key={category.title}>
                  <h3 className="text-sm font-semibold">{category.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="text-sm text-foreground/70 hover:text-[var(--brand)] transition-colors"
                          data-scrollto={link.href.startsWith('#') ? true : undefined}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-foreground/60">
            &copy; {currentYear} 深圳市慧泽致远人工智能科技有限公司. 保留所有权利.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors">隐私政策</a>
            <a href="#" className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors">服务条款</a>
            <a href="#" className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
