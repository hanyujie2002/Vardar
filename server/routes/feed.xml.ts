import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const domain = 'https://vardar-example.vercel.app/';

  let rssContent = '';

  rssContent += '<?xml version="1.0" encoding="UTF-8" ?>\n';
  rssContent += '<rss version="2.0">\n';

  rssContent += '<channel>';
  rssContent += '<title>Vardar</title>\n';

  const linkNode = `<link>${domain}</link>\n`;

  rssContent += linkNode;

  rssContent +=
    '<description>A personal blog framework built on Nuxt.js and Nuxt Content</description>\n';

  const articles = await serverQueryContent(event).find();

  articles.forEach((article) => {
    rssContent += '<item>\n';
    rssContent += `<title>${article.title}</title>\n`;
    rssContent += `<link>${article._path}</link>\n`;

    const description = article.description;

    rssContent += `<description>${description}</description>`;

    rssContent += `</item>`;
  });

  rssContent += '</channel>';
  rssContent += '</rss>';

  event.node.res.setHeader('Content-type', 'application/xml');
  return rssContent;
});
