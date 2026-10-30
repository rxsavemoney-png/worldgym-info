import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "本站已下架",
  description: "World Gym 諮詢網站已停止服務。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className="world-gym-site min-h-screen overflow-x-hidden bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
