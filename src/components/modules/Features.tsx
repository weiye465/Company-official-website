"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { Database, Shield, Gauge, Users, HardDrive, Building2, Check } from "lucide-react";
import { useRef } from "react";

const features = [
  { title: "数据安全", desc: "独立空间、加密、审计与背书" },
  { title: "多源接入", desc: "统一API、调度与错误处理" },
  { title: "自动看板", desc: "AI 生成初始视图并可编辑" },
  { title: "组织与权限", desc: "多层级模型与共享规则" },
  { title: "空间网盘", desc: "个人/企业独享空间，安全存储与便捷管理" },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: easeOut } },
  };
  
  const icons = [
    <Shield key="s" size={18} />,
    <Database key="d" size={18} />,
    <Gauge key="g" size={18} />,
    <Users key="u" size={18} />,
    <HardDrive key="hd" size={18} />,
    <Building2 key="b2" size={18} />,
  ];
  
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-24" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-orange-400"
      >
        功能特点
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-3 text-lg text-foreground/70 max-w-2xl"
      >
        数驭穹图提供全面的数据分析与可视化功能，让您的数据更有价值
      </motion.p>
      
      <motion.div 
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
        variants={container} 
        initial="hidden" 
        animate={isInView ? "show" : "hidden"}
      >
        {features.map((f, i) => (
          <motion.div 
            key={f.title} 
            variants={item} 
            className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur p-6 hover:border-foreground/20 transition-all duration-300"
          >
            <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(255,121,0,0.15),transparent)]" />
            <div className="relative">
              <div className="inline-flex items-start gap-3 text-base">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-white bg-gradient-to-r from-[var(--brand)] to-orange-400">
                  <Check size={14} />
                </span>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-base text-foreground/70 mt-1.5">{f.desc}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}