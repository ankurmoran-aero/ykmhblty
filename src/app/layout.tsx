import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b10",
};

export const metadata: Metadata = {
  title: "ykmhblty | Modern Digital Experience",
  description: "A state-of-the-art interactive digital experience crafted with Next.js, Framer Motion, and exclusive typography. Optimized for Vercel edge deployment.",
  keywords: ["Modern Web", "Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
  authors: [{ name: "Ankur Moran" }],
  openGraph: {
    title: "ykmhblty | Modern Digital Experience",
    description: "Ultra-smooth transitions, exclusive typography, and responsive glassmorphic layout.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#090a0f] text-slate-100 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
