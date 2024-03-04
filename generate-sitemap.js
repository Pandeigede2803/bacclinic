const fs = require('fs');
const path = require('path');
const TreatmentDatas = require('./path/to/TreatmentSlug'); // Adjust the path as necessary

// Use dynamic import for globby
const globbyImport = import('globby');

(async () => {
  const globby = await globbyImport;
  const pages = await globby.globby([
    'src/pages/**/*{.js,.jsx}', // Adjust according to your src/pages structure
    '!src/pages/_*.js', // Exclude Next.js specific files
    '!src/pages/api', // Exclude API routes
    '!src/pages/404.js', // Exclude custom 404 page
  ]);

  // Generate static pages sitemap entries
  const staticPagesSitemap = pages
    .map((page) => {
      const route = page
        .replace('src/pages', '')
        .replace('.js', '')
        .replace('.jsx', '')
        .replace('/index', ''); // Corrected to handle the root path correctly
      return `
        <url>
          <loc>${`${process.env.SITE_URL}${route}`}</loc>
        </url>
      `;
    })
    .join('');

  // Generate dynamic pages sitemap entries from TreatmentDatas
  const dynamicPagesSitemap = TreatmentDatas
    .map((treatment) => {
      return `
        <url>
          <loc>${`${process.env.SITE_URL}/Services/${treatment.slug}`}</loc>
        </url>
      `;
    })
    .join('');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPagesSitemap}
      ${dynamicPagesSitemap}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
