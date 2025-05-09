<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="https://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap | Marek Zastko</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <style>
          body { font-family: system-ui, sans-serif; padding: 2rem; color: #333; background: #f9fafb; }
          h1 { font-size: 1.5rem; color: #2563eb; }
          table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
          th, td { padding: 0.5rem; border-bottom: 1px solid #ddd; text-align: left; }
          th { background: #e5e7eb; }
        </style>
      </head>
      <body>
        <h1>Sitemap for marekzastko.com</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="//sitemap:url">
            <tr>
              <td><xsl:value-of select="sitemap:loc" /></td>
              <td><xsl:value-of select="sitemap:lastmod" /></td>
              <td><xsl:value-of select="sitemap:changefreq" /></td>
              <td><xsl:value-of select="sitemap:priority" /></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>