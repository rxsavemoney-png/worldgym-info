"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/lib/worldgym";
import { LineButton } from "@/components/worldgym/LineButton";

const INTERVAL_MS = 3000;
const FADE_MS = 800;
const SWIPE_THRESHOLD_PX = 48;
const SLIDE_COUNT = heroSlides.length;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const scheduleAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    scheduleAutoplay();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [scheduleAutoplay]);

  const handleManualNav = useCallback(
    (action: "next" | "prev" | number) => {
      if (typeof action === "number") {
        goTo(action);
      } else if (action === "next") {
        goTo(activeIndex + 1);
      } else {
        goTo(activeIndex - 1);
      }
      scheduleAutoplay();
    },
    [activeIndex, goTo, scheduleAutoplay]
  );

  const handleTouchStart = (clientX: number) => {
    touchStartX.current = clientX;
  };

  const handleTouchEnd = (clientX: number) => {
    const deltaX = clientX - touchStartX.current;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
    handleManualNav(deltaX < 0 ? "next" : "prev");
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[min(100svh,880px)] items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 touch-pan-y"
        onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
      >
        <div className="relative h-full min-h-[min(100svh,880px)] w-full">
          {heroSlides.map((slide, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              draggable={false}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover select-none"
              style={{
                opacity: index === activeIndex ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
                zIndex: index === activeIndex ? 2 : 1,
                pointerEvents: index === activeIndex ? "auto" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3] bg-black/60" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-black via-transparent to-black/30"
        aria-hidden
      />

      <button
        type="button"
        onClick={() => handleManualNav("prev")}
        aria-label="上一張輪播圖"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-[#E31E24]/60 hover:bg-black/60 sm:left-6 sm:h-12 sm:w-12"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => handleManualNav("next")}
        aria-label="下一張輪播圖"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-[#E31E24]/60 hover:bg-black/60 sm:right-6 sm:h-12 sm:w-12"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          超越極限，重新定義你的體態
        </h1>
        <div className="pointer-events-auto mt-10 flex justify-center">
          <LineButton size="xl" pulse>
            點我加 LINE 預約參觀
          </LineButton>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="輪播圖片指示器"
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`第 ${index + 1} 張：${slide.alt}`}
            onClick={() => handleManualNav(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-white"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
