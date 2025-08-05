import fs from "fs";
import path from "path";

const baseUrl = "https://www.payforward.com.au";

const staticPages = [
    "/",
    "/faq",
    "/about",
    "/contact",
    "/docs",
    "/docs#pricing",
    "/docs#information",
    "/docs#tutorials",
    "/legal",
    "/legal#terms",
    "/legal#privacy",
    "/legal#cookies",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
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
console.log("✅ Sitemap generated.");
