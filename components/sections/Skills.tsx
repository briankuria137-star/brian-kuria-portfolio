import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-shell border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          index="04"
          title="Skills & Tools"
          description="A practical technical foundation across software development, databases, networking, systems, and modern digital technology."
        />

        <div className="grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((group) => (
            <article
              key={group.category}
              className="bg-surface p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                  {group.category}
                </p>

                <span
                  className="font-mono text-[10px] text-muted"
                  aria-hidden="true"
                >
                  +
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-accent pl-5">
          <p className="max-w-prose text-sm leading-relaxed text-muted">
            My approach is practical: understand the technology, build with
            it, troubleshoot what breaks, and keep improving through real
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}
