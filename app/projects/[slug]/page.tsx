import { ProductLabTester } from "@/components/product-lab/ProductLabTester";
import { ProjectMediaGallery } from "@/components/projects/ProjectMediaGallery";
import { ProjectStructuredData } from "@/components/projects/ProjectStructuredData";
import { caseStudies } from "@/data/case-studies";
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

  const caseStudy = caseStudies.find((item) => item.slug === project.slug);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ProjectStructuredData project={project} />
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-content px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />

            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-dark">
              {caseStudy?.eyebrow ?? "Product Lab"}
            </p>
          </div>

          <div className="mt-8 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.category}
            </p>

            <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {caseStudy?.headline ?? project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {caseStudy?.introduction ?? project.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="border border-accent/30 bg-accent/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-accent-dark">
                {caseStudy?.status ?? project.status}
              </span>

              <span className="border border-border bg-surface px-3 py-1.5 font-mono text-xs">
                {caseStudy?.role ?? project.role}
              </span>
            </div>
          </div>
        </div>
      </section>

      {caseStudy ? (
        <>
          <section className="border-b border-border py-20 sm:py-24">
            <div className="mx-auto max-w-content px-6 sm:px-8">
              <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                    Case Study
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    From problem to product.
                  </h2>
                </div>

                <div className="max-w-prose text-base leading-relaxed text-muted">
                  <p>{caseStudy.introduction}</p>
                </div>
              </div>
            </div>
          </section>

          {caseStudy.sections.map((section) => (
            <section
              key={section.number}
              className="border-b border-border py-20 sm:py-24"
            >
              <div className="mx-auto grid max-w-content gap-12 px-6 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                    {section.number} / Case Study
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {section.title}
                  </h2>
                </div>

                <div className="max-w-prose">
                  <p className="text-base leading-relaxed text-muted">
                    {section.body}
                  </p>
                </div>
              </div>
            </section>
          ))}

          <section className="border-b border-border bg-surface py-20 sm:py-24">
            <div className="mx-auto max-w-content px-6 sm:px-8">
              <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                    Capabilities
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    What the platform supports.
                  </h2>
                </div>

                <div className="grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
                  {caseStudy.capabilities.map((capability, index) => (
                    <div
                      key={capability}
                      className="bg-background p-5 sm:p-6"
                    >
                      <p className="font-mono text-xs text-accent-dark">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-foreground">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-border py-20 sm:py-24">
            <div className="mx-auto max-w-content px-6 sm:px-8">
              <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                    Technical Stack
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    Built with a modern web stack.
                  </h2>
                </div>

                <div className="flex flex-wrap content-start gap-2">
                  {caseStudy.stack.map((technology) => (
                    <span
                      key={technology}
                      className="border border-border bg-surface px-4 py-2 font-mono text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
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

                <p className="mt-3 text-foreground">{project.purpose}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                {caseStudy ? "Live Product" : "02 / Experience"}
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
                TEST THIS PROJECT
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

      {!caseStudy && (
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-content px-6 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
              03 / Built with
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-border bg-surface px-4 py-2 font-mono text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
            {caseStudy ? "Product Lab" : "04 / Product Lab"}
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Test. Experience. Improve.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Try the product, rate your experience, and help identify what
            should be improved next.
          </p>
          <ProjectMediaGallery
            items={project.gallery}
            caption={project.mediaCaption}
          />


          <ProductLabTester productSlug={project.slug} />
        </div>
      </section>
    </main>
  );
}
