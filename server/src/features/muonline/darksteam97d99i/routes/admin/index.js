export default (models, router, factories, helpers, appConfigs) => {
  const { wrap } = factories;
  const { MembInfo, AccountCharacter, Character, MembCredits, Banking, ViCurInfo } = models;

  router.get(
    '/admin/memb_info',
    wrap(async (req, res, next) => {
      const options = { where: { ...req.query } };
      const accounts = await MembInfo.findAll(options);
      res.send(accounts);
    })
  );

  router.get(
    '/admin/character',
    wrap(async (req, res, next) => {
      const options = { where: { ...req.query } };
      options.attributes = [
        'AccountID',
        'Name',
        'cLevel',
        'LevelUpPoint',
        'Class',
        'Strength',
        'Dexterity',
        'Vitality',
        'Energy',
        'Money',
        'MapNumber',
        'MapPosX',
        'MapPosY',
        'CtlCode',
        'Resets',
        'GrandResets',
        'IsMarried',
        'MarryName',
        'QuestNumber',
        'QuestMonsters',
        'SkyEventWins',
        'IsVip',
        'VipExpirationTime'
      ];
      const characters = await Character.findAll(options);
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

