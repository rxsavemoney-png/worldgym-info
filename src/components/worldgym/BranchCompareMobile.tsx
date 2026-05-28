"use client";

import { useState } from "react";
import {
  facilityCompareColumns,
  facilityCompareMobileLabels,
  gymFacilityCompare,
} from "@/lib/worldgym";
import {
  CompareStatusText,
  SymbolLegend,
} from "@/components/worldgym/FacilitySymbol";

const HIGHLIGHT_ROW_IDS = new Set(["sport", "fitness"]);

const TABS = gymFacilityCompare.map((gym) => ({
  id: gym.id,
  label:
    gym.id === "fitness"
      ? "一般館"
      : gym.name === "FITZONE"
        ? "FITZONE"
        : gym.name,
}));

function displayGymTitle(name: string, id: string) {
  if (id === "fitness") return "一般館";
  return name.replace(" / Fitness", "");
}

function GymVerticalCard({
  gym,
}: {
  gym: (typeof gymFacilityCompare)[number];
}) {
  const highlighted = HIGHLIGHT_ROW_IDS.has(gym.id);

  return (
    <article
      className={`rounded-xl border border-zinc-800 bg-zinc-900/80 px-5 py-6 sm:px-6 ${
        highlighted ? "border-l-4 border-l-red-600 bg-red-950/25" : ""
      }`}
    >
      <header>
        <h3 className="text-lg font-black text-white sm:text-xl">
          {displayGymTitle(gym.name, gym.id)}
        </h3>
        <span
          className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold sm:text-xs ${
            highlighted
              ? "bg-red-600/20 text-red-400"
              : "bg-zinc-800 text-zinc-400"
          }`}
        >
          {gym.tier}
          {highlighted && (
            <span className="ml-1.5 text-red-300">推薦</span>
          )}
        </span>
      </header>

      <ul className="mt-6 divide-y divide-zinc-800/60">
        {facilityCompareColumns.map((col) => (
          <li
            key={col.key}
            className="flex items-start justify-between gap-6 py-3.5 first:pt-0"
          >
            <span className="shrink-0 pt-0.5 text-sm text-zinc-400">
              {facilityCompareMobileLabels[col.key]}
            </span>
            <div className="max-w-[58%] shrink-0">
              <CompareStatusText
                value={gym[col.key]}
                align="end"
                theme="dark"
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function BranchCompareMobile() {
  const [activeId, setActiveId] = useState(TABS[0]?.id ?? "elite");
  const activeGym = gymFacilityCompare.find((g) => g.id === activeId);

  return (
    <div className="block md:hidden">
      <SymbolLegend />

      <div className="-mx-1 mt-6 overflow-x-auto scrollbar-none">
        <div
          className="flex min-w-max gap-2 pb-1"
          role="tablist"
          aria-label="選擇館別"
        >
          {TABS.map((tab) => {
            const selected = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(tab.id)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  selected
                    ? "border-zinc-600 bg-zinc-800 text-white"
                    : "border-zinc-700 bg-transparent text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeGym && (
        <div className="mt-5" role="tabpanel">
          <GymVerticalCard gym={activeGym} />
        </div>
      )}

      <p className="mt-4 text-center text-xs text-zinc-500">
        ※ 點選上方標籤切換館別
      </p>
    </div>
  );
}
