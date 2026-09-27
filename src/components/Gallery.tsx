import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="facilities" className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Facilities & Kit"
          title="Built Like A Professional Setup"
          description="Turf and synthetic nets, video-analysis stations, and academy match kit designed to make players look and feel like professionals from day one."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[220px]">
          <div className="relative col-span-2 row-span-2 rounded-sm overflow-hidden group">
            <Image
              src="/images/player-hero.jpeg"
              alt="Player training with academy kit"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold">
              Training Kit
            </p>
          </div>

          <div className="relative col-span-2 rounded-sm overflow-hidden group">
            <Image
              src="/images/jersey-clean.jpeg"
              alt="Cricadiction Academy match jersey"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold">
              Academy Jersey
            </p>
          </div>

          <div className="relative rounded-sm overflow-hidden group">
            <Image
              src="/images/facility-turf-nets.jpg"
              alt="Cricadiction Academy turf practice nets"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold">
              Turf Nets
            </p>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image
              src="/images/facility-video-analysis.jpg"
              alt="Cricadiction Academy video analysis room"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold">
              Video Analysis
            </p>
          </div>

          <div className="relative col-span-2 rounded-sm overflow-hidden group">
            <Image
              src="/images/jersey-front-back.jpeg"
              alt="Cricadiction Academy jersey front and back"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold">
              Full Match Kit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
