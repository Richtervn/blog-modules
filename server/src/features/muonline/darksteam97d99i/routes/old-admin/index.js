import getMembers from './services/getMembers';
import updateMember from './services/updateMember';
import addMember from './services/addMember';
import getCharacters from './services/getCharacters';
import addCharacter from './services/addCharacter';
import updateCharacter from './services/updateCharacter';
import addWebShopPackage from './services/addWebShopPackage';
import updateWebShopPackage from './services/updateWebShopPackage';
import deleteWebShopPackage from './services/deleteWebShopPackage';
import uploadWebShopPackageImage from './services/uploadWebShopPackageImage';

export default (models, router, factories, helpers, appConfigs, methods) => {
  const { wrap } = factories;
  const {
    MembInfo,
    AccountCharacter,
    Character,
    MembCredits,
    Banking,
    ViCurInfo,
    WebShopPackage,
    WebShopItem
  } = models;

  router.get(
    '/admin/memb_info',
    wrap(async (req, res, next) => {
      const accounts = await getMembers(MembInfo, req.query);
      res.send(accounts);
    })
  );

  router.put(
    '/admin/memb_info',
    wrap(async (req, res, next) => {
      const account = await updateMember(MembInfo, req.body);
      res.send(account);
    })
  );

  router.delete(
    '/admin/memb_info/:id',
    wrap(async (req, res, next) => {
      await MembInfo.destroy({ where: { memb___id: req.params.id } });
      res.send({ id: req.params.id });
    })
  );

  router.post(
    '/admin/memb_info',
    wrap(async (req, res, next) => {
      const account = await addMember(models, req.body);
      res.send(account);
    })
  );

  router.get(
    '/admin/character',
    wrap(async (req, res, next) => {
      const characters = await getCharacters(Character, req.query);
      res.send(characters);
    })
  );

  router.post(
    '/admin/character',
    wrap(async (req, res, next) => {
      const character = await addCharacter(Character, req.body);
      res.send(character);
    })
  );

  router.put(
    '/admin/character',
    wrap(async (req, res, next) => {
      const character = await updateCharacter(Character, req.body);
      res.send(character);
    })
  );

  router.delete(
    '/admin/character/:id',
    wrap(async (req, res, next) => {
      await Character.destroy({ where: { Name: req.params.id } });
      res.send({ id: req.params.id });
    })
  );

  router.get(
    '/admin/banking',
    wrap(async (req, res, next) => {
      const bankAccounts = await Banking.findAll({ where: { ...req.query } });
      res.send(bankAccounts);
    })
  );

  router.put(
    '/admin/banking',
    wrap(async (req, res, next) => {
      await Banking.update(req.body, {
        where: {
          memb___id: req.body.memb___id
        }
      });
      res.send(req.body);
    })
  );

  router.get(
    '/admin/credit',
    wrap(async (req, res, next) => {
      const membsCredit = await MembCredits.findAll({ where: { ...req.query } });
      res.send(membsCredit);
    })
  );

  router.put(
    '/admin/credit',
    wrap(async (req, res, next) => {
      await MembCredits.update(req.body, {
        where: {
          memb___id: req.body.memb___id
        }
      });
      res.send(req.body);
    })
  );

  router.post(
    '/admin/web_shop',
    wrap(async (req, res, next) => {
      req.body = await uploadWebShopPackageImage(req, res);
      const response = await addWebShopPackage(WebShopPackage, WebShopItem, req.body);
      res.send(response);
    })
  );

  router.put(
    '/admin/web_shop',
    wrap(async (req, res, next) => {
      req.body = await uploadWebShopPackageImage(req, res);
      const response = await updateWebShopPackage(WebShopPackage, WebShopItem, req.body);
      res.send(response);
    })
  );

  router.delete('/admin/web_shop/:id', wrap(async (req, res, next) => {
    await deleteWebShopPackage(WebShopPackage, WebShopItem, req.params.id)
    res.send({id: req.params.id})
  }))

  return router;
};