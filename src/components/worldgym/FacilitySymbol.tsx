import type { FacilityStatus } from "@/lib/worldgym";

function SymbolYes() {
  return (
    <span
      className="facility-pearl inline-block h-7 w-7 shrink-0 rounded-full sm:h-8 sm:w-8"
      aria-hidden
    />
  );
}

function SymbolPartial() {
  return (
    <span
      className="inline-block h-0 w-0 shrink-0 border-x-[7px] border-b-[12px] border-x-transparent border-b-zinc-300 sm:border-x-[8px] sm:border-b-[14px]"
      aria-hidden
    />
  );
}

function SymbolNo() {
  return (
    <span
      className="text-lg font-light leading-none text-zinc-600 sm:text-xl"
      aria-hidden
    >
      ✕
    </span>
  );
}

export function FacilitySymbol({ value }: { value: FacilityStatus }) {
  return (
    <div className="group/symbol flex flex-col items-center justify-center gap-1.5 text-center">
      {value.type === "yes" && <SymbolYes />}
      {value.type === "partial" && <SymbolPartial />}
      {value.type === "no" && <SymbolNo />}
      {value.type === "partial" && (
        <span className="max-w-[6.5rem] text-xs leading-tight text-zinc-400">
          ({value.note})
        </span>
      )}
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

export function SymbolLegend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
      <span className="inline-flex items-center gap-2.5 text-sm text-zinc-400">
        <span className="facility-pearl h-6 w-6 rounded-full" aria-hidden />
        有
      </span>
      <span className="inline-flex items-center gap-2.5 text-sm text-zinc-400">
        <SymbolPartial />
        部分
      </span>
      <span className="inline-flex items-center gap-2.5 text-sm text-zinc-400">
        <SymbolNo />
        無
      </span>
    </div>
  );
}
