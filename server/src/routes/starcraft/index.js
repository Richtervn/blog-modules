import express from 'express';
import uploadMap from './services/uploadMap';
import addMap from './services/addMap';
import updateMap from './services/updateMap';
import uploadCampaign from './services/uploadCampaign';

export default (StarcraftMaps, StarcraftCampaigns, StarcraftMods, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get(
    '/list_map',
    wrap(async (req, res, next) => {
      const maps = await commonService.getAll(StarcraftMaps);
      res.send(maps);
    })
  );

  router.get(
    '/list_campaign',
    wrap(async (req, res, next) => {
      const campaigns = await StarcraftCampaigns.find(
        {},
        { Description: false, Introduction: false, Uri: false }
      );
      res.send(campaigns);
    })
  );

  router.get(
    '/list_mod',
    wrap(async (req, res, next) => {
      const mods = await StarcraftMods.find({}, { Description: false, Introduction: false });
      res.send(mods);
    })
  );

  router.get(
    '/campaign/:id',
    wrap(async (req, res, next) => {
      const campaign = await commonService.getOne(StarcraftCampaigns, req.params.id);
      res.send(JSON.stringify(campaign));
    })
  );

  router.get(
    '/mod/:id',
    wrap(async (req, res, next) => {
      const mod = await commonService.getOne(StarcraftMods, req.params.id);
      res.send(mod);
    })
  );

  router.post(
    '/add_map',
    wrap(async (req, res, next) => {
      const body = await uploadMap(req, res);
      const map = await addMap(StarcraftMaps, body);
      res.send(map);
    })
  );

  router.post(
    '/add_campaign',
    wrap(async (req, res, next) => {
      const body = await uploadCampaign(req, res);
      body.Introduction = Buffer.from(body.Introduction);
      const campaign = await commonService.create(StarcraftCampaigns, body);
      delete campaign.Introduction;
      delete campaign.Uri;
      delete campaign.Description;
      res.send(campaign);
    })
  );

  router.post(
    '/add_mod',
    wrap(async (req, res, next) => {
      const mod = await commonService.create(StarcraftMods, body);
      res.send(mod);
    })
  );

  router.put(
    '/edit_map',
    wrap(async (req, res, next) => {
      const body = await uploadMap(req, res);
      const map = await updateMap(StarcraftMaps, body);
      res.send(map);
    })
  );

  router.put(
    '/edit_campaign',
    wrap(async (req, res, next) => {
      const campaign = await commonService.update(StarcraftCampaigns, body);
      res.send(campaign);
    })
  );

  router.put(
    '/edit_mod',
    wrap(async (req, res, next) => {
      const mod = await commonService.update(StarcraftMods, body);
      res.send(mod);
    })
  );

  router.delete(
    '/remove_map/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(StarcraftMaps, req.params.id);
      res.send(id);
    })
  );

  router.delete(
    '/remove_mod/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(StarcraftMods, req.params.id);
      res.send(id);
    })
  );

  router.delete(
    '/remove_campaign/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(StarcraftCampaigns, req.params.id);
      res.send(id);
    })
  );

  router.get(
    '/search_map',
    wrap(async (req, res, next) => {
      const maps = await commonService.search(StarcraftMaps, 'Name', req.query.Name);
      res.send(maps);
    })
  );

  router.get(
    '/search_mod',
    wrap(async (req, res, next) => {
      const mods = await commonService.search(StarcraftMods, 'Name', req.query.Name, [
        'Description',
        'Introduction'
      ]);
      res.send(mods);
    })
  );

  router.get(
    '/search_campaign',
    wrap(async (req, res, next) => {
      const maps = await commonService.search(StarcraftCampaigns, 'Name', req.query.Name, [
        'Description',
        'Introduction',
        'Uri'
      ]);
      res.send(maps);
    })
  );

  return router;
};
