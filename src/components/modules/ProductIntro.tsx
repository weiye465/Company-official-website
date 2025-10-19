"use client";

import { motion } from "framer-motion";

export default function ProductIntro() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,121,0,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-orange-400 to-amber-300"
            >
              核心产品：数驭穹图
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-foreground/80 text-lg leading-relaxed"
            >
              一个智能数据分析平台：以强大的 AI 引擎为核心，连接多源数据，提供自动洞察、自然语言分析与协作可视化，帮助企业从数据走向决策。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                { t: "自然语言问数", d: "像对人提问一样对话数据，快速得到答案" },
                { t: "自动报表", d: "按需生成并订阅报表，告别重复劳动" },
                { t: "多源接入", d: "覆盖主流数据库/文件/API，统一接入治理" },
                { t: "企业级权限", d: "细粒度权限与审计，安全合规可控" },
              ].map(({ t, d }) => (
                <div key={t} className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-background/40 backdrop-blur p-4 hover:border-foreground/20 transition-all duration-300">
                  <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(255,121,0,0.15),transparent)]" />
                  <div className="relative">
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-foreground/70 mt-1.5">{d}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="https://www.aishujufenxi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-background shadow-lg bg-gradient-to-r from-[var(--brand)] to-orange-400 hover:shadow-orange-500/30 transition-shadow"
              >
                立即体验产品
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="/bg/productintro.jpg"
                alt="数驭穹图 产品预览"
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


