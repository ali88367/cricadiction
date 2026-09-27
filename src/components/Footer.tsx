import Image from "next/image";

const FOOTER_LINKS = [
  {
    heading: "Academy",
    links: [
      { label: "Programs", href: "#programs" },
      { label: "Coaches", href: "#coaches" },
      { label: "Facilities", href: "#facilities" },
      { label: "Results & Alumni", href: "#results" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Book a Trial", href: "#enroll" },
      { label: "Partner With Us", href: "#partners" },
      { label: "News & Events", href: "#news" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Cricadiction Academy"
                width={44}
                height={52}
                className="h-11 w-auto"
              />
              <span className="font-display text-2xl tracking-wide text-white">
                CRICADICTION
              </span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Multan&apos;s best cricket academy. Elite coaching for players
              who refuse to settle — structured programs, proven coaches,
              and a pathway from the nets to the national stage.
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-display text-lg tracking-wide text-gold mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-lg tracking-wide text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>2 Grounds, Multan, Pakistan</li>
              <li>+92 300 0000000</li>
              <li>info@cricadiction.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Cricadiction Academy. All rights reserved.</p>
          <p className="uppercase tracking-widest">Fuel the Obsession</p>
        </div>
      </div>
    </footer>
  );
}
