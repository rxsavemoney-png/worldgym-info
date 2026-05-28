import {
  branchSelectionGuide,
  facilityCompareColumns,
  gymFacilityCompare,
} from "@/lib/worldgym";
import { FacilitySymbol, SymbolLegend } from "@/components/worldgym/FacilitySymbol";

const HIGHLIGHT_ROW_IDS = new Set(["sport", "fitness"]);

function rowHighlightClass(id: string) {
  if (!HIGHLIGHT_ROW_IDS.has(id)) return "";
  return "bg-red-950/25 border-l-4 border-l-red-600";
}

function stickyCellBg(id: string, highlighted: boolean) {
  if (highlighted) return "bg-red-950/40 lg:bg-red-950/25";
  return "bg-zinc-900/95 lg:bg-transparent";
}

export function BranchCategories() {
  return (
    <section id="branches" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-black leading-snug text-white sm:text-3xl md:text-4xl">
            認識 World Gym 五大館別
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
            一眼比較五大館別設備差異，快速找到最適合你的訓練空間
          </p>
        </div>

        <div className="mt-8">
          <SymbolLegend />
        </div>

        <div className="relative mt-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl shadow-black/30 backdrop-blur-md">
            <div className="table-scroll-fade relative overflow-x-auto">
              <table className="w-full min-w-[56rem] border-collapse text-sm lg:min-w-full">
                <caption className="sr-only">
                  World Gym 五大館別設備符號對比表
                </caption>
                <thead>
                  <tr className="border-b border-zinc-800/90 bg-zinc-900/90">
                    <th
                      scope="col"
                      className="sticky left-0 z-20 min-w-[5.5rem] border-r border-zinc-800/80 bg-zinc-900/95 px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-zinc-500 sm:min-w-[6.5rem] sm:px-4 lg:static lg:min-w-[7.5rem] lg:border-r-0"
                    >
                      館別名稱
                    </th>
                    {facilityCompareColumns.map((col) => (
                      <th
                        key={col.key}
                        scope="col"
                        className="min-w-[5.5rem] px-2 py-4 text-center text-xs font-bold uppercase tracking-wider text-zinc-400 sm:min-w-[6rem] sm:px-3"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {gymFacilityCompare.map((gym) => {
                    const highlighted = HIGHLIGHT_ROW_IDS.has(gym.id);
                    return (
                      <tr
                        key={gym.id}
                        className={`border-b border-zinc-800/60 transition-colors hover:bg-zinc-800/30 ${rowHighlightClass(gym.id)}`}
                      >
                        <th
                          scope="row"
                          className={`sticky left-0 z-10 border-r border-zinc-800/60 px-3 py-5 text-left sm:px-4 lg:static lg:border-r-0 ${stickyCellBg(gym.id, highlighted)}`}
                        >
                          <span className="block font-black text-white">
                            {gym.name}
                          </span>
                          <span
                            className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold sm:text-xs ${
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
                        </th>
                        {facilityCompareColumns.map((col) => (
                          <td
                            key={`${gym.id}-${col.key}`}
                            className="px-2 py-5 sm:px-3"
                          >
                            <FacilitySymbol value={gym[col.key]} />
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="border-t border-zinc-800/80 px-4 py-3 text-center text-xs text-zinc-500 lg:hidden">
              表格可左右滑動查看更多館別
            </p>
          </div>

          <div
            className="table-scroll-hint pointer-events-none absolute right-0 top-8 z-30 flex h-[calc(100%-2rem)] w-14 items-center justify-end pr-1 lg:hidden"
            aria-hidden
          >
            <div className="flex h-full w-full items-center justify-center rounded-r-2xl bg-gradient-to-l from-zinc-950/95 via-zinc-950/50 to-transparent">
              <svg
                className="h-6 w-6 animate-pulse text-red-500/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm sm:p-8">
          <h3 className="text-lg font-black text-white sm:text-xl">
            教你怎麼選！
          </h3>
          <ul className="mt-6 space-y-4">
            {branchSelectionGuide.map((item) => (
              <li
                key={item.need}
                className="flex flex-col gap-2 rounded-xl border border-zinc-800/80 bg-zinc-950/50 px-4 py-4 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="flex-1 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {item.need}
                </span>
                <span className="shrink-0 text-sm font-bold text-red-400 sm:text-base">
                  <span className="mr-2 text-red-600" aria-hidden>
                    ➔
                  </span>
                  {item.pick}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
