import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Freak Circus Guide",
  url: "https://thefreakcircusguide.com",
  description: "Fan-made guide for The Freak Circus by Garula. Character routes, endings, and tips for the horror visual novel.",
  inLanguage: "en",
  isBasedOn: {
    "@type": "VideoGame",
    name: "The Freak Circus",
    author: { "@type": "Person", name: "Garula" },
    genre: ["Horror", "Visual Novel"],
    url: "https://garula.itch.io/the-freak-circus",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://thefreakcircusguide.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="scanlines min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
