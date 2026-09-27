import SectionHeading from "./SectionHeading";

const SPONSORS = [
  "14th Street Pizza Co.",
  "Passion Foods",
  "Nuchem",
  "Billay Da Dera",
  "RES.APE",
];

const PERKS = [
  "Logo placement on academy match kit",
  "Brand visibility at tournaments & camps",
  "Featured on the academy website & socials",
  "Direct access to a growing cricket community",
];

export default function Sponsors() {
  return (
    <section id="partners" className="bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Sponsors & Partners"
          title="Trusted By Brands That Back Excellence"
          align="center"
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {SPONSORS.map((s) => (
            <span
              key={s}
              className="text-white/40 hover:text-white transition-colors font-display text-xl md:text-2xl tracking-wide"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-16 rounded-sm border border-gold/30 bg-gradient-to-br from-charcoal to-charcoal-light p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-wide text-white leading-tight">
              Put Your Brand On The <span className="text-gradient-gold">Next Generation</span>
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed">
              Partner with Cricadiction Academy and align your brand with
              discipline, ambition, and a fast-growing community of players,
              parents, and cricket fans.
            </p>
            <a
              href="#enroll"
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-ink hover:bg-gold-light transition-colors"
            >
              Become a Partner
            </a>
          </div>
          <ul className="space-y-4">
            {PERKS.map((perk) => (
              <li key={perk} className="flex gap-3 text-white/70 text-sm">
                <span className="text-gold mt-0.5">&#9670;</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
