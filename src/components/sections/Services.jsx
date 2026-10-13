import services from "../../data/services";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-y border-border bg-surface/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="services-title"
          align="center"
          eyebrow="Services"
          title="Everything you need to ship a great product."
          description="From the first database table to the final pixel, I cover the full stack so your project moves fast without cutting corners."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={(i % 3) * 80}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-fg/20 hover:shadow-xl hover:shadow-black/5"
            >
              <div
                aria-hidden="true"
                className="bg-brand absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-xl border border-border bg-surface-2 text-fg transition-colors group-hover:text-accent">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <span className="text-sm font-medium text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
