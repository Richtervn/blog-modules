import express from 'express';

import getPackages from './services/getPackages';
import buyPackage from './services/buyPackage';

import addWebShopPackage from './services/addWebShopPackage';
import editWebShopPackage from './services/editWebShopPackage';
import deleteWebShopPackage from './services/deleteWebShopPackage';

export default (models, methods, factories, helpers) => {
  const { wrap, deleteFile } = factories;
  const { WebShopItem, WebShopPackage } = models;

  const router = express.Router();

  router.get(
    '/packages/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const packages = await getPackages(WebShopPackage, WebShopItem, id);
      res.send(packages);
    })
  );

  router.get(
    '/buy/:packageId/:characterName',
    wrap(async ({ params: { packageId, characterName } }, res, next) => {
      const result = await buyPackage(models, helpers, characterName, packageId);
      res.send(result);
    })
  );

  router.post(
    '/',
    wrap(async ({ files, body }, res, next) => {
      const imageUrl = commonSequelize.uploadImage(files, './public/Mu Online/Darksteam97d99i/Web Shop');
      if (imageUrl) {
        body.image_url = imageUrl;
      }
      const response = await addWebShopPackage(WebShopPackage, WebShopItem, body);
      res.send(response);
    })
  );

  router.put(
    '/',
    wrap(async ({ files, body }, res, next) => {
      const imageUrl = commonSequelize.uploadImage(files, './public/Mu Online/Darksteam97d99i/Web Shop');
      if (imageUrl) {
        body.image_url = imageUrl;
      }
      const response = await editWebShopPackage(WebShopPackage, WebShopItem, body, deleteFile);
      res.send(response);
    })
  );

  router.delete(
    '/:id',
    wrap(async ({ params: { id } }, res, next) => {
      await deleteWebShopPackage(WebShopPackage, WebShopItem, id);
      res.send({ id });
    })
  );

  return router;
};
