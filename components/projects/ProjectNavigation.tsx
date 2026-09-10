import Link from "next/link";
import { projects } from "@/data/projects";

interface ProjectNavigationProps {
  currentSlug: string;
}

export function ProjectNavigation({
  currentSlug,
}: ProjectNavigationProps) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug,
  );

  if (currentIndex === -1 || projects.length < 2) {
    return null;
  }

  const previousIndex =
    (currentIndex - 1 + projects.length) % projects.length;

  const nextIndex = (currentIndex + 1) % projects.length;

  const previous = projects[previousIndex];
  const next = projects[nextIndex];

  if (!previous || !next) {
    return null;
  }

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-dark">
              More work
            </p>

            <Link
              href="/#projects"
              className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              All projects →
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-2">
            <Link
              href={`/projects/${previous.slug}`}
              className="group bg-background p-6 transition-colors hover:bg-surface sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Previous project
              </p>

              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {previous.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {previous.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl transition-transform group-hover:-translate-x-1"
                >
                  ←
                </span>
              </div>
            </Link>

            <Link
              href={`/projects/${next.slug}`}
              className="group bg-background p-6 transition-colors hover:bg-surface sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Next project
              </p>

              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {next.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {next.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
