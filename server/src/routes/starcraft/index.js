import express from 'express';

export default (StarcraftMaps, StarcraftCampaigns, StarcraftMods, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  /*Starcraft Map Routing*/
  router.get(
    '/maps',
    wrap(async (req, res, next) => {
      const maps = await commonService.getAll(StarcraftMaps);
      res.send(maps);
    })
  );

  router.post(
    '/map',
    wrap(async ({ files, body }, res, next) => {
      const uri = commonService.uploadArchive(files, './public/Starcraft/Maps', 'File');
      if (uri) {
        body.Uri = uri;
        body.Name = files.File.name.split('.')[0].trim();
      }
      const map = await commonService.create(StarcraftMaps, body, ['Tipntrick']);
      res.send(map);
    })
  );

  router.put(
    '/map',
    wrap(async ({ files, body }, res, next) => {
      const uri = commonService.uploadArchive(files, './public/Starcraft/Maps', 'File');
      if (uri) {
        body.Uri = uri;
        body.Name = files.File.name.split('.')[0].trim();
      }
      const map = await commonService.update(StarcraftMaps, body, ['Tipntrick'], ['Uri']);
      res.send(map);
    })
  );

  router.delete(
    '/map/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(StarcraftMaps, id, ['Uri']);
      res.send(result);
    })
  );

  router.get(
    '/search_map',
    wrap(async ({ query }, res, next) => {
      const maps = await commonService.search(StarcraftMaps, query);
      res.send(maps);
    })
  );

  /*Starcraft Campaign Routing*/
  router.get(
    '/campaigns',
    wrap(async (req, res, next) => {
      const campaigns = await commonService.getAll(StarcraftCampaigns, { Description: false, HTML: false, CSS: false });
      res.send(campaigns);
    })
  );

  router.get(
    '/campaign/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const campaign = await commonService.getOne(StarcraftCampaigns, id);
      res.send(campaign);
    })
  );

  router.post(
    '/campaign',
    wrap(async ({ files, body }, res, next) => {
      const uri = commonService.uploadArchive(files, './public/Starcraft/Campaigns', 'File');
      if (uri) {
        body.Uri = uri;
        body.Name = files.File.name.split('.')[0].trim();
      }
      const campaign = await commonService.create(StarcraftCampaigns, body);
      res.send(campaign);
    })
  );

  router.put(
    '/campaign',
    wrap(async ({ files, body }, res, next) => {
      const uri = commonService.uploadArchive(files, './public/Starcraft/Campaigns', 'File');
      if (uri) {
        body.Uri = uri;
        body.Name = files.File.name.split('.')[0].trim();
      }
      const campaign = await commonService.update(StarcraftCampaigns, body, null, ['Uri']);
      res.send(campaign);
    })
  );

  router.delete(
    '/campaign/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(StarcraftCampaigns, id, ['Uri']);
      res.send(result);
    })
  );

  router.get(
    '/search_campaign',
    wrap(async (req, res, next) => {
      const maps = await commonService.search(StarcraftCampaigns, req.query, {
        Description: false,
        Introduction: false,
        Uri: false
      });
      res.send(maps);
    })
  );

  /*Starcraft Mod Routing*/
  router.get(
    '/mods',
    wrap(async (req, res, next) => {
      const mods = await commonService.getAll(StarcraftMods, { Description: false, Introduction: false });
      res.send(mods);
    })
  );

  router.get(
    '/mod/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const mod = await commonService.getOne(StarcraftMods, id);
      res.send(mod);
    })
  );

  router.post(
    '/mod',
    wrap(async ({ body }, res, next) => {
      const mod = await commonService.create(StarcraftMods, body);
      res.send(mod);
    })
  );

  router.put(
    '/mod',
    wrap(async ({ body }, res, next) => {
      const mod = await commonService.update(StarcraftMods, body);
      res.send(mod);
    })
  );

  router.delete(
    '/mod/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(StarcraftMods, req.params.id);
      res.send(result);
    })
  );

  router.get(
    '/search_mod',
    wrap(async ({ query }, res, next) => {
      const mods = await commonService.search(StarcraftMods, query, { Description: false, Introduction: false });
      res.send(mods);
    })
  );

  return router;
};
