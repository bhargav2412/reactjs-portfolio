import projects from "../../data/projects";
import { profile } from "../../data/site";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function ProjectCard({ project }) {
  const link = project.liveUrl || project.repoUrl;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <div className="aspect-[3/2] overflow-hidden bg-surface-2">
        <img
          src={project.image.small}
          srcSet={`${project.image.small} 600w, ${project.image.large} 1170w`}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
          alt={`${project.title} preview`}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-wider text-accent uppercase">{project.category}</p>
        <h3 className="mt-2 flex items-start justify-between gap-3 text-lg font-semibold tracking-tight">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
              {project.title}
            </a>
          ) : (
            project.title
          )}
          {link && (
            <Icon
              name="arrowUpRight"
              className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
            />
          )}
        </h3>
        {project.description && <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>}
        {project.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="projects-title"
            eyebrow="Selected work"
            title="Recent projects."
            description="A selection of interfaces and products I've worked on — each one designed to be fast, responsive and easy to use."
          />
          <Reveal className="shrink-0">
            <Button href={profile.github} target="_blank" rel="noreferrer" variant="secondary">
              <Icon name="github" className="size-4" />
              More on GitHub
            </Button>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.title} delay={(i % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
