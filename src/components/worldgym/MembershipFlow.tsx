import { membershipSteps, worldGymConfig } from "@/lib/worldgym";
import { LineButton } from "@/components/worldgym/LineButton";

type Step = (typeof membershipSteps)[number];

function StepCard({ step }: { step: Step }) {
  return (
    <li className="group relative flex flex-col">
      <div className="relative z-10 mx-auto flex h-14 w-14 shrink-0 items-center justify-center">
        <span
          className="absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-0 group-hover:animate-ping group-hover:opacity-30"
          aria-hidden
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#E31E24] bg-[#111111] text-xl font-bold text-white transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]">
          {step.step}
        </span>
      </div>

      <article className="relative z-10 mt-6 flex flex-1 flex-col rounded-2xl border border-gray-800 bg-zinc-900 p-6 text-center transition-all duration-300 group-hover:border-red-600/50 group-hover:shadow-[0_0_24px_rgba(220,38,38,0.15)] sm:p-7">
        <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {step.description}
        </p>
      </article>
    </li>
  );
}

export function MembershipFlow() {
  return (
    <section id="membership" className="scroll-mt-24 bg-[#111111] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full bg-red-950 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-500">
            STEP-BY-STEP
          </span>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            線上入會流程：簡單、方便，安全又快速！
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            className="membership-progress-line-h pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-[3px] lg:block"
            aria-hidden
          />
          <div
            className="membership-progress-line-v pointer-events-none absolute left-1/2 top-16 bottom-16 w-[3px] -translate-x-1/2 lg:hidden"
            aria-hidden
          />

          <ol className="relative grid gap-6 lg:grid-cols-4">
            {membershipSteps.map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </ol>
        </div>

        <div className="mt-14 text-center">
          <LineButton size="xl" pulse>
            線上申辦（導流至 LINE）
          </LineButton>
        </div>
      </div>
    </section>
  );
}

export function WorldGymFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          <p className="text-lg font-black text-white">聯絡專員</p>

          <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            <ContactItem
              label="電話"
              value={worldGymConfig.phone}
              href={`tel:${worldGymConfig.phone}`}
            />
            <ContactItem
              label="LINE ID"
              value={worldGymConfig.lineId}
              href={worldGymConfig.lineUrl}
            />
            <ContactItem
              label="Email"
              value={worldGymConfig.email}
              href={`mailto:${worldGymConfig.email}`}
              nowrap
            />
          </div>

          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} World Gym 專屬諮詢網
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  label,
  value,
  href,
  nowrap = false,
}: {
  label: string;
  value: string;
  href: string;
  nowrap?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group rounded-xl border border-gray-800 bg-zinc-900/50 px-4 py-4 transition-colors hover:border-[#E31E24]/50"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-[#E31E24]">
        {label}
      </p>
      <p
        className={`mt-1 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white ${
          nowrap ? "whitespace-nowrap text-xs sm:text-sm" : ""
        }`}
      >
        {value}
      </p>
    </a>
  );
}
