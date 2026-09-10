export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded border border-border bg-surface px-3 py-1.5 text-sm text-foreground">
      {label}
    </span>
  );
}
