import express from 'express';

import addTool from './services/addTool';
import uploadTool from './services/uploadTool';
import updateTool from './services/updateTool';

import createUploadVersion from './uploaders/createUploadVersion';

export default (MuOnlineCharacters, MuOnlineGuides, MuOnlineTools, MuOnlineVersions, factories) => {
  const router = express.Router();
  const { wrap, commonService, clearExtension, multerUploader } = factories;

  const uploadVersion = createUploadVersion(multerUploader);

  router.get(
    '/list_versions',
    wrap(async (req, res, next) => {
      const versions = await commonService.getAll(MuOnlineVersions, {
        ImageUrl: false,
        Credits: false,
        Description: false,
        HTML: false,
        CSS: false
      });
      res.send(versions);
    })
  );

  router.post(
    '/add_version',
    wrap(async (req, res, next) => {
      const body = await uploadVersion(req, res);
      const version = await commonService.create(MuOnlineVersions, body, ['Credits']);
      res.send(version);
    })
  );

  router.put(
    '/edit_version',
    wrap(async (req, res, next) => {
      const body = await updateVersion(req, res);
      const version = await commonService.update(MuOnlineVersions, body, ['Credits']);
      res.send(version);
    })
  );

  router.delete(
    '/remove_version/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(MuOnlineVersions, id);
      res.send(result);
    })
  );

  // router.post(
  //   '/add_tool',
  //   wrap(async (req, res, next) => {
  //     const body = await uploadTool(req, res);
  //     body.Name = clearExtension(body.Name);
  //     const tool = await addTool(MuOnlineTools, body);
  //     res.send(tool);
  //   })
  // );

  // router.put(
  //   '/edit_tool',
  //   wrap(async (req, res, next) => {
  //     const body = await uploadTool(req, res);
  //     if (body.Name) body.Name = clearExtension(body.Name);
  //     const tool = await updateTool(MuOnlineTools, body);
  //     res.send(tool);
  //   })
  // );

  // router.get(
  //   '/list_tools',
  //   wrap(async (req, res, next) => {
  //     const tools = await MuOnlineTools.find({}, { Introduce: false });
  //     res.send(tools);
  //   })
  // );

  // router.delete(
  //   '/remove_tool/:id',
  //   wrap(async (req, res, next) => {
  //     const id = await commonService.delete(MuOnlineTools, req.params.id);
  //     res.send(id);
  //   })
  // );

  // router.get(
  //   '/tool/:id',
  //   wrap(async (req, res, next) => {
  //     const tool = await commonService.getOne(MuOnlineTools, req.params.id);
  //     res.send(tool);
  //   })
  // );

  // router.get(
  //   '/version/:id',
  //   wrap(async (req, res, next) => {
  //     const version = await commonService.getOne(MuOnlineVersions, req.params.id);
  //     res.send(version);
  //   })
  // );

  return router;
};
