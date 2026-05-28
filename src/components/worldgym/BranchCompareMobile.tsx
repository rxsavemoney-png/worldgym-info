import {
  facilityCompareColumns,
  facilityCompareMobileLabels,
  gymFacilityCompare,
} from "@/lib/worldgym";
import {
  CompareStatusText,
  SymbolLegend,
} from "@/components/worldgym/FacilitySymbol";

function displayGymTitle(name: string, id: string) {
  if (id === "fitness") return "一般館";
  return name.replace(" / Fitness", "");
}

function GymVerticalCard({
  gym,
}: {
  gym: (typeof gymFacilityCompare)[number];
}) {
  return (
    <article className="bg-[#FBFBFA] px-5 py-7 sm:px-6">
      <header>
        <h3 className="text-xl font-bold tracking-tight text-zinc-900">
          {displayGymTitle(gym.name, gym.id)}
        </h3>
        <span className="mt-2 inline-block rounded border border-zinc-300 px-2 py-0.5 text-xs font-normal text-zinc-500">
          {gym.tier}
        </span>
      </header>

      <ul className="mt-6 divide-y divide-zinc-100">
        {facilityCompareColumns.map((col) => (
          <li
            key={col.key}
            className="flex items-start justify-between gap-6 py-3.5 first:pt-0"
          >
            <span className="shrink-0 pt-0.5 text-sm text-zinc-500">
              {facilityCompareMobileLabels[col.key]}
            </span>
            <div className="max-w-[58%] shrink-0">
              <CompareStatusText
                value={gym[col.key]}
                align="end"
                theme="light"
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function BranchCompareMobile() {
  return (
    <div className="block md:hidden">
      <SymbolLegend theme="light" />

      <div className="mt-8 flex flex-col gap-8">
        {gymFacilityCompare.map((gym) => (
          <GymVerticalCard key={gym.id} gym={gym} />
        ))}
      </div>
    </div>
  );
}
