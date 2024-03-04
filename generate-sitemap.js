const fs = require('fs');
const globby = require('globby'); // Ensure globby is installed
const TreatmentDatas = require('../bacproject/src/components/Json/TreatmentSlug'); // Adjust the path as necessary

(async () => {
  const pages = await globby([
    'src/pages/**/*{.js,.jsx}', // Adjust according to your src/pages structure
    '!src/pages/_*.js', // Exclude Next.js specific files
    '!src/pages/api', // Exclude API routes
    '!src/pages/404.js', // Exclude custom 404 page
  ]);

  // Generate static pages sitemap entries
  const staticPagesSitemap = pages
    .map((page) => {
      const path = page
        .replace('src/pages', '')
        .replace('.js', '')
        .replace('.jsx', '')
        .replace('/index', ''); // Corrected to handle the root path correctly
      const route = path === '' ? '' : path;
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
