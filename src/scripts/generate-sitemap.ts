import fs from "fs";
import path from "path";

const baseUrl = "https://www.payforward.com.au";

const staticPages: Record<ALL_ROUTES, null> = {
    "/": null,
    "/faq": null,
    "/about": null,
    "/contact": null,
    "/docs": null,
    "/legal": null,
    "/docs/quick-start": null,
    "/docs/information": null,
    "/docs/tutorials": null,
    "/docs/pricing": null,
    "/docs/information/payments": null,
    "/docs/information/onboarding": null,
    "/docs/information/security": null,
    "/docs/information/listings": null,
    "/docs/information/ratings": null,
    "/docs/information/search": null,
    "/docs/information/verifications": null,
    "/legal/privacy": null,
    "/legal/terms": null,
    "/legal/cookies": null,
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(staticPages)
      .map((page) => {
          return `<url>
  <loc>${baseUrl}${page}</loc>
  <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  <priority>${page === "/" ? "1.0" : "0.7"}</priority>
</url>`;
      })
      .join("\n")}
</urlset>`;

fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap);
console.log(`✅ Sitemap with ${Object.keys(staticPages).length} URLs generated.`);
