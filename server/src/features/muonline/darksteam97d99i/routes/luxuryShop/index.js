import express from 'express';

import addExchange from './services/addExchange';
import addConsumable from './services/addConsumable';
import addReceipt from './services/addReceipt';
import buyConsumable from './services/buyConsumable';
import buyReceipt from './services/buyReceipt';
import countExchange from './services/countExchange';
import countMaterials from './services/countMaterials';
import craftItem from './services/craftItem';
import deleteReceipt from './services/deleteReceipt';
import editExchange from './services/editExchange';
import editConsumable from './services/editConsumable';
import editReceipt from './services/editReceipt';
import getReceipt from './services/getReceipt';
import sellReceipt from './services/sellReceipt';
import tradeExchange from './services/tradeExchange';

export default (models, methods, factories, helpers) => {
  const { wrap, commonSequelize, deleteFile } = factories;
  const { Exchange, Receipt, UserReceipt, Consumable, Material, Character, MembCredits } = models;
  const { readInventory, makeItemValue, makeInventory, getData } = helpers;

  const router = express.Router();

  router.post(
    '/exchange',
    wrap(async ({ body, files }, res, next) => {
      const imageUrl = commonSequelize.uploadImage(files, './public/Mu Online/Darksteam97d99i/Luxury Shop/Exchange');
      if (imageUrl) {
        body.image_url = imageUrl;
      }
      const exchange = await addExchange(Exchange, body);
      res.send(exchange);
    })
  );

  router.put(
    '/exchange',
    wrap(async ({ body, files }, res, next) => {
      const imageUrl = commonSequelize.uploadImage(files, './public/Mu Online/Darksteam97d99i/Luxury Shop/Exchange');
      if (imageUrl) {
        body.image_url = imageUrl;
      } else {
        body.image_url = null;
      }
      const exchange = await editExchange(Exchange, body);
      res.send(exchange);
    })
  );

  router.delete(
    '/exchange/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const exchange = await Exchange.findOne({ where: { id } });
      if (exchange.image_url) {
        await deleteFile(exchange.image_url);
      }
      await Exchange.destroy({ where: { id } });
      res.send({ id });
    })
  );

  router.get(
    '/exchange',
    wrap(async (req, res, next) => {
      const exchanges = await Exchange.findAll();
      res.send(exchanges);
    })
  );

  router.get(
    '/consumable',
    wrap(async (req, res, next) => {
      const consumables = await Consumable.findAll();
      res.send(consumables);
    })
  );

  router.post(
    '/consumable',
    wrap(async ({ body, files }, res, next) => {
      const imageUrl = commonSequelize.uploadImage(files, './public/Mu Online/Darksteam97d99i/Luxury Shop/Consumable');
      if (imageUrl) {
        body.image_url = imageUrl;
      }
      const consumable = await addConsumable(Consumable, body);
      res.send(consumable);
    })
  );

  router.put(
    '/consumable',
    wrap(async ({ body, files }, res, next) => {
      const imageUrl = commonSequelize.uploadImage(files, './public/Mu Online/Darksteam97d99i/Luxury Shop/Consumable');
      if (imageUrl) {
        body.image_url = imageUrl;
      } else {
        body.image_url = null;
      }
      const consumable = await editConsumable(Consumable, body);
      res.send(consumable);
    })
  );

  router.delete(
    '/consumable/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const consumable = await Consumable.findOne({ where: { id } });
      if (consumable.image_url) {
        await deleteFile(consumable.image_url);
      }
      await Consumable.destroy({ where: { id } });
      res.send({ id });
    })
  );

  router.get(
    '/receipt',
    wrap(async (req, res, next) => {
      const receipts = await getReceipt(Receipt, Material);
      res.send(receipts);
    })
  );

  router.post(
    '/receipt',
    wrap(async ({ body, files }, res, next) => {
      const imageUrl = commonSequelize.uploadImage(files, './public/Mu Online/Darksteam97d99i/Luxury Shop/Receipt');
      if (imageUrl) {
        body.image_url = imageUrl;
      }
      const receipt = await addReceipt(Receipt, Material, body);
      res.send(receipt);
    })
  );

  router.put(
    '/receipt',
    wrap(async ({ body, files }, res, next) => {
      const imageUrl = commonSequelize.uploadImage(files, './public/Mu Online/Darksteam97d99i/Luxury Shop/Receipt');
      if (imageUrl) {
        body.image_url = imageUrl;
      } else {
        body.image_url = null;
      }
      const receipt = await editReceipt(Receipt, Material, body, deleteFile);
      res.send(receipt);
    })
  );

  router.delete(
    '/receipt/:id',
    wrap(async ({ params: { id } }, res, next) => {
      await deleteReceipt(Receipt, Material, id);
      res.send({ id });
    })
  );

  router.get(
    '/exchange/count/:memb___id/:exchangeId',
    wrap(async ({ params: { memb___id, exchangeId } }, res, next) => {
      const result = await countExchange(Exchange, Character, memb___id, exchangeId, readInventory, makeItemValue);
      res.send(result);
    })
  );

  router.get(
    '/exchange/trade',
    wrap(async ({ query }, res, next) => {
      const result = await tradeExchange(models, query, readInventory, makeItemValue, makeInventory);
      res.send(result);
    })
  );

  router.get(
    '/receipt/buy/:memb___id/:receiptId',
    wrap(async ({ params: { memb___id, receiptId } }, res, next) => {
      const result = await buyReceipt(models, memb___id, receiptId);
      res.send(result);
    })
  );

  router.get(
    '/consumable/buy',
    wrap(async ({ query }, res, next) => {
      const result = await buyConsumable(models, query, readInventory, makeItemValue, makeInventory);
      res.send(result);
    })
  );

  router.get(
    '/user_receipt/:memb___id',
    wrap(async ({ params: { memb___id } }, res, next) => {
      const userReceipts = await UserReceipt.findAll({
        where: { memb___id }
      });
      res.send(userReceipts);
    })
  );

  router.get(
    '/user_receipt/count/:memb___id/:receiptId',
    wrap(async ({ params: { memb___id, receiptId } }, res, next) => {
      const result = await countMaterials(Material, Character, memb___id, receiptId, readInventory, makeItemValue);
      res.send(result);
    })
  );

  router.get(
    '/user_receipt/craft/:characterName/:receiptId',
    wrap(async ({ params: { characterName, receiptId } }, res, next) => {
      const result = await craftItem(models, characterName, receiptId, readInventory, makeItemValue);
      res.send(result);
    })
  );

  router.get(
    '/user_receipt/sell/:memb___id/:receiptId',
    wrap(async ({ params: { memb___id, receiptId } }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await sellReceipt(models, memb___id, receiptId, GameSetting);
      res.send(result);
    })
  );

  return router;
};
