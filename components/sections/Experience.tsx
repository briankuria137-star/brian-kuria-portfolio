import { SectionHeading } from "@/components/ui/SectionHeading";
import { journey } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="journey"
      className="section-shell border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          index="05"
          title="Journey"
          description="A progression shaped by learning, practical experience, independent building, and a growing focus on professional IT and digital solutions."
        />

        <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
              The path
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              From building an IT foundation to turning technical knowledge
              into practical products, services, and digital solutions.
            </p>
          </div>

          <ol className="relative border-l border-border">
            {journey.map((entry, index) => (
              <li
                key={entry.id}
                className="relative pb-10 pl-8 last:pb-0 sm:pl-10"
              >
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                    entry.current ? "bg-accent" : "bg-border"
                  }`}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                      {entry.period}
                    </p>
                  </div>

                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {entry.title}
                  </h3>

                  <p className="max-w-prose text-sm leading-relaxed text-muted">
                    {entry.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
