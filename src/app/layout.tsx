import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Freak Circus Guide — All 50 Endings, No Spoilers",
  description:
    "Play The Freak Circus and read the guide in the same place. Step-by-step routes for all 10 characters and 50 endings. Spoiler controls. Free, no signup.",
  keywords: [
    "the freak circus guide",
    "the freak circus endings",
    "the freak circus characters",
    "the freak circus walkthrough",
    "visual novel guide",
  ],
  openGraph: {
    title: "The Freak Circus Guide — All 50 Endings, No Spoilers",
    description:
      "Play and read the guide in the same place. 10 characters, 50 endings, spoiler controls.",
    url: "https://thefreakcircusguide.com",
    siteName: "The Freak Circus Guide",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
