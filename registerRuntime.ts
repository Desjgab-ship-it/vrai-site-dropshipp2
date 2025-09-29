import type { Express } from "express";

export function registerRuntime(app: Express) {
  // GET /api/runtime - Returns only public environment values
  app.get("/api/runtime", (req, res) => {
    try {
      const runtimeConfig = {
        storeName: process.env.STORE_NAME || "YourBrand",
        currency: process.env.CURRENCY || "USD",
        ENABLE_CHECKOUT: process.env.ENABLE_CHECKOUT === "true" || true, // Enable checkout for testing
        SHOW_COMING_SOON: process.env.SHOW_COMING_SOON === "true" || false // Hide coming soon
      };

      res.json(runtimeConfig);
    } catch (error) {
      console.error("Error fetching runtime config:", error);
      res.status(500).json({ 
        message: "Error fetching runtime configuration" 
      });
    }
  });

  // Helper function to get base URL from environment or request
  const getBaseUrl = (req: any) => {
    return process.env.APP_BASE_URL || 
           process.env.BASE_URL || 
           `${req.protocol}://${req.get('host')}`;
  };

  // GET /robots.txt - Dynamic robots.txt with environment-driven sitemap URL
  app.get("/robots.txt", (req, res) => {
    const baseUrl = getBaseUrl(req);
    const robotsContent = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml`;
    
    res.type('text/plain');
    res.send(robotsContent);
  });

  // GET /sitemap.xml - Dynamic sitemap with environment-driven URLs
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = getBaseUrl(req);
    const currentDate = new Date().toISOString().split('T')[0] + 'T00:00:00+00:00';
    
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/features</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/reviews</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/suivi</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;
    
    res.type('application/xml');
    res.send(sitemapContent);
  });
}