import express from 'express';

import getFeeds from './services/getFeeds';
import getFeed from './services/getFeed';

export default (RssProviers, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get(
    '/feeds',
    wrap(async (req, res, next) => {
      const feeds = await getFeeds(RssProviers, commonService);
      res.send(feeds);
    })
  );

  router.get(
    '/feed/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const feed = await getFeed(RssProviers, commonService, id);
      res.send(feed);
    })
  );

  router.get(
    '/providers',
    wrap(async ({ query }, res, next) => {
      let regexQuery = {};
      if (query.Provider) {
        regexQuery.Provider = { $regex: query.Provider };
      }
      if (query.Category) {
        regexQuery['RssUrl.Category'] = { $in: query.Category.split(',') };
      }
      const providers = await RssProviers.find(regexQuery);
      res.send(providers);
    })
  );

  router.post(
    '/provider',
    wrap(async ({ body }, res, next) => {
      const provider = await commonService.create(RssProviers, body);
      res.send(provider);
    })
  );

  router.put(
    '/provider',
    wrap(async ({ body }, res, next) => {
      const provider = await commonService.update(RssProviers, body);
      res.send(provider);
    })
  );

  router.delete(
    '/provider/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(RssProviers, id);
      res.send(result);
    })
  );

  return router;
};
