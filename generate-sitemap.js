const fs = require('fs');
const path = require('path');

// Import the slugs for treatments and articles. Replace with the actual paths to your data.
const TreatmentSlug = require('./src/components/Json/TreatmentSlug');
const ArticleJson = require('./src/components/Json/ArticleJson');;

// Use dynamic import for globby due to its ES module format
const globbyImport = import('globby');

(async () => {
  const globby = await globbyImport;
  const pages = await globby.globby([
    'src/pages/**/*{.js,.jsx}', // Adjust according to your src/pages structure
    '!src/pages/_*.js', // Exclude Next.js specific files like _app and _document
    '!src/pages/api', // Exclude API routes
    '!src/pages/404.js', // Exclude the custom 404 page
    // Add any other pages or patterns you wish to exclude
  ]);

  // Ensure SITE_URL is correctly set and trimmed
  const siteUrl = (process.env.SITE_URL || 'https://bacclinic.id').trim();

  // Generate sitemap entries for static pages
  const staticPagesSitemap = pages.map((page) => {
    const route = page
      .replace('src/pages', '')
      .replace(/\.js$/, '')
      .replace(/\.jsx$/, '')
      .replace('/index', '') // Correct handling for the root path
      .replace(/\[.*\]/, ''); // Remove any Next.js dynamic path segments
    if (route === '') return ''; // Skip if the route is empty after replacement
    return `
      <url>
        <loc>${siteUrl}${route === '/home' ? '' : route}</loc>
      </url>`;
  }).join('');

  // Generate sitemap entries for dynamic treatment pages
  const dynamicTreatmentSitemap = TreatmentSlug
    .filter(t => t.slug) // Ensure there is a slug property
    .map((treatment) => {
      const slug = treatment.slug.replace(/x$/, ''); // Remove trailing 'x' from slug
      return `
        <url>
          <loc>${siteUrl}/Services/${encodeURIComponent(slug)}</loc>
        </url>`;
    }).join('');

  // Generate sitemap entries for dynamic article pages
  const dynamicArticleSitemap = ArticleJson
    .filter(a => a.slug) // Ensure there is a slug property
    .map((article) => {
      const slug = article.slug.replace(/x$/, ''); // Remove trailing 'x' from slug
      return `
        <url>
          <loc>${siteUrl}/Article/${encodeURIComponent(slug)}</loc>
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

  // Write the sitemap.xml file to the public directory
  fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemapContent);

  console.log('Sitemap generated successfully!');
})();
