export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-6 text-ink/70">
      <span className="h-px w-16 sm:w-28 bg-ink/30" />
      <span className="font-script text-2xl">{children}</span>
      <span className="h-px w-16 sm:w-28 bg-ink/30" />
    </div>
  );
}
