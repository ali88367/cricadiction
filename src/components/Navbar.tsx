"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#coaches", label: "Coaches" },
  { href: "#facilities", label: "Facilities" },
  { href: "#results", label: "Results" },
  { href: "#players", label: "Players" },
  { href: "#partners", label: "Partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-20">
        <Link href="#top" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Cricadiction Academy"
            width={48}
            height={56}
            className="h-12 w-auto"
            priority
          />
          <span className="font-display text-2xl tracking-wide text-white leading-none">
            CRICADICTION
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#enroll"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-ink hover:bg-gold-light transition-colors"
          >
            Book a Trial
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden bg-ink border-white/10 transition-all duration-300 ${
          open ? "max-h-96 border-t" : "max-h-0 border-t-0"
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-white/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enroll"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wider text-ink"
          >
            Book a Trial
          </a>
        </div>
      </div>
    </header>
  );
}
