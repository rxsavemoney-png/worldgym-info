import { feeNotes, pricingPlans } from "@/lib/worldgym";
import { LineButton } from "@/components/worldgym/LineButton";

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#111111] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E31E24]">
            Pricing & Details
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            方案選擇與收費說明
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            依你的運動習慣與生活型態，選擇最適合的會籍方案
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "border-[#E31E24] bg-gradient-to-b from-[#E31E24]/10 to-zinc-900 shadow-xl shadow-[#E31E24]/10"
                  : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#E31E24] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  最受歡迎
                </span>
              )}
              <h3 className="text-xl font-black text-white">{plan.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#E31E24]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#E31E24]/30 bg-[#E31E24]/5 p-6 sm:p-8">
          <p className="text-base font-bold leading-relaxed text-[#E31E24] sm:text-lg">
            需綁定「信用卡/簽帳金融卡」每月自動授權轉帳扣款
            <span className="block mt-1 text-sm font-semibold text-zinc-300">
              （綁定簽帳金融卡月費需多 100 元/月）
            </span>
          </p>

          <ul className="mt-8 space-y-3">
            {feeNotes.map((note) => (
              <li
                key={note.term}
                className="flex gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-5 py-4 text-sm leading-relaxed text-zinc-300 sm:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E31E24]" aria-hidden />
                <span>
                  <strong className="font-bold text-white">{note.term}</strong>
                  <span className="text-zinc-400">（{note.detail}）</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <LineButton size="lg">方案諮詢</LineButton>
        </div>
      </div>
    </section>
  );
}
