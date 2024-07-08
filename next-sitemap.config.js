module.exports = {
  siteUrl: 'https://oazisvendeglo.hu',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => [
    await config.transform(config, '/etlap'),
    await config.transform(config, '/itallap'),
    await config.transform(config, '/galeria'),
    await config.transform(config, '/informaciok'),
    await config.transform(config, '/heti'),
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}