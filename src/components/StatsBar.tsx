"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { value: 8, suffix: "+", label: "Years Coaching" },
  { value: 500, suffix: "+", label: "Players Trained" },
  { value: 50, suffix: "+", label: "Players In Pakistan's Domestic Circuit" },
  { value: 2, suffix: "", label: "Grounds In Multan" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-gold">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-charcoal border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-white/60 text-xs md:text-sm uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
