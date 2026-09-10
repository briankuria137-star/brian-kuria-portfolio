import { ProductLabTester } from "@/components/product-lab/ProductLabTester";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-content px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />

            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-dark">
              Product Lab
            </p>
          </div>

          <div className="mt-8 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.category}
            </p>

            <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="border border-accent/30 bg-accent/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-accent-dark">
                {project.status}
              </span>

              <span className="border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
                {project.role}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto grid max-w-content gap-12 px-6 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
              01 / The product
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Built for a real purpose.
            </h2>
          </div>

          <div className="max-w-prose space-y-6 text-base leading-relaxed text-muted">
            <p>{project.longDescription ?? project.description}</p>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                Purpose
              </p>

              <p className="mt-3 text-foreground">
                {project.purpose}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                02 / Experience
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Try what I built.
              </h2>

              <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">
                Don&rsquo;t just read about the project. Experience the
                product yourself and see how it works.
              </p>
            </div>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded bg-primary px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-primary-light"
              >
                Open Live Product
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded border border-border px-5 py-3 text-sm font-medium text-muted">
                Live Product Coming Soon
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
            03 / Built with
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-border bg-surface px-4 py-2 font-mono text-sm text-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
            04 / Product Lab
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Test. Experience. Improve.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Try the product, rate your experience, and help identify what
            should be improved next.
          </p>

          <ProductLabTester productSlug={project.slug} />
        </div>
      </section>
    </main>
  );
}
