"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFX() {
  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];
    const triggers: ScrollTrigger[] = [];

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((el) => {
      const st = ScrollTrigger.create({ trigger: el, start: "top 80%", once: true });
      triggers.push(st);
      const t = gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", immediateRender: false, scrollTrigger: st }
      );
      tweens.push(t);
    });

    const parallax = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    parallax.forEach((el, i) => {
      const st = ScrollTrigger.create({ trigger: el, start: "top bottom", end: "bottom top", scrub: true });
      triggers.push(st);
      const t = gsap.to(el, { yPercent: i % 2 ? -16 : -10, ease: "none", scrollTrigger: st });
      tweens.push(t);
    });

    return () => {
      tweens.forEach((t) => t.kill());
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return null;
}
