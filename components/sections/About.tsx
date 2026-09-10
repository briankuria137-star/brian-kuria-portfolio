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
          description="An IT foundation now being strengthened through real-world experience, practical projects, and continuous problem-solving."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-prose space-y-5 text-base leading-relaxed text-muted">
            <p>
              I&rsquo;m {siteConfig.name}, an IT and technology professional
              focused on building practical digital solutions and applying
              technology to real-world problems.
            </p>

            <p>
              My background spans software development, networking, databases,
              systems, and technical support. I&rsquo;m currently strengthening
              that foundation through real-world IT experience while continuing
              to develop my technical and professional skills.
            </p>

            <p>
              I believe practical experience matters. That&rsquo;s why I build
              and work on real projects alongside my professional development.
              Yobby Kicks is a real-world business website, while BKM Catalogue
              is an actively developed platform designed to help businesses
              showcase their products online.
            </p>

            <p>
              My long-term direction is to build a strong career in IT while
              creating useful digital products and services through BKM DIGITAL.
              The goal is simple: keep building, keep solving real problems,
              and turn technology into something people can actually use.
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
                Build real things, solve real problems, learn continuously,
                and improve through practical experience.
              </p>
            </div>

            <div className="bg-background p-6 sm:col-span-2 lg:col-span-1">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                Direction
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                Growing professionally in IT while developing BKM DIGITAL into
                a long-term digital solutions ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
