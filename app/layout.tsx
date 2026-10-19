import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "codegalaxy.dev";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Code Galaxy — Shakil Ahamed",
    description: "Portfolio of Shakil Ahamed, an IT student and aspiring full-stack developer building useful experiences with Angular, Python, AI, IoT, and modern web technologies.",
    openGraph: {
      title: "Code Galaxy — Shakil Ahamed",
      description: "IT student and aspiring full-stack developer building useful digital experiences with Angular and modern technologies.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Code Galaxy — Shakil Ahamed",
      description: "IT student and aspiring full-stack developer building useful digital experiences.",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
