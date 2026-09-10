import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-shell border-t border-border bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          index="04"
          title="Featured Projects"
          description="Selected work that demonstrates how I apply technology to practical problems, business needs, and digital products."
        />

        <div className="mb-10 max-w-prose">
          <p className="text-sm leading-relaxed text-muted">
            These projects represent different sides of my work — building
            digital products, creating practical business websites, and
            developing a broader digital solutions ecosystem.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
