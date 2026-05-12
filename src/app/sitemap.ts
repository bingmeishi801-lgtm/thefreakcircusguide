export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://thefreakcircusguide.com";
  const characters = ["pierrot", "harlequin", "doctor", "jester", "ticket-taker", "columbina"];

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/guide`, lastModified: new Date() },
    { url: `${baseUrl}/walkthrough`, lastModified: new Date() },
    { url: `${baseUrl}/lore`, lastModified: new Date() },
    { url: `${baseUrl}/hidden-scenes`, lastModified: new Date() },
    { url: `${baseUrl}/endings`, lastModified: new Date() },

    { url: `${baseUrl}/tips`, lastModified: new Date() },
    { url: `${baseUrl}/bugs`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date() },
    ...characters.map((slug) => ({
      url: `${baseUrl}/characters/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
