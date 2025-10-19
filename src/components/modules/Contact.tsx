"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-24" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,rgba(255,121,0,0.05),transparent)]" />
      
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-orange-400 text-center"
      >
        和我们一起，让数据更懂业务
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
        className="mt-3 text-lg text-foreground/70 text-center max-w-2xl mx-auto"
      >
        用 AI 驱动每一次业务决策。邮件联系我们，获取定制化演示与解决方案建议。
      </motion.p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold">联系我们</h3>
            <p className="mt-2 text-foreground/70">5分钟快速上手 · 有合作、使用建议或技术咨询，欢迎与我们交流</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[var(--brand)]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--brand)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">邮件咨询</h4>
              <p className="text-foreground/70">data@huizeai.cn</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[var(--brand)]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--brand)]">
                <path d="M1.5 8.25a6.75 6.75 0 0 1 13.5 0v.18c0 .604.244 1.183.678 1.593l.964.91a4.5 4.5 0 1 1-7.042 5.59m-5.1-4.485a3 3 0 1 0 3.78 4.658" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">企业微信</h4>
              <p className="text-foreground/70">右下角悬浮按钮，扫码快速沟通</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          className="rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur p-6"
        >
          <div className="text-base text-foreground/80 leading-relaxed space-y-3">
            <p><span className="font-medium">AI 助力增长：</span>从数据接入到洞察与行动，构建以业务问题为中心的分析闭环。</p>
            <p><span className="font-medium">更快价值实现：</span>内置最佳实践模板与自动化报表，减少搭建与学习成本。</p>
            <p><span className="font-medium">企业级稳定性：</span>权限体系、审计日志与合规能力，安全可控地规模化使用。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}