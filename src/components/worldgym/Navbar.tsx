"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, worldGymConfig } from "@/lib/worldgym";
import { LINE_GREEN } from "@/components/worldgym/LineButton";
import { WorldGymLogo } from "@/components/worldgym/WorldGymLogo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-800/80 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.75rem] sm:gap-4 sm:px-6 lg:px-8">
        <WorldGymLogo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800/60 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={worldGymConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-4 py-2 text-sm font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-95 md:inline-flex md:px-5 md:py-2.5"
            style={{ backgroundColor: LINE_GREEN }}
          >
            LINE 預約參觀
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition-colors hover:bg-zinc-800 lg:hidden"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-800 bg-black/95 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={worldGymConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center rounded-full py-3 text-center font-bold text-white"
              style={{ backgroundColor: LINE_GREEN }}
            >
              LINE 預約參觀
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
