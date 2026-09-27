"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink">
      <Image
        src="/images/player-hero.jpeg"
        alt="Cricadiction Academy player"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_10%] sm:object-[60%_10%] opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-pinstripe opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-5 md:px-8 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-4"
        >
          Multan&apos;s Best Cricket Academy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-wide text-white max-w-3xl"
        >
          FUEL THE <span className="text-gradient-gold">OBSESSION</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-white/70 text-lg leading-relaxed"
        >
          Structured programs. Proven coaches. A relentless pathway from
          the nets to the national stage. This is where serious players
          become elite ones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#enroll"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink hover:bg-gold-light transition-colors w-full sm:w-auto"
          >
            Join Now
          </a>
          <a
            href="#programs"
            className="inline-flex items-center justify-center rounded-sm border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:border-gold hover:text-gold transition-colors w-full sm:w-auto"
          >
            View Programs
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden lg:block absolute bottom-10 right-8 xl:right-12 z-10 w-64 rounded-sm border border-white/15 bg-black/40 backdrop-blur-sm p-2 shadow-2xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/images/hero-ground.jpg"
            alt="Cricadiction Academy ground in Multan"
            fill
            sizes="256px"
            className="object-cover"
          />
        </div>
        <p className="mt-2 px-1 pb-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
          Our Grounds — Multan
        </p>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </div>
    </section>
  );
}
