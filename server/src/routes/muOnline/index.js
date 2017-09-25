import express from 'express';

import addTools from './services/addTools';
import addVersions from './services/addVersions';
import uploadTools from './services/uploadTools';
import uploadVersions from './services/uploadVersions';
import updateTool from './services/updateTool';
import updateVersion from './services/updateVersion';

export default (MuOnlineTools, MuOnlineVersions, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_tool',
    wrap(async (req, res, next) => {
      const body = await uploadTools(req, res);
      const tool = await addTools(body);
      res.send(tool);
    })
  );

  router.post(
    '/add_version',
    wrap(async (req, res, next) => {
      const body = await uploadVersions(req, res);
      const version = await addVersions(body);
      res.send(version);
    })
  );

  router.put(
    '/edit_tool',
    wrap(async (req, res, next) => {
      const body = await uploadTools(req, res);
      const tool = await updateTool(body);
      res.send(tool);
    })
  );

  router.put(
    '/edit_version',
    wrap(async (req, res, next) => {
      const body = await updateVersion(req, res);
      const version = await updateVersion(body);
      res.send(version);
    })
  );

  router.get(
    '/list_tools',
    wrap(async (req, res, next) => {
      const tools = await MuOnlineTools.find({}, { Introduce: false });
      res.send(tools);
    })
  );

  router.get(
    '/list_versions',
    wrap(async (req, res, next) => {
      const versions = await MuOnlineVersions.find({}, { Introduce: false });
      res.send(versions);
    })
  );

  router.delete(
    '/remove_tool/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(MuOnlineTools, req.params.id);
      res.send(id);
    })
  );

  router.delete(
    '/remove_version/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(MuOnlineVersions, req.params.id);
      res.send(id);
    })
  );

  router.get(
    '/tool/:id',
    wrap(async (req, res, next) => {
      const tool = await commonService.getOne(MuOnlineTools, req.params.id);
      res.send(tool);
    })
  );

  router.get(
    '/version/:id',
    wrap(async (req, res, next) => {
      const version = await commonService.getOne(
        MuOnlineVersions,
        req.params.id
      );
      res.send(version);
    })
  );

  return router;
};
