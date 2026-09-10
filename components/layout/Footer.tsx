import { navItems } from "@/lib/utils";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  const availableLinks = socialLinks.filter((link) => !link.placeholder);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-6 py-14 sm:px-8 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold text-foreground">
            Brian Kuria
          </p>

          <p className="mt-2 text-sm text-muted">
            IT &amp; Tech | Digital Solutions
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <div>
            <p className="font-mono text-xs text-muted">Navigation</p>

            <ul className="mt-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {availableLinks.length > 0 && (
            <div>
              <p className="font-mono text-xs text-muted">Elsewhere</p>

              <ul className="mt-3 flex flex-col gap-2">
                {availableLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.label === "Email" ? undefined : "_blank"}
                      rel={
                        link.label === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="text-sm text-foreground hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-content px-6 py-5 text-xs text-muted sm:px-8">
          &copy; {year} Brian Kuria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
