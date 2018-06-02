import express from 'express';

export default (models, methods, factories, helpers) => {
  const router = express.Router();
  const { wrap, readFile, writeFile } = factories;
  const { getData, getGameData, syncItems, syncMonsters } = helpers;

  router.get(
    '/game_setting',
    wrap(async (req, res, next) => {
      const gameSetting = await getData('GameSetting');
      res.send(gameSetting);
    })
  );

  router.get(
    '/server_info',
    wrap(async (req, res, next) => {
      const serverInfo = await getData('ServerInfo');
      res.send(serverInfo);
    })
  );

  router.put(
    '/game_setting',
    wrap(async ({ body }, res, next) => {
      await writeFile(
        './src/features/muonline/darksteam97d99i/configs/GameSetting.json',
        JSON.stringify(body, null, 2)
      );
      res.send(body);
    })
  );

  router.get(
    '/web_quests',
    wrap(async (req, res, next) => {
      const quests = await getData('WebQuests');
      res.send(quests);
    })
  );

  router.put(
    '/web_quests',
    wrap(async ({ body }, res, next) => {
      await writeFile('./src/features/muonline/darksteam97d99i/app/QuestList.json', JSON.stringify(body, null, 2));
      res.send(body);
    })
  );

  router.get(
    '/data/:fileName',
    wrap(async ({ params: { fileName } }, res, next) => {
      const data = await getGameData(fileName);
      res.send(data);
    })
  );

  router.put(
    '/server_info',
    wrap(async ({ body }, res, next) => {
      await writeFile('./src/features/muonline/darksteam97d99i/configs/ServerInfo.json', JSON.stringify(body, null, 2));
      res.send(body);
    })
  );

  router.get(
    '/sync_items',
    wrap(async (req, res, next) => {
      await syncItems(factories);
      res.sendStatus(200);
    })
  );

  router.get(
    '/sync_monsters',
    wrap(async (req, res, next) => {
      await syncMonsters(factories);
      res.sendStatus(200);
    })
  );

  router.post(
    '/generate_text_file',
    wrap(async ({ body }, res, next) => {
      const { fileName, content } = body;
      await writeFile(`./public/Mu Online/Darksteam97d99i/Generated Files/${fileName}.txt`, content);
      res.send({ file: `./public/Mu Online/Darksteam97d99i/Generated Files/${fileName}.txt` });
    })
  );

  return router;
};
