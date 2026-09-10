import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="section-shell border-t border-border bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          index="01"
          title="About"
          description="An IT foundation shaped by practical building, problem-solving, and a growing focus on digital solutions."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-prose space-y-5 text-base leading-relaxed text-muted">
            <p>
              I&rsquo;m {siteConfig.name}, an IT and technology professional
              focused on building practical digital solutions and applying
              technology to real-world problems.
            </p>

            <p>
              My IT background has given me a foundation across software
              development, networking, databases, systems, and technical
              support. I&rsquo;m particularly interested in turning that
              foundation into useful products and working solutions.
            </p>

            <p>
              Rather than keeping that knowledge theoretical, I&rsquo;ve used
              independent projects to develop practical experience. Yobby
              Kicks is a real-world business website, while BKM Catalogue is a
              platform I&rsquo;m actively developing to help businesses
              showcase their products online.
            </p>

            <p>
              My direction now is to grow professionally in IT while
              continuing to build useful digital products and businesses
              through BKM DIGITAL.
            </p>
          </div>

          <div className="grid gap-px self-start overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
            <div className="bg-background p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                Focus
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                IT, web development, digital products, and practical
                technology solutions.
              </p>
            </div>

            <div className="bg-background p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                Approach
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                Learn through building, solve real problems, and turn ideas
                into working digital experiences.
              </p>
            </div>

            <div className="bg-background p-6 sm:col-span-2 lg:col-span-1">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                Direction
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                Professional IT and digital solutions, with BKM DIGITAL
                developing as a long-term ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
