"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { Star, Crown, Gem, Check, X } from "lucide-react";
import { useRef } from "react";

type TierFeature = { label: string; available: boolean };
type Tier = {
  name: string;
  subtitle: string;
  priceLabel: string; // label only, no numeric price
  ctaLabel: string;
  features: TierFeature[];
  highlight: boolean;
};

const tiers: Tier[] = [
  {
    name: "免费版",
    subtitle: "适合个人用户体验",
    priceLabel: "永久免费",
    ctaLabel: "开始使用",
    features: [
      { label: "每月 50 次分析", available: true },
      { label: "单文件上传（5MB）", available: true },
      { label: "基础图表功能", available: true },
      { label: "多文件分析", available: false },
      { label: "团队协作", available: false },
    ],
    highlight: false,
  },
  {
    name: "专业版",
    subtitle: "适合中小企业日常使用",
    priceLabel: "每月",
    ctaLabel: "立即升级",
    features: [
      { label: "无限次分析", available: true },
      { label: "文件上传（100MB）", available: true },
      { label: "高级图表功能", available: true },
      { label: "多文件综合分析", available: true },
      { label: "5 人团队协作", available: true },
    ],
    highlight: true,
  },
  {
    name: "企业版",
    subtitle: "适合大型企业定制需求",
    priceLabel: "按需报价",
    ctaLabel: "联系销售",
    features: [
      { label: "无限次分析", available: true },
      { label: "无限文件大小", available: true },
      { label: "定制化功能", available: true },
      { label: "无限团队成员", available: true },
      { label: "专属技术支持", available: true },
    ],
    highlight: false,
  },
];

const icons = {
  "免费版": <Star size={20} />,
  "专业版": <Crown size={20} />,
  "企业版": <Gem size={20} />
};

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const container = { 
    hidden: { opacity: 0 }, 
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } 
  };
  
  const item = { 
    hidden: { opacity: 0, y: 20, scale: 0.95 }, 
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeOut } } 
  };

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-24" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,rgba(255,121,0,0.05),transparent)]" />
      
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-orange-400 text-center"
      >
        选择适合您的方案
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-3 text-lg text-foreground/70 text-center max-w-2xl mx-auto"
      >
        透明定价，按需选择，随时升级
      </motion.p>
      
      <motion.div 
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8" 
        variants={container} 
        initial="hidden" 
        animate={isInView ? "show" : "hidden"}
      >
        {tiers.map((tier) => (
          <motion.div 
            key={tier.name} 
            variants={item} 
            className={`relative rounded-2xl border ${tier.highlight ? 'border-[var(--brand)]' : 'border-foreground/10'} bg-background/40 backdrop-blur p-8 hover:shadow-lg transition-all duration-300 ${tier.highlight ? 'shadow-md shadow-orange-200/10' : ''}`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 right-4 inline-flex items-center rounded-full border border-[var(--brand)] bg-[var(--brand)] px-3 py-1 text-xs font-medium text-white">
                最受欢迎
              </div>
            )}
            
            <div className="font-bold text-xl inline-flex items-center gap-2">
              <span className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${tier.highlight ? 'bg-gradient-to-r from-[var(--brand)] to-orange-400 text-white' : 'border border-foreground/10 bg-background/60 text-[var(--brand)]'}`}>
                {icons[tier.name as keyof typeof icons]}
              </span>
              {tier.name}
            </div>
            <div className="mt-2 text-sm text-foreground/70">{tier.subtitle}</div>
            
            <div className="mt-4">
              <div className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-3 py-1.5 text-sm text-foreground/80 bg-background/60">
                {tier.priceLabel}
              </div>
            </div>
            
            <ul className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature.label} className="flex items-center gap-2 text-base">
                  {feature.available ? (
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/90 text-white">
                      <Check size={14} />
                    </span>
                  ) : (
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10 text-foreground/50">
                      <X size={14} />
                    </span>
                  )}
                  <span className={feature.available ? '' : 'text-foreground/50 line-through'}>{feature.label}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className={`inline-flex w-full justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-300 ${tier.highlight ? 'bg-gradient-to-r from-[var(--brand)] to-orange-400 text-white hover:opacity-90' : 'border border-foreground/15 hover:border-foreground/30'}`}
              >
                {tier.ctaLabel}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}