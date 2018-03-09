import express from 'express';

export default (MuOnlineCharacters, MuOnlineGuides, MuOnlineTools, MuOnlineVersions, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  /*Mu Online Characters Routing*/
  router.get(
    '/characters',
    wrap(async (req, res, next) => {
      const versions = await commonService.getAll(MuOnlineCharacters);
      res.send(versions);
    })
  );

  router.put(
    '/character',
    wrap(async ({ body }, res, next) => {
      const result = await commonService.update(MuOnlineCharacters, body);
      res.send(result);
    })
  );

  router.delete(
    '/character/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(MuOnlineCharacters, id);
      res.send(result);
    })
  );

  router.post(
    '/character',
    wrap(async ({ body }, res, next) => {
      const result = await commonService.create(MuOnlineCharacters, body);
      res.send(result);
    })
  );

  /*Mu Online Guides Routing*/
  router.get(
    '/guides',
    wrap(async (req, res, next) => {
      const guides = await commonService.getAll(MuOnlineGuides, {
        HTML: false,
        CSS: false,
        ImageUrl: false,
        Credits: false
      });
      res.send(guides);
    })
  );

  router.get(
    '/guide/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const guide = await commonService.getOne(MuOnlineGuides, id);
      res.send(guide);
    })
  );

  router.post(
    '/guide',
    wrap(async ({ files, body }, res, next) => {
      const imageUrl = commonService.uploadImage(files, './public/Mu Online/Guides');
      if (imageUrl) body.ImageUrl = imageUrl;
      const guide = await commonService.create(MuOnlineGuides, body, ['Credits']);
      res.send(guide);
    })
  );

  router.put(
    '/guide',
    wrap(async ({ files, body }, res, next) => {
      const imageUrl = commonService.uploadImage(files, './public/Mu Online/Guides');
      if (imageUrl) body.ImageUrl = imageUrl;
      const result = await commonService.update(MuOnlineGuides, body, ['Credits'], ['ImageUrl']);
      res.send(result);
    })
  );

  router.delete(
    '/guide/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(MuOnlineGuides, id, ['ImageUrl']);
      res.send(result);
    })
  );

  /*Mu Online Tool Routing*/
  router.get(
    '/tools',
    wrap(async (req, res, next) => {
      const tools = await commonService.getAll(MuOnlineTools, {
        Credits: false,
        HTML: false,
        CSS: false,
        Description: false
      });
      res.send(tools);
    })
  );

  router.get(
    '/tool/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const tool = await commonService.getOne(MuOnlineTools, id);
      res.send(tool);
    })
  );

  router.post(
    '/tool',
    wrap(async ({ body, files }, res, next) => {
      const archiveUrl = commonService.uploadArchive(files, './public/Mu Online/Tools', 'Archive');
      const iconUrl = commonService.uploadImage(files, './public/Mu Online/Tools/Icons', 'Icon');
      if (archiveUrl) body.ArchiveUri = archiveUrl;
      if (iconUrl) body.IconUrl = iconUrl;
      const tool = await commonService.create(MuOnlineTools, body, ['Credits']);
      res.send(tool);
    })
  );

  router.put(
    '/tool',
    wrap(async ({ body, files }, res, next) => {
      const archiveUrl = commonService.uploadArchive(files, './public/Mu Online/Tools', 'Archive');
      const iconUrl = commonService.uploadImage(files, './public/Mu Online/Tools/Icons', 'Icon');
      if (archiveUrl) body.ArchiveUri = archiveUrl;
      if (iconUrl) body.IconUrl = iconUrl;
      const tool = await commonService.update(MuOnlineTools, body, ['Credits'], ['ArchiveUri', 'IconUrl']);
      res.send(tool);
    })
  );

  router.delete(
    '/tool/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(MuOnlineTools, id, ['ArchiveUri', 'IconUrl']);
      res.send(result);
    })
  );

  /*Mu Online Version Routing*/
  router.get(
    '/versions',
    wrap(async (req, res, next) => {
      const versions = await commonService.getAll(MuOnlineVersions, {
        ImageUrl: false,
        HTML: false,
        CSS: false,
        Description: false,
        Credits: false
      });
      res.send(versions);
    })
  );

  router.get(
    '/version/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const version = await commonService.getOne(MuOnlineVersions, id);
      res.send(version);
    })
  );

  router.post(
    '/version',
    wrap(async ({ body, files }, res, next) => {
      const archiveUri = commonService.uploadArchive(files, './public/Mu Online/Versions', 'Archive');
      const imageUrl = commonService.uploadImage(files, './public/Mu Online/Versions/Iamges', 'Image');
      if (archiveUri) body.ArchiveUri = archiveUri;
      if (imageUrl) body.ImageUrl = imageUrl;
      const version = await commonService.create(MuOnlineVersions, body, ['Credits']);
      res.send(version);
    })
  );

  router.put(
    '/version',
    wrap(async ({ body, files }, res, next) => {
      const archiveUri = commonService.uploadArchive(files, './public/Mu Online/Versions', 'Archive');
      const imageUrl = commonService.uploadImage(files, './public/Mu Online/Versions/Iamges', 'Image');
      if (archiveUri) body.ArchiveUri = archiveUri;
      if (imageUrl) body.ImageUrl = imageUrl;
      const version = await commonService.update(MuOnlineVersions, body, ['Credits'], ['ArchiveUri', 'ImageUrl']);
      res.send(version);
    })
  );

  router.delete(
    '/version/:id',
    wrap(({ params: { id } }, res, next) => {
      const result = commonService.delete(MuOnlineVersions, id, ['ArchiveUri', 'ImageUrl']);
      res.send(result);
    })
  );

  return router;
};
