"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden pt-32 sm:pt-40"
    >
      <div className="mx-auto grid max-w-content gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-dark">
              {siteConfig.professional.headline}
            </p>
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            I build practical digital products, websites, and technology
            solutions that turn ideas and real-world needs into working
            digital experiences.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-primary"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-muted">
              Available for projects &amp; opportunities
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects" variant="primary">
              View My Work
            </ButtonLink>

            <ButtonLink href="#contact" variant="secondary">
              Work With Me
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded border border-border bg-surface-muted">
            {!photoError ? (
              <Image
                src="/images/profile/brian-kuria.jpg"
                alt="Brian Kuria — IT & Tech | Digital Solutions"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center px-10 text-center">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  Professional portrait
                  <br />
                  <span className="mt-2 inline-block text-[10px] normal-case tracking-normal">
                    Add your photo to public/images/profile/
                  </span>
                </span>
              </div>
            )}

            <div className="pointer-events-none absolute inset-5 border border-white/40" />

            <div className="absolute inset-x-0 bottom-0 border-t border-border bg-surface/95 px-5 py-4">
              <p className="font-mono text-xs text-muted">Current direction</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {siteConfig.professional.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
