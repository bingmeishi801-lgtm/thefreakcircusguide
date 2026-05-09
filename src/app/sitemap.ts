export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://thefreakcircusguide.com";
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date() },
  ];
}
