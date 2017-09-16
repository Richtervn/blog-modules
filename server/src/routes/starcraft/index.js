import express from 'express';
import uploadMap from './services/uploadMap';
import addMap from './services/addMap';
import updateMap from './services/updateMap';

export default (StarcraftMaps, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get('/list_map', wrap(async (req, res, next) => {
    const maps = await commonService.getAll(StarcraftMaps);
    res.send(maps);
  }))

  router.post(
    '/add_map',
    wrap(async (req, res, next) => {
      const body = await uploadMap(req, res);
      const map = await addMap(StarcraftMaps, body);
      res.send(map);
    })
  );

  router.put('/edit_map', wrap(async (req, res, next) => {
    const body = await uploadMap(req, res);
    const map = await updateMap(StarcraftMaps, body);
    res.send(map);
  }))

  return router;
};
