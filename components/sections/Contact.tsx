import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.social.email,
    href: `mailto:${siteConfig.social.email}`,
  },
  {
    label: "WhatsApp",
    value: "Start a conversation",
    href: siteConfig.social.whatsapp,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.social.linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="section-shell border-t border-border bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          index="08"
          title="Contact"
          description="Have a project, technical need, collaboration idea, or professional opportunity? Let's start a conversation."
        />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
              Direct contact
            </p>

            <div className="mt-6 divide-y divide-border border-y border-border">
              {contactLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-6 rounded-sm py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div>
                      <p className="font-mono text-xs text-muted">
                        {link.label}
                      </p>

                      <p className="mt-1 text-sm font-medium text-foreground">
                        {link.value}
                      </p>
                    </div>

                    <span
                      className="text-muted transition-transform duration-150 group-hover:translate-x-1 group-hover:text-primary"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="text-sm leading-relaxed text-muted">
                Based in Kenya and open to practical projects, collaborations,
                technical work, and professional opportunities across IT and
                digital technology.
              </p>
            </div>
          </div>

          <div className="border border-border bg-background p-6 sm:p-8">
            <div className="mb-7">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                Send a message
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                Let&rsquo;s build something useful.
              </h3>

              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
                Tell me about your project, technical need, collaboration, or
                professional opportunity. A short description is enough to get
                the conversation started.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
