"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "张经理",
    role: "连锁餐饮企业",
    content: "以前看销售报表需要等财务做半天，现在我自己5分钟就能搞定，数据可视化的UI数据分析查询太高效了！",
    avatar: "/avatar1.svg"
  },
  {
    name: "李总",
    role: "电商公司创始人",
    content: "我们团队都不擅长技术出身，但用数驭穹图分析销售数据像做PPT一样简单，完全替代了昂贵的BI系统有中小企业！",
    avatar: "/avatar2.svg"
  },
  {
    name: "王总监",
    role: "教育培训机构",
    content: "每月的学员数据分分钟就能生成漂亮的图表，现在我们自己已经能生成各种报表，节省了大量成本。",
    avatar: "/avatar3.svg"
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section id="research" className="relative mx-auto max-w-7xl px-4 py-24" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,rgba(255,121,0,0.05),transparent)]" />
      
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-orange-400 text-center"
      >
        听听用户怎么说
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-3 text-lg text-foreground/70 text-center max-w-2xl mx-auto"
      >
        超过500家企业的共同选择
      </motion.p>
      
      <motion.div 
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" 
        variants={container} 
        initial="hidden" 
        animate={isInView ? "show" : "hidden"}
      >
        {testimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.name} 
            variants={item} 
            className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur p-6 hover:border-foreground/20 transition-all duration-300"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(255,121,0,0.15),transparent)]" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[var(--brand)] to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-foreground/60">{testimonial.role}</div>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            
            <p className="text-foreground/80 text-base">&ldquo;{testimonial.content}&rdquo;</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}