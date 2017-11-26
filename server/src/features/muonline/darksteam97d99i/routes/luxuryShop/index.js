import addExchange from './services/addExchange';
import addConsumable from './services/addConsumable';
import addReceipt from './services/addReceipt';
import editExchange from './services/editExchange';
import editConsumable from './services/editConsumable';
import editReceipt from './services/editReceipt';
import getReceipt from './services/getReceipt';
import deleteReceipt from './services/deleteReceipt';
import uploadConsumableImage from './services/uploadConsumableImage';
import uploadExchangeImage from './services/uploadExchangeImage';
import uploadReceiptImage from './services/uploadReceiptImage';

export default (models, router, factories, helpers, appConfigs, methods) => {
  const { readFile, writeFile, wrap } = factories;
  const { Exchange, Receipt, UserReceipt, Consumable, Material } = models;

  router.post(
    '/luxury_shop/exchange',
    wrap(async (req, res, next) => {
      const body = await uploadExchangeImage(req, res);
      const exchange = await addExchange(Exchange, body);
      res.send(exchange);
    })
  );

  router.get(
    '/luxury_shop/exchange',
    wrap(async (req, res, next) => {
      const exchanges = await Exchange.findAll();
      res.send(exchanges);
    })
  );

  router.delete(
    '/luxury_shop/exchange/:id',
    wrap(async (req, res, next) => {
      await Exchange.destroy({ where: { id: req.params.id } });
      res.send({ id: req.params.id });
    })
  );

  router.put(
    '/luxury_shop/exchange',
    wrap(async (req, res, next) => {
      const body = await uploadExchangeImage(req, res);
      const exchange = await editExchange(Exchange, body);
      res.send(exchange);
    })
  );

  router.get(
    '/luxury_shop/consumable',
    wrap(async (req, res, next) => {
      const consumables = await Consumable.findAll();
      res.send(consumables);
    })
  );

  router.post(
    '/luxury_shop/consumable',
    wrap(async (req, res, next) => {
      const body = await uploadConsumableImage(req, res);
      const consumable = await addConsumable(Consumable, body);
      res.send(consumable);
    })
  );

  router.put(
    '/luxury_shop/consumable',
    wrap(async (req, res, next) => {
      const body = await uploadConsumableImage(req, res);
      const consumable = await editConsumable(Consumable, body);
      res.send(consumable);
    })
  );

  router.delete(
    '/luxury_shop/consumable/:id',
    wrap(async (req, res, next) => {
      await Consumable.destroy({ where: { id: req.params.id } });
      res.send({ id: req.params.id });
    })
  );

  router.get(
    '/luxury_shop/receipt',
    wrap(async (req, res, next) => {
      const receipts = await getReceipt(Receipt, Material);
      res.send(receipts);
    })
  );

  router.post(
    '/luxury_shop/receipt',
    wrap(async (req, res, next) => {
      const body = await uploadReceiptImage(req, res);
      const receipt = await addReceipt(Receipt, Material, body);
      res.send(receipt);
    })
  );

  router.put(
    '/luxury_shop/receipt',
    wrap(async (req, res, next) => {
      const body = await uploadReceiptImage(req, res);
      const receipt = await editReceipt(Receipt, Material, body);
      res.send(receipt);
    })
  );

  router.delete(
    '/luxury_shop/receipt/:id',
    wrap(async (req, res, next) => {
      await deleteReceipt(Receipt, Material, req.params.id);
      res.send({ id: req.params.id });
    })
  );

  return router;
};
