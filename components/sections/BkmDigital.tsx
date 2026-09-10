import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { bkmProducts, bkmDigitalUrl } from "@/data/socialLinks";

export function BkmDigital() {
  return (
    <section
      id="bkm-digital"
      className="section-shell border-t border-border bg-primary py-24 text-background sm:py-28"
    >
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          index="07"
          title="BKM DIGITAL"
          description="A growing digital ecosystem built around practical websites, digital products, and technology solutions."
          className="[&_h2]:text-background [&_span]:text-accent-light [&_p]:text-background/70"
        />

        <div className="grid gap-px overflow-hidden border border-background/15 bg-background/10 sm:grid-cols-3">
          {bkmProducts.map((product, index) => (
            <article
              key={product.name}
              className="group bg-primary p-6 transition-colors duration-150 hover:bg-primary-light sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent-light">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="text-sm text-background/40 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <h3 className="mt-12 font-display text-xl font-semibold tracking-tight">
                {product.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-background/70">
                {product.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-background/15 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent-light">
              Long-term direction
            </p>

            <p className="mt-3 max-w-prose text-sm leading-relaxed text-background/70">
              BKM DIGITAL is being developed as a long-term ecosystem for
              practical digital solutions — connecting products, websites,
              technology, and real business needs.
            </p>
          </div>

          {bkmDigitalUrl && (
            <ButtonLink
              href={bkmDigitalUrl}
              external
              variant="secondary"
              className="border-background/30 text-background hover:border-background hover:text-background"
            >
              Explore BKM DIGITAL
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
