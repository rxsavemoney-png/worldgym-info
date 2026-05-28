import Image from "next/image";
import Link from "next/link";
import { worldGymConfig } from "@/lib/worldgym";

type WorldGymLogoProps = {
  className?: string;
};

export function WorldGymLogo({ className = "" }: WorldGymLogoProps) {
  return (
    <Link
      href="#hero"
      className={`group flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
    >
      <Image
        src={worldGymConfig.logoSrc}
        alt=""
        width={0}
        height={0}
        priority
        sizes="160px"
        className="h-8 w-auto object-contain sm:h-9"
        aria-hidden
      />
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-sm font-black text-white sm:text-base">
          {worldGymConfig.brandName}
        </span>
        <span className="block truncate text-[10px] font-medium tracking-wide text-zinc-400 transition-colors group-hover:text-[#E31E24] sm:text-xs">
          {worldGymConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
