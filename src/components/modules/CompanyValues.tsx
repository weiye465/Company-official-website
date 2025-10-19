"use client";

import { motion } from "framer-motion";

export default function CompanyValues() {
  const items = [
    {
      title: "客户价值",
      desc: "以客户成功为核心，以结果为导向，持续创造价值。",
    },
    {
      title: "长期主义",
      desc: "专注长期投入与积累，构建可持续的产品与服务。",
    },
    {
      title: "开放协作",
      desc: "跨团队高效协同，尊重多元观点，共建生态。",
    },
    {
      title: "极致体验",
      desc: "追求简单好用与稳定可靠，打磨每一个细节。",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-orange-400"
        >
          公司价值观与经营理念
        </motion.h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur p-6 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(255,121,0,0.15),transparent)]" />
              <div className="relative">
              <div className="text-lg font-semibold">{it.title}</div>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


