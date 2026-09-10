import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string; // e.g. "02" — used only where content is genuinely sequential
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3 sm:mb-14",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent-dark">{index}</span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-prose text-base text-muted">{description}</p>
      ) : null}
    </div>
  );
}
