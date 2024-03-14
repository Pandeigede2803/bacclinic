const fs = require('fs');
const path = require('path');

// Import the slugs for treatments and articles
const TreatmentSlug = require('./src/components/Json/TreatmentSlug');
const ArticleSlug = require('./src/components/Json/ArticleJson'); // Replace with your actual path

const globbyImport = import('globby');

(async () => {
  const globby = await globbyImport;
  const pages = await globby.globby([
    // ... your globby setup remains the same
  ]);

  // ... the rest of the setup remains the same

  // Generate sitemap entries for dynamic treatment pages
  const dynamicTreatmentSitemap = TreatmentSlug.map((treatment) => {
    return `
      <url>
        <loc>${siteUrl}/Services/${encodeURIComponent(treatment.slug)}</loc>
      </url>`;
  }).join('');

  // Generate sitemap entries for dynamic article pages
  const dynamicArticleSitemap = ArticleSlug.map((article) => {
    return `
      <url>
        <loc>${siteUrl}/Article/${encodeURIComponent(article.slug)}</loc>
      </url>`;
  }).join('');

  // Concatenate all parts of the sitemap
  const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPagesSitemap}
  ${dynamicTreatmentSitemap}
  ${dynamicArticleSitemap}
</urlset>
`.trim();

  // Write the sitemap.xml to the public directory
  fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemapContent);

  console.log('Sitemap generated successfully!');
})();
