import type { Metadata } from "next";
import { worldGymConfig } from "@/lib/worldgym";
import "./globals.css";

export const metadata: Metadata = {
  title: `${worldGymConfig.brandName} ${worldGymConfig.tagline} | 線上入會・方案諮詢`,
  description:
    "World Gym 專屬諮詢網 — 超越極限，重新定義你的體態。線上入會、方案諮詢、LINE 預約參觀，全台據點任你選。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className="world-gym-site min-h-screen scroll-pt-20 overflow-x-hidden bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
