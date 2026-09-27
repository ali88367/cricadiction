import SectionHeading from "./SectionHeading";

const PROGRAMS = [
  {
    name: "Junior Development",
    age: "Ages 8–14",
    schedule: "3 sessions / week",
    highlight: false,
    features: [
      "Fundamentals of batting, bowling & fielding",
      "Small group coaching (max 10 players)",
      "Monthly skill assessments",
      "Match-play Saturdays",
    ],
  },
  {
    name: "Elite Performance",
    age: "Ages 14–19",
    schedule: "5 sessions / week",
    highlight: true,
    features: [
      "Advanced technical & tactical coaching",
      "Strength & conditioning programme",
      "Video analysis & performance tracking",
      "Priority selection for academy XI",
      "Nutrition & recovery guidance",
    ],
  },
  {
    name: "Fast-Track",
    age: "Trial-based entry",
    schedule: "6 sessions / week",
    highlight: false,
    features: [
      "For players targeting district/state selection",
      "1-on-1 coach accountability",
      "Exposure matches & scouting network",
      "Personalised development roadmap",
    ],
  },
  {
    name: "1-on-1 Coaching",
    age: "All ages",
    schedule: "Flexible booking",
    highlight: false,
    features: [
      "Fully customised session plans",
      "Choose your specialist coach",
      "Video review after every session",
      "Ideal for targeted weaknesses",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="A Pathway For Every Stage"
          description="From first-touch fundamentals to fast-tracked selection trials — every programme is built around structured progression, not just practice."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => (
            <div
              key={program.name}
              className={`relative flex flex-col rounded-sm border p-7 ${
                program.highlight
                  ? "border-gold bg-gradient-to-b from-charcoal-light to-charcoal"
                  : "border-white/10 bg-charcoal"
              }`}
            >
              {program.highlight && (
                <span className="absolute -top-3 left-7 bg-gold text-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl tracking-wide text-white mb-1">
                {program.name}
              </h3>
              <p className="text-white/50 text-sm mb-6">{program.age}</p>

              <div className="mb-6">
                <p className="text-gold text-xs uppercase tracking-wider font-semibold">
                  {program.schedule}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {program.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-white/70">
                    <span className="text-gold mt-0.5">&#9670;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#enroll"
                className={`inline-flex items-center justify-center rounded-sm px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                  program.highlight
                    ? "bg-gold text-ink hover:bg-gold-light"
                    : "border border-white/20 text-white hover:border-gold hover:text-gold"
                }`}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
