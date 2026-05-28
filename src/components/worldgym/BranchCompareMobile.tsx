"use client";

import { useState } from "react";
import {
  facilityCompareColumns,
  gymFacilityCompare,
} from "@/lib/worldgym";
import { FacilitySymbol } from "@/components/worldgym/FacilitySymbol";

const TAB_GYMS = gymFacilityCompare.map((gym) => ({
  id: gym.id,
  label:
    gym.id === "fitness"
      ? "一般館"
      : gym.name === "FITZONE"
        ? "FITZONE"
        : gym.name,
}));

export function BranchCompareMobile() {
  const [activeId, setActiveId] = useState(TAB_GYMS[0]?.id ?? "elite");
  const activeGym = gymFacilityCompare.find((g) => g.id === activeId);

  if (!activeGym) return null;

  return (
    <div className="md:hidden">
      <div className="-mx-4 overflow-x-auto scrollbar-none px-4 sm:-mx-6 sm:px-6">
        <div
          className="flex min-w-max gap-2 pb-1"
          role="tablist"
          aria-label="選擇館別"
        >
          {TAB_GYMS.map((tab) => {
            const selected = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(tab.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? "border-zinc-300 bg-zinc-100 text-zinc-900"
                    : "border-zinc-700 bg-transparent text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        className="mt-5 rounded-xl bg-zinc-900/60 px-5 py-5 sm:px-6"
      >
        <div className="mb-4 border-b border-zinc-800/80 pb-4">
          <p className="text-lg font-semibold text-white">{activeGym.name}</p>
          <p className="mt-1 text-xs text-zinc-500">{activeGym.tier}</p>
        </div>

        <ul className="space-y-0">
          {facilityCompareColumns.map((col) => (
            <li
              key={col.key}
              className="flex items-center justify-between gap-4 border-b border-zinc-800/50 py-3.5 last:border-b-0"
            >
              <span className="shrink-0 text-sm text-zinc-400">{col.label}</span>
              <FacilitySymbol value={activeGym[col.key]} />
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-3 text-center text-xs font-light text-zinc-500">
        ※ 點選標籤切換館別，查看完整設備 ○ ✕
      </p>
    </div>
  );
}
