import type { Project } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  "Active Development": "border-accent/30 bg-accent/5 text-accent-dark",
  Live: "border-primary/20 bg-primary/5 text-primary",
  Concept: "border-border bg-surface-muted text-muted",
  Maintained: "border-primary/20 bg-primary/5 text-primary",
};

function isRealUrl(url?: string) {
  return Boolean(url) && !url!.startsWith("[");
}

export function ProjectCard({ project }: { project: Project }) {
  const hasLive = isRealUrl(project.liveUrl);
  const hasGithub = isRealUrl(project.githubUrl);
  const hasCaseStudy = isRealUrl(project.caseStudyUrl);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded border border-border bg-surface shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(21,26,25,0.08)]">
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-surface-muted">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Project Preview
            </span>
            <span className="mt-2 text-xs text-muted/80">
              Visual coming soon
            </span>
          </div>
        )}

        <span
          className={`absolute right-4 top-4 rounded border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {project.category}
          </p>

          <a
            href={`/projects/${project.slug}`}
            className="group/title mt-2 inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>

            <span
              className="text-muted transition-transform duration-150 group-hover/title:translate-x-1 group-hover/title:text-primary"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-6 border-y border-border py-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
              Role
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {project.role}
            </p>
          </div>

          <div className="mt-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
              Purpose
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              {project.purpose}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
            Built with
          </p>

          <ul
            className="mt-2 flex flex-wrap gap-2"
            aria-label={`Technologies used in ${project.title}`}
          >
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {(hasLive || hasGithub || hasCaseStudy) && (
          <div className="mt-auto flex flex-wrap gap-5 pt-7 text-sm font-medium">
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                View Project →
              </a>
            )}

            {hasCaseStudy && (
              <a
                href={project.caseStudyUrl}
                className="rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Case Study →
              </a>
            )}

            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
