"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [hovered, setHovered] = useState(false);

  const imgSrc = "/rc/code.jpg"; // 点击打开的大图
  const hoverImgSrc = "/rc/light-code.png"; // 悬浮预览小图

  return (
    <div className="fixed right-4 bottom-6 z-40">
      <div className="relative">
        {hovered && (
          <div className="absolute right-0 bottom-14 mb-3 w-44 rounded-xl border border-foreground/10 bg-background/90 backdrop-blur p-2 shadow-xl">
            <img src={hoverImgSrc} alt="企业微信二维码预览" className="w-full h-auto rounded-lg" />
            <div className="mt-1 text-center text-xs text-foreground/70">微信扫一扫</div>
          </div>
        )}

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => window.open(imgSrc, "_blank", "noopener,noreferrer")}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand)] to-orange-400 text-background px-4 py-2 shadow-lg hover:shadow-orange-500/30 transition-shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6.75-.75A.75.75 0 0 0 8.25 12v.008a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-.75-.75Zm5.25 0A.75.75 0 0 0 13.5 12v.008a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-.75-.75ZM9 15.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 15.75Z" />
          </svg>
          联系我们
        </button>
      </div>
    </div>
  );
}


