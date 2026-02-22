/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aitoolshub.com",
  generateRobotsTxt: true,
  outDir: "./out",
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
    additionalSitemaps: ["https://aitoolshub.com/sitemap.xml"],
  },
};
