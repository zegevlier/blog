import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `
User-Agent: AdsBot-Google-Mobile
User-Agent: AdsBot-Google
User-Agent: AdsBot-Google-Mobile-Apps
User-Agent: GPTBot
User-agent: CCBot
User-Agent: Google-Extended
Disallow: /

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
