"use client";

import { motion, useInView, AnimatePresence, easeOut, easeInOut } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "数驭穹图支持哪些数据源接入？",
    answer: "我们支持多种数据源接入，包括Excel、CSV等多种格式，同时支持数据库、CRM系统、销售系统、HR系统等企业级数据源，以及通过Webhook/API进行自定义数据接入。"
  },
  {
    question: "如何保障数据安全？",
    answer: "我们采用租户级独立空间，确保元数据与向量索引相互隔离。传输采用TLS加密，存储使用AES-256加密，并提供可配置的密钥管理与轮转策略。同时支持细粒度RBAC/ABAC权限控制，操作日志留痕与风险告警。"
  },
  {
    question: "是否支持私有化部署？",
    answer: "是的，我们支持离线镜像、一键安装脚本和离线License激活，可以根据企业需求进行私有化部署，确保数据安全与合规。"
  },
  {
    question: "AI分析功能如何使用？",
    answer: "基于智能算法和语义理解，您只需用自然语言提问，系统会自动生成SQL查询并执行分析，无需编写复杂代码。同时支持智能数据洞察和自动生成报告功能。"
  },
  {
    question: "如何开始免费试用？",
    answer: "您可以点击页面上的\"免费开始\"按钮，5分钟即可上手，简单明了。我们提供完整的免费版功能，让您体验AI驱动的智能数据分析。"
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="knowledge" className="relative mx-auto max-w-7xl px-4 py-24" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,rgba(255,121,0,0.05),transparent)]" />
      
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-orange-400 text-center"
      >
        常见问题
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
        className="mt-3 text-lg text-foreground/70 text-center max-w-2xl mx-auto"
      >
        解答您关心的问题，帮助您更好地了解我们的产品
      </motion.p>
      
      <motion.div 
        className="mt-12 max-w-3xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
      >
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border ${activeIndex === index ? 'border-[var(--brand)]' : 'border-foreground/10'} rounded-xl overflow-hidden transition-all duration-300`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-5 text-left bg-background/60 backdrop-blur hover:bg-background/80 transition-all duration-300"
              aria-expanded={activeIndex === index}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center justify-center h-6 w-6 rounded-full ${activeIndex === index ? 'bg-[var(--brand)] text-white' : 'bg-foreground/5'}`}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 border-t border-foreground/5">
                    <p className="text-foreground/80">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </section>
  );
}