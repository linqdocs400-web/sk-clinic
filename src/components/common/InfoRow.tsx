import { Icon } from "./Icon";

export function InfoRow({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center border border-ink/25 text-ink">
        <Icon name={icon} className="w-4 h-4" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.3em] uppercase text-ink/55">{title}</div>
        <div className="mt-1.5 text-sm text-ink/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
