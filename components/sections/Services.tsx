import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";

export function Services() {
  return (
    <section
      id="services"
      className="section-shell border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          index="03"
          title="Services & Solutions"
          description="Practical digital and IT solutions built around real business needs, technical requirements, and opportunities."
        />

        <div className="grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="group flex min-h-[220px] flex-col bg-surface p-6 transition-colors duration-150 hover:bg-surface-muted sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-accent-dark">
                  {capability.number}
                </span>

                <span
                  className="text-sm text-muted transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <div className="mt-auto pt-12">
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {capability.title}
                </h3>

                <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
                  {capability.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
