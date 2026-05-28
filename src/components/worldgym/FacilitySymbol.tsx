import type { FacilityStatus } from "@/lib/worldgym";

type CompareStatusTextProps = {
  value: FacilityStatus;
  align?: "center" | "end";
  /** 淺色卡片用 light；深色表格用 dark */
  theme?: "light" | "dark";
};

const glyphStyles = {
  light: {
    yes: "text-zinc-800",
    partial: "text-zinc-600",
    note: "text-xs font-light leading-snug text-zinc-400",
    no: "text-zinc-300",
  },
  dark: {
    yes: "text-white",
    partial: "text-zinc-400",
    note: "text-xs font-light leading-snug text-zinc-500",
    no: "text-zinc-500",
  },
} as const;

function IconCheck({ className }: { className: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconTriangle({ className }: { className: string }) {
  return (
    <svg
      className={`h-4 w-5 shrink-0 ${className}`}
      viewBox="0 0 20 18"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M10 2 L18 16 H2 Z" />
    </svg>
  );
}

function IconCross({ className }: { className: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function CompareStatusText({
  value,
  align = "center",
  theme = "light",
}: CompareStatusTextProps) {
  const colors = glyphStyles[theme];
  const alignClass =
    align === "end"
      ? "items-end text-right"
      : "items-center text-center";

  if (value.type === "yes") {
    return (
      <span className={`inline-flex ${align === "end" ? "justify-end" : "justify-center"}`}>
        <IconCheck className={colors.yes} />
      </span>
    );
  }

  if (value.type === "partial") {
    return (
      <div className={`flex flex-col gap-1 ${alignClass}`}>
        <IconTriangle className={colors.partial} />
        <span className={colors.note}>({value.note})</span>
      </div>
    );
  }

  return (
    <span className={`inline-flex ${align === "end" ? "justify-end" : "justify-center"}`}>
      <IconCross className={colors.no} />
    </span>
  );
}

export function FacilitySymbol({ value }: { value: FacilityStatus }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <CompareStatusText value={value} align="center" theme="dark" />
      <span className="sr-only">
        {value.type === "yes"
          ? "有提供"
          : value.type === "partial"
            ? `部分提供：${value.note}`
            : "無"}
      </span>
    </div>
  );
}

function LegendItem({
  icon,
  label,
  labelClass,
}: {
  icon: React.ReactNode;
  label: string;
  labelClass: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-zinc-400">
      {icon}
      <span className={labelClass}>{label}</span>
    </span>
  );
}

export function SymbolLegend({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const colors = glyphStyles[theme];
  const labelMuted = theme === "light" ? "text-zinc-500" : "text-zinc-400";

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
      <LegendItem
        icon={<IconCheck className={colors.yes} />}
        label="有"
        labelClass={labelMuted}
      />
      <LegendItem
        icon={<IconTriangle className={colors.partial} />}
        label="部分"
        labelClass={labelMuted}
      />
      <LegendItem
        icon={<IconCross className={colors.no} />}
        label="無"
        labelClass={colors.no}
      />
    </div>
  );
}
