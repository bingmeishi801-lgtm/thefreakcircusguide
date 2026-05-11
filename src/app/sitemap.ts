export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://thefreakcircusguide.com";
  const characters = ["luka", "vesper", "kazimir", "nyx", "dmitri"];

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date() },
    ...characters.map((slug) => ({
      url: `${baseUrl}/characters/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
