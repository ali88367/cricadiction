export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <p className="text-gold font-semibold uppercase tracking-[0.3em] text-xs mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-5xl tracking-wide text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-white/60 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
