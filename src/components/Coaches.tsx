import Image from "next/image";
import SectionHeading from "./SectionHeading";

const COACHES = [
  {
    photo: "/images/coach-ahmed.jpg",
    initials: "AM",
    name: "Coach Ahmed Malik",
    role: "Head Coach & Founder",
    credentials: "Ex-First Class Cricketer · Level 3 Certified",
  },
  {
    photo: "/images/coach-sana.jpg",
    initials: "SR",
    name: "Coach Sana Riaz",
    role: "Batting Specialist",
    credentials: "Level 2 Certified · 10+ Years Coaching",
  },
  {
    photo: "/images/coach-bilal.jpg",
    initials: "BK",
    name: "Coach Bilal Khan",
    role: "Fast Bowling Coach",
    credentials: "Ex-Club Pro · Biomechanics Certified",
  },
  {
    photo: "/images/coach-fahad.jpg",
    initials: "FH",
    name: "Coach Fahad Hussain",
    role: "Strength & Conditioning",
    credentials: "Certified S&C Coach · Sports Science",
  },
  {
    photo: "/images/coach-tahir.jpg",
    initials: "TM",
    name: "Coach Tahir Mehmood",
    role: "Certified Coach",
    credentials: "Certified Coach · Multan Grounds",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="The Coaches"
          title="Learn From Those Who've Played It"
          description="Every coach on staff carries certified credentials and real playing pedigree — not just theory."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {COACHES.map((coach) => (
            <div
              key={coach.name}
              className="group rounded-sm border border-white/10 bg-ink overflow-hidden hover:border-gold/50 transition-colors"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-charcoal-light to-ink">
                <Image
                  src={coach.photo}
                  alt={coach.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 50vw"
                  className="object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-crest-red via-gold to-transparent" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-base sm:text-xl tracking-wide text-white">
                  {coach.name}
                </h3>
                <p className="text-gold text-[10px] sm:text-xs uppercase tracking-wider mt-1">
                  {coach.role}
                </p>
                <p className="hidden sm:block text-white/50 text-xs mt-3 leading-relaxed">
                  {coach.credentials}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
