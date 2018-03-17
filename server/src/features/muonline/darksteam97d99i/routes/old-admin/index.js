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

  router.delete(
    '/admin/web_shop/:id',
    wrap(async (req, res, next) => {
      await deleteWebShopPackage(WebShopPackage, WebShopItem, req.params.id);
      res.send({ id: req.params.id });
    })
  );

  return router;
};
