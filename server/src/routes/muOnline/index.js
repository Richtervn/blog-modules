import express from 'express';

import addTool from './services/addTool';
import addVersion from './services/addVersion';
import uploadTool from './services/uploadTool';
import uploadVersion from './services/uploadVersion';
import updateTool from './services/updateTool';
import updateVersion from './services/updateVersion';

export default (MuOnlineTools, MuOnlineVersions, factories) => {
  const router = express.Router();
  const { wrap, commonService, clearExtension } = factories;

  router.post(
    '/add_tool',
    wrap(async (req, res, next) => {
      const body = await uploadTool(req, res);
      body.Name = clearExtension(body.Name);
      const tool = await addTool(MuOnlineTools, body);
      res.send(tool);
    })
  );

  router.post(
    '/add_version',
    wrap(async (req, res, next) => {
      const body = await uploadVersion(req, res);
      body.Name = clearExtension(body.Name);
      const version = await addVersion(MuOnlineVersions, body);
      res.send(version);
    })
  );

  router.put(
    '/edit_tool',
    wrap(async (req, res, next) => {
      const body = await uploadTool(req, res);
      if(body.Name) body.Name = clearExtension(body.Name);
      const tool = await updateTool(MuOnlineTools, body);
      res.send(tool);
    })
  );

  router.put(
    '/edit_version',
    wrap(async (req, res, next) => {
      const body = await updateVersion(req, res);
      if(body.Name) body.Name = clearExtension(body.Name);
      const version = await updateVersion(MuOnlineVersions, body);
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
      const version = await commonService.getOne(MuOnlineVersions, req.params.id);
      res.send(version);
    })
  );

  return router;
};
