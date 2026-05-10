import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Freak Circus Guide — All 13 Endings, No Spoilers",
  description:
    "Play The Freak Circus and read the guide in the same place. Step-by-step routes for all 5 characters and 13 endings. Spoiler controls. Free, no signup.",
  keywords: [
    "the freak circus guide",
    "the freak circus endings",
    "the freak circus characters",
    "the freak circus walkthrough",
    "visual novel guide",
  ],
  openGraph: {
    title: "The Freak Circus Guide — All 13 Endings, No Spoilers",
    description:
      "Play and read the guide in the same place. 5 characters, 13 endings, spoiler controls.",
    url: "https://thefreakcircusguide.com",
    siteName: "The Freak Circus Guide",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Freak Circus Complete Guide — 5 characters, 13 endings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://thefreakcircusguide.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" translate="no">
      <body className="scanlines min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
