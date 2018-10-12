import _ from 'underscore';
import express from 'express';

import getItems from './services/getItems';
import generateItemFile from './services/generateItemFile';
import generateMonsterFile from './services/generateMonsterFile';
import readEventItemBagFile from './services/readEventItemBagFile';
import syncMonsters from './services/syncMonsters';
import syncItems from './services/syncItems';

export default (models, methods, factories, helpers) => {
  const router = express.Router();
  const { wrap, readFile, writeFile, pad, readMuServerFile } = factories;
  const { getData, getGameData } = helpers;

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

  router.post(
    '/sync_monsters',
    wrap(async ({ files }, res, next) => {
      files.file.mv('./src/features/muonline/darksteam97d99i/data/source/Monster.txt', async err => {
        if (err) {
          return next(err);
        }
        await syncMonsters(readMuServerFile, writeFile);
        res.send({ done: true });
      });
    })
  );

  router.post(
    '/sync_items',
    wrap(async ({ files }, res, next) => {
      files.file.mv('./src/features/muonline/darksteam97d99i/data/source/item.txt', async err => {
        if (err) {
          return next(err);
        }
        await syncItems(getGameData, readMuServerFile, writeFile);
        res.send({ done: true });
      });
    })
  );

  router.post(
    '/read_event_item_bag_file',
    wrap(async ({ files }, res, next) => {
      const destination = `./src/features/muonline/darksteam97d99i/data/source/${files.file.name}`;
      files.file.mv(destination, async err => {
        if (err) {
          return next(err);
        }
        const result = await readEventItemBagFile(files.file.name, getGameData, readMuServerFile, writeFile, pad);
        res.send(result);
      });
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

  router.get(
    '/monsters',
    wrap(async (req, res, next) => {
      const data = await getGameData('Monsters');
      res.send(data);
    })
  );

  router.get(
    '/items',
    wrap(async ({ query }, res, next) => {
      const result = await getItems(query, getGameData);
      res.send(result);
    })
  );

  router.get(
    '/generate_item_file',
    wrap(async (req, res, next) => {
      const file = await generateItemFile(getGameData, writeFile, pad);
      res.send({ file });
    })
  );

  router.get(
    '/generate_monster_file',
    wrap(async (req, res, next) => {
      const file = await generateMonsterFile(getGameData, writeFile, pad);
      res.send({ file });
    })
  );

  return router;
};
