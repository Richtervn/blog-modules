import getMembers from './services/getMembers';
import getCharacters from './services/getCharacters'

export default (models, router, factories, helpers, appConfigs) => {
  const { wrap } = factories;
  const { MembInfo, AccountCharacter, Character, MembCredits, Banking, ViCurInfo } = models;

  router.get(
    '/admin/memb_info',
    wrap(async (req, res, next) => {
      const accounts = await getMembers(MembInfo, req.query);
      res.send(accounts);
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
      const options = { where: { ...req.query } };
      const bankAccounts = await Banking.findAll(options);
      res.send(bankAccounts);
    })
  );

  router.get(
    '/admin/credit',
    wrap(async (req, res, next) => {
      const options = { where: { ...req.query } };
      const membsCredit = await MembCredits.findAll(options);
      res.send(membsCredit);
    })
  );

  return router;
};

