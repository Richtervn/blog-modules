import RssParser from 'rss-parser';

const rssParser = new RssParser();

export default async url => {
  try {
    let feed = await rssParser.parseURL(url);
    return feed;
  } catch (e) {
    return e;
  }
};
