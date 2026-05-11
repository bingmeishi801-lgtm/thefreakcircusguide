import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Freak Circus Guide — Characters, Endings & Walkthrough",
  description:
    "Fan-made guide for The Freak Circus by Garula. Character routes, endings, and tips for the horror visual novel. Updated as the game develops.",
  keywords: [
    "the freak circus guide",
    "the freak circus endings",
    "the freak circus characters",
    "the freak circus walkthrough",
    "visual novel guide",
    "garula",
  ],
  openGraph: {
    title: "The Freak Circus Guide — Characters, Endings & Walkthrough",
    description:
      "Fan-made guide for The Freak Circus. Character routes, endings, and tips. Updated as the game develops.",
    url: "https://thefreakcircusguide.com",
    siteName: "The Freak Circus Guide",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Freak Circus Guide — Fan-made walkthrough for the horror visual novel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://thefreakcircusguide.com"),
  alternates: {
    canonical: "https://thefreakcircusguide.com",
  },
  icons: {
    icon: "/favicon.svg",
  },
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
