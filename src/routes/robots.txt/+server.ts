import { config } from "$lib/config";

const website = config.url;

const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${website}/sitemap.xml

# Social Media Crawlers
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /
`.trim();

export async function GET() {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "max-age=0, s-maxage=3600"
    }
  });
}