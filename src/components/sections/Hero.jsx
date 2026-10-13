import portraitSm from "../../assets/img/portrait-480.webp";
import portraitLg from "../../assets/img/portrait-800.webp";
import { profile, socials, stats } from "../../data/site";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Icon from "../ui/Icon";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* Decorative background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-brand opacity-20 blur-[120px] dark:opacity-25" />
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {profile.name.split(" ")[0]} —{" "}
            <span className="text-brand">{profile.role.toLowerCase()}</span> based in India.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">{profile.tagline}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">
              Start a project
              <Icon name="arrowRight" className="size-4" />
            </Button>
            <Button href="#projects" variant="secondary">
              View my work
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <ul className="flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-full border border-border bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:text-fg"
                  >
                    <Icon name={social.icon} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
            <span className="h-6 w-px bg-border" aria-hidden="true" />
            <p className="flex items-center gap-2 text-sm text-muted">
              <Icon name="mapPin" className="size-4" />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand opacity-30 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-surface p-2 shadow-2xl shadow-black/20">
            <img
              src={portraitLg}
              srcSet={`${portraitSm} 480w, ${portraitLg} 800w`}
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
              width="800"
              height="1000"
              alt={`Portrait of ${profile.name}`}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
            />
          </div>

          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`absolute flex items-center gap-3 rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-md ${
                i === 0 ? "top-6 -left-4 sm:top-8 sm:-left-8" : "-right-4 bottom-8 sm:-right-8 sm:bottom-10"
              }`}
            >
              <span className="text-brand text-2xl font-bold">{stat.value}</span>
              <span className="max-w-[6rem] text-xs leading-tight text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
