import regisUser from './services/regisUser';
import loginUser from './services/loginUser';
import editProfile from './services/editProfile';
import changePassword from './services/changePassword';
import recoverPassword from './services/recoverPassword';

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
      const account = await loginUser(MembInfo, ViCurInfo, Banking, MembCredits, req.body);
      res.send(account);
    })
  );

  router.put(
    '/users/profile',
    wrap(async (req, res, next) => {
      const account = await editProfile(MembInfo, req.body, helpers);
      res.send(account);
    })
  );

  router.put(
    '/users/change_password',
    wrap(async (req, res, next) => {
      const account = await changePassword(MembInfo, req.body);
      res.send(account);
    })
  );

  router.get(
    '/users/recover_password/:id',
    wrap(async (req, res, next) => {
      const account = await recoverPassword(MembInfo, req.params.id);
      res.send(account);
    })
  );

  return router;
};
