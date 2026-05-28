import {
  courseCategories,
  getCategoryAccent,
} from "@/lib/worldgym-course-catalog";
import { LineButton } from "@/components/worldgym/LineButton";

export function CourseCatalog() {
  return (
    <section
      id="course-catalog"
      className="scroll-mt-24 border-t border-zinc-800/80 bg-black py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Class Catalog
          </p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl md:text-4xl">
            多元團體課程完整課表
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
            五大課程系列，涵蓋伸展、舞蹈、心肺、飛輪與入門樂活，找到最適合你的訓練節奏
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {courseCategories.map((category, index) => {
            const accent = getCategoryAccent(category.accent);
            return (
              <details
                key={category.id}
                className={`group rounded-xl border border-zinc-800 bg-zinc-900 transition-colors open:border-zinc-700 ${accent.ring}`}
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                  <span
                    className={`h-3 w-3 shrink-0 rounded-full ${accent.dot}`}
                    aria-hidden
                  />
                  <span className="flex-1 text-left text-lg font-bold text-white sm:text-xl">
                    {category.title}
                  </span>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${accent.label}`}
                  >
                    {category.courses.length} 堂課
                  </span>
                  <svg
                    className="h-5 w-5 shrink-0 text-zinc-500 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <div
                  className={`border-t border-zinc-800/80 px-5 pb-5 sm:px-6 sm:pb-6 ${accent.border} border-l-4`}
                >
                  <ul className="mt-4 space-y-5">
                    {category.courses.map((course) => (
                      <li
                        key={course.id}
                        className="border-b border-zinc-800/50 pb-5 last:border-b-0 last:pb-0"
                      >
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="text-base font-bold text-white sm:text-lg">
                            {course.name}
                          </h3>
                          <span className="text-sm text-zinc-500">
                            ({course.nameEn})
                          </span>
                          {course.badge && (
                            <span className="rounded bg-orange-600/20 px-2 py-0.5 text-xs font-bold text-orange-400">
                              {course.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                          {course.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <LineButton size="lg">詢問課表與開課時間</LineButton>
        </div>
      </div>
    </section>
  );
}
