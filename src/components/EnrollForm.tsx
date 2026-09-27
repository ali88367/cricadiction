"use client";

import { useState } from "react";

const PROGRAM_OPTIONS = [
  "Junior Development",
  "Elite Performance",
  "Fast-Track",
  "1-on-1 Coaching",
  "Not sure yet",
];

export default function EnrollForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="enroll" className="relative bg-ink py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-pinstripe opacity-30" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-xs mb-3">
              Book A Trial
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-white leading-tight">
              Ready To Get <span className="text-gradient-gold">Hooked?</span>
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Tell us a little about the player and preferred programme —
              our team will reach out within 24 hours to schedule a free
              trial session.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/50">
              <p>2 Grounds, Multan, Pakistan</p>
              <p>+92 300 0000000</p>
              <p>info@cricadiction.com</p>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-sm border border-white/10 bg-charcoal p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <span className="font-display text-3xl text-gold mb-3">
                  You&apos;re In.
                </span>
                <p className="text-white/60 max-w-sm">
                  Thanks for reaching out — a member of the Cricadiction team
                  will contact you within 24 hours to lock in your trial
                  session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-white/60">
                    Player Name
                  </label>
                  <input
                    required
                    type="text"
                    className="bg-ink border border-white/15 rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold"
                    placeholder="Full name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-white/60">
                    Age
                  </label>
                  <input
                    required
                    type="number"
                    min={5}
                    max={60}
                    className="bg-ink border border-white/15 rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold"
                    placeholder="Age"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-white/60">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    className="bg-ink border border-white/15 rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold"
                    placeholder="+92 300 0000000"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-white/60">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="bg-ink border border-white/15 rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold"
                    placeholder="you@email.com"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-white/60">
                    Programme Interested In
                  </label>
                  <select
                    className="bg-ink border border-white/15 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold"
                    defaultValue={PROGRAM_OPTIONS[0]}
                  >
                    {PROGRAM_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-white/60">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    className="bg-ink border border-white/15 rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold resize-none"
                    placeholder="Batting, bowling, previous experience..."
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-sm bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink hover:bg-gold-light transition-colors"
                >
                  Submit & Book Trial
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
