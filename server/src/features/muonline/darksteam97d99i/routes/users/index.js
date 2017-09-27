import regisUser from './services/regisUser';
import loginUser from './services/loginUser';

export default (models, router, factories, helpers, appConfigs) => {
  const { wrap, commonService } = factories;
  const { MembInfo, AccountCharacter, Character, MembCredits, Banking, ViCurInfo } = models;

  router.post(
    '/users/register',
    wrap(async (req, res, next) => {
      const account = await regisUser(
        MembInfo,
        ViCurInfo,
        MembCredits,
        Banking,
        req.body,
        helpers,
        appConfigs
      );
      res.send(account);
    })
  );

  router.post(
    '/users/login',
    wrap(async (req, res, next) => {
      const account = await loginUser(MembInfo, req.body);
      res.send(account);
    })
  );

  router.get('/test', (req, res, next) => {

  })

  return router;
};
