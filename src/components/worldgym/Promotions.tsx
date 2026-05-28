import { promotions } from "@/lib/worldgym";
import { LineButton } from "@/components/worldgym/LineButton";

export function Promotions() {
  return (
    <section id="promotions" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            最新活動優惠
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {promotions.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-800 bg-zinc-900/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#E31E24]/50"
            >
              <div className="mb-3 h-0.5 w-8 bg-[#E31E24]" aria-hidden />
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <LineButton size="lg">諮詢分店方案價格</LineButton>
        </div>
      </div>
    </section>
  );
}
