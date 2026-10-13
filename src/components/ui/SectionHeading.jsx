import Reveal from "./Reveal";

export default function SectionHeading({ id, eyebrow, title, description, align = "left" }) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
