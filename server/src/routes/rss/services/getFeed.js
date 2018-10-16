import Promise from 'bluebird';
import RssParser from 'rss-parser';

const rssParser = new RssParser();

export default async (RssProviders, commonService, id) => {
  const provider = await commonService.getOne(RssProviders, id);

  let result = { _id: provider._id, provider: provider.Provider, site: provider.Site, feeds: [] };
  await Promise.all(
    provider.RssUrl.map(async rssUrl => {
      try {
        let feed = await rssParser.parseURL(rssUrl.Url);
        result.feeds.push({ category: rssUrl.Category, data: feed });
      } catch (e) {
        return;
      }
      return;
    })
  );
  return result;
};
