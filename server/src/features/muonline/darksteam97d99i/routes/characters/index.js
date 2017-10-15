import addPoints from './services/addPoints';
import getCharacters from './services/getCharacters';
import grandReset from './services/grandReset';
import questReset from './services/questReset';
import reset from './services/reset';

export default (models, router, factories, helpers, appConfigs, methods) => {
  const { wrap, commonService } = factories;
  const { MembInfo, AccountCharacter, Character, MembCredits, Banking, ViCurInfo } = models;

  router.get(
    '/characters/get_chars/:id',
    wrap(async (req, res, next) => {
      const characters = await getCharacters(Character, req.params.id);
      res.send(characters);
    })
  );

  router.get(
    '/characters/add_point',
    wrap(async (req, res, next) => {
      const result = await addPoints(Character, Banking, req.query, appConfigs, methods);
      res.send(result);
    })
  );

  router.get(
    '/characters/reset',
    wrap(async (req, res, next) => {
      const result = await reset(Character, Banking, MembCredits, req.query, appConfigs.GameSetting, methods);
      res.send(result);
    })
  );

  router.get(
    '/characters/grand_reset',
    wrap(async (req, res, next) => {
      const result = await grandReset(Character, Banking, MembCredits, req.query, appConfigs, methods);
      res.send(result);
    })
  );

  router.get(
    '/characters/quest_reset',
    wrap(async (req, res, next) => {
      const result = await questReset(Character, Banking, req.query, appConfigs, methods);
      res.send(result);
    })
  );

  return router;
};
