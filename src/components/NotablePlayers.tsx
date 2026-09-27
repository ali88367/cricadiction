import SectionHeading from "./SectionHeading";

const PLAYERS = [
  { initials: "SM", name: "Sohaib Maqsood", tag: "Pakistan International" },
  { initials: "AY", name: "Amir Yamin", tag: "Domestic Circuit" },
  { initials: "AM", name: "Arafat Mihnash", tag: "Domestic Circuit" },
  { initials: "S", name: "Sameer", tag: "Domestic Circuit" },
  { initials: "ZA", name: "Zain Abbas", tag: "Domestic Circuit" },
];

export default function NotablePlayers() {
  return (
    <section id="players" className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Notable Players"
          title="Faces From Our Nets, Now On The Circuit"
          description="Multan's best academy, backed by a growing list of players who trained on our pitches and went on to the domestic circuit — and beyond."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {PLAYERS.map((player) => (
            <div
              key={player.name}
              className="group rounded-sm border border-white/10 bg-charcoal p-5 sm:p-6 flex flex-col items-center text-center gap-3 hover:border-gold/50 transition-colors"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-charcoal-light to-ink border border-gold/30">
                <span className="font-display text-xl sm:text-2xl text-gold/70 group-hover:text-gold transition-colors">
                  {player.initials}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg tracking-wide text-white leading-tight">
                  {player.name}
                </h3>
                <p className="text-gold/70 text-[10px] sm:text-xs uppercase tracking-wider mt-1">
                  {player.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
