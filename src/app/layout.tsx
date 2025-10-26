import type { Metadata } from "next";
// Note: remove google fonts to avoid offline build failures
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import SmoothScroll from "@/components/effects/SmoothScroll";

const geistSans = { variable: "--font-geist-sans" } as const;
const geistMono = { variable: "--font-geist-mono" } as const;

export const metadata: Metadata = {
  title: {
    default: "数驭穹图 - AI驱动的智能数据分析平台 | 慧泽致远",
    template: "%s | 数驭穹图 AI数据分析平台"
  },
  description: "数驭穹图是慧泽致远推出的AI智能数据分析平台，通过自然语言对话、多源数据接入、自动洞察生成，让非技术人员也能轻松进行复杂数据分析。支持Excel、CSV、数据库等多种数据源，自动生成可视化报表，提升企业决策效率，实现数据驱动增长。",
  keywords: ["数驭穹图", "AI数据分析", "智能分析平台", "自然语言查询", "数据可视化", "自动报表生成", "多源数据接入", "商业智能", "企业数据分析", "慧泽致远", "数据驱动决策", "BI替代", "数据分析智能体"],
  authors: [{ name: "深圳市慧泽致远人工智能科技有限公司" }],
  creator: "深圳市慧泽致远人工智能科技有限公司",
  publisher: "深圳市慧泽致远人工智能科技有限公司",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://huizezhiyuan.com"),
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "en": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    url: "https://huizezhiyuan.com",
    title: "数驭穹图 - AI驱动的智能数据分析平台",
    description: "通过自然语言对话进行数据分析，支持多源数据接入和自动报表生成。让非技术人员也能轻松进行复杂数据分析，实现数据驱动决策。",
    siteName: "数驭穹图 AI数据分析平台",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "深圳市慧泽致远人工智能科技有限公司",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "数驭穹图 - AI驱动的智能数据分析平台",
    description: "通过自然语言对话进行数据分析，让非技术人员也能轻松进行复杂数据分析，实现数据驱动决策。",
    images: ["/og-image.jpg"],
    creator: "@huizezhiyuan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll />
          <Navbar />
          <main className="min-h-[calc(100vh-7rem)] pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
