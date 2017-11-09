import getMembers from './services/getMembers';
import updateMember from './services/updateMember';
import addMember from './services/addMember';
import getCharacters from './services/getCharacters';

export default (models, router, factories, helpers, appConfigs, methods) => {
  const { wrap } = factories;
  const { MembInfo, AccountCharacter, Character, MembCredits, Banking, ViCurInfo } = models;

  router.get(
    '/admin/memb_info',
    wrap(async (req, res, next) => {
      console.log(req.query);
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

  router.get(
    '/admin/banking',
    wrap(async (req, res, next) => {
      const bankAccounts = await Banking.findAll({ where: { ...req.query } });
      res.send(bankAccounts);
    })
  );

  router.get(
    '/admin/credit',
    wrap(async (req, res, next) => {
      const membsCredit = await MembCredits.findAll({ where: { ...req.query } });
      res.send(membsCredit);
    })
  );

  return router;
};
