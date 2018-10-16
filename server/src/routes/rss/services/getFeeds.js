import Promise from 'bluebird';
import RssParser from 'rss-parser';

const rssParser = new RssParser();

export default async (RssProviders, commonService) => {
  const results = [];
  const providers = await commonService.getAll(RssProviders);
  await Promise.all(
    providers.map(async provider => {
      if (!provider) {
        return;
      }
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
      results.push(result);
    })
  );
  return results;
};
