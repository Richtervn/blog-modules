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

  router.post(
    '/add_map',
    wrap(async (req, res, next) => {
      const body = await uploadMap(req, res);
      const map = await addMap(StarcraftMaps, body);
      res.send(map);
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

  router.delete(
    '/remove_map/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(StarcraftMaps, req.params.id);
      res.send(id);
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
    '/campaign/:id',
    wrap(async (req, res, next) => {
      const campaign = await commonService.getOne(
        StarcraftCampaigns,
        req.params.id
      );
      res.send(campaign);
    })
  );

  router.post(
    '/add_campaign',
    wrap(async (req, res, next) => {
      const body = await uploadCampaign(req, res);
      const campaign = await commonService.create(body);
      res.send(campaign);
    })
  );

  return router;
};
