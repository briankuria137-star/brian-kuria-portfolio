import Image from "next/image";

import type { ProjectMedia } from "@/data/projects";

interface ProjectMediaGalleryProps {
  items?: ProjectMedia[];
  caption?: string;
}

export function ProjectMediaGallery({
  items,
  caption,
}: ProjectMediaGalleryProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-dark">
            Project Visuals
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Inside the build.
          </h2>

          {caption ? (
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              {caption}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {items.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className="overflow-hidden rounded border border-border bg-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted/10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {item.caption ? (
                <figcaption className="border-t border-border px-5 py-4 font-mono text-xs leading-relaxed text-muted sm:px-6">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
