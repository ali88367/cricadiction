import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Cricadiction turned my son's raw talent into real technique. The structure, the accountability — it's a different level from regular coaching camps.",
    name: "Parent of Junior Development player",
    role: "3 years at the academy",
  },
  {
    quote:
      "The video analysis and 1-on-1 sessions found flaws in my bowling action I didn't know existed. Selected for the district squad within a season.",
    name: "Elite Performance alumnus",
    role: "Now playing club cricket",
  },
  {
    quote:
      "It's not just drills — it's a mindset. The coaches hold you to a professional standard from your very first net session.",
    name: "Fast-Track programme player",
    role: "Trialing for state selection",
  },
];

const PATHWAY = [
  "Junior Development",
  "Elite Performance",
  "Fast-Track Trials",
  "Club / District Cricket",
];

export default function Testimonials() {
  return (
    <section id="results" className="bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Results & Alumni"
          title="The Pathway Works"
          description="Every tier is designed to feed the next — from first fundamentals to district and club selection."
        />

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {PATHWAY.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-sm border border-gold/40 bg-ink px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-gold">
                {step}
              </span>
              {i < PATHWAY.length - 1 && (
                <span className="text-white/30 text-lg">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-sm border border-white/10 bg-ink p-7 flex flex-col"
            >
              <span className="font-display text-4xl text-gold/40 leading-none mb-3">
                &ldquo;
              </span>
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
