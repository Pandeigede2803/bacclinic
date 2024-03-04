const fs = require('fs');
const path = require('path');

// Adjust the import path as necessary for your project structure
const TreatmentSlug = require('./src/components/Json/TreatmentSlug');

// Use dynamic import for globby due to its ES module format
const globbyImport = import('globby');

(async () => {
  const globby = await globbyImport;
  const pages = await globby.globby([
    'src/pages/**/*{.js,.jsx}', // Adjust according to your src/pages structure
    '!src/pages/_*.js', // Exclude Next.js specific files like _app and _document
    '!src/pages/api', // Exclude API routes
    '!src/pages/404.js', // Exclude the custom 404 page
  ]);

  // Ensure SITE_URL is correctly set and trimmed
  const siteUrl = (process.env.SITE_URL || 'https://bacclinic.id').trim();

  // Generate sitemap entries for static pages
  const staticPagesSitemap = pages.map((page) => {
    const route = page
      .replace('src/pages', '')
      .replace('.js', '')
      .replace('.jsx', '')
      .replace('/index', ''); // Correct handling for the root path
    return `
      <url>
        <loc>${siteUrl}${route}</loc>
      </url>`;
  }).join('');

  // Generate sitemap entries for dynamic pages from TreatmentSlug
  const dynamicPagesSitemap = TreatmentSlug.map((treatment) => {
    return `
      <url>
        <loc>${siteUrl}/Services/${treatment.slug}</loc>
      </url>`;
  }).join('');

  // Concatenate and trim the sitemap content to ensure no leading whitespace
  const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPagesSitemap}
  ${dynamicPagesSitemap}
</urlset>
`.trim();

  // Write the sitemap.xml file to the public directory
  fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemapContent);

  console.log('Sitemap generated successfully!');
})();

