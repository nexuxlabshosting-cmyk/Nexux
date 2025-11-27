const fs = require("fs");
const path = require("path");

// IMPORT YOUR DATA
const { articleData } = require("./src/data/ArticlesData.data.ts");
const { jobsData } = require("./src/components/data/jobs.ts");

// CONFIG
const baseUrl = "https://nexuxlabs.com";
const locales = ["en", "np"];
const staticRoutes = ["", "about", "contact-us", "blogs", "careers", "services", "team"];

function generateSitemap() {
  const urls = [];

  // Static Pages
  for (const locale of locales) {
    for (const route of staticRoutes) {
      const url = route ? `/${locale}/${route}` : `/${locale}`;
      urls.push(`${baseUrl}${url}`);
    }
  }

  // Blog pages
  const blogSlugs = articleData.map((b) => b.slug);
  for (const locale of locales) {
    for (const slug of blogSlugs) {
      urls.push(`${baseUrl}/${locale}/blogs/${slug}`);
    }
  }

  // Career pages
  const careerSlugs = jobsData.map((j) => j.slug);
  for (const locale of locales) {
    for (const slug of careerSlugs) {
      urls.push(`${baseUrl}/${locale}/careers/${slug}`);
    }
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  // Write file into /public
  fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), xml);

  console.log(" Generated public/sitemap.xml successfully.");
}

generateSitemap();
