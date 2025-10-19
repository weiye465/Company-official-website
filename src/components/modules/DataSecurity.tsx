"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, KeySquare, ActivitySquare } from "lucide-react";

export default function DataSecurity() {
  const cards = [
    {
      title: "安全设计投入",
      desc: "本公司采用安全设计方法来保护用户数据，团队持续投入，确保用户能安心使用。",
      icon: <ShieldCheck size={18} />,
      more: "从威胁建模到安全评审，覆盖需求、设计、开发、发布全流程。",
    },
    {
      title: "安全基础设施",
      desc: "多层保护确保数据在传输、存储与处理过程中的安全，包括加密、最小权限访问、安全开发和漏洞赏金计划。",
      icon: <Lock size={18} />,
      more: "传输与存储加密、零信任访问控制、隔离运行环境与持续漏洞扫描。",
    },
    {
      title: "产品安全机制",
      desc: "提供SAML 2.0、SSO、SCIM、审计日志、权限控制与访客管理等机制，增强数据可见性与控制力。",
      icon: <KeySquare size={18} />,
      more: "细粒度权限模型与访问审计，满足组织合规与分权分域管理。",
    },
    {
      title: "运营安全监控",
      desc: "信息安全团队持续实施控制与监控，关注基础设施、网络与资产中的潜在恶意活动。",
      icon: <ActivitySquare size={18} />,
      more: "7×24 监控与告警，攻防演练与应急预案，持续提升安全韧性。",
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
          className="text-2xl sm:text-3xl font-bold"
        >
          数据安全
        </motion.h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.03 * idx }}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur p-6 shadow-sm hover:border-foreground/20 transition"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(255,121,0,0.15),transparent)]" />
              <div className="relative flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-white bg-gradient-to-r from-[var(--brand)] to-orange-400">
                  {c.icon}
                </span>
                <div>
                  <div className="text-lg font-semibold flex items-center gap-2">
                    {c.title}
                  </div>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{c.desc}</p>
                  <div className="mt-3 text-sm text-foreground/75">
                    {c.more}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


