"use client";

import { useEffect, useState } from "react";
import { navItems, cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a href="#home" className="font-display text-lg font-semibold text-foreground">
          Brian Kuria
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="#contact" variant="primary">
            Let&rsquo;s Connect
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded border border-border lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-transform duration-150",
                mobileOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-5 bg-foreground transition-opacity duration-150",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-0.5 w-5 bg-foreground transition-transform duration-150",
                mobileOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[65px] z-40 origin-top border-b border-border bg-background transition-all duration-200 lg:hidden",
          mobileOpen
            ? "visible opacity-100"
            : "invisible -translate-y-2 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <ButtonLink href="#contact" variant="primary" onClick={() => setMobileOpen(false)}>
              Let&rsquo;s Connect
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
