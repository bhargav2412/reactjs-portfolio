import { about, skillGroups, stats } from "../../data/site";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow="About me" title="Engineering software that's built to last." />
          <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
            <p className="text-fg">{about.intro}</p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="dl" className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="text-brand mt-1 text-4xl font-bold tracking-tight sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 lg:pt-10">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 100}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-fg/20"
            >
              <h3 className="text-sm font-semibold tracking-wider text-muted uppercase">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
