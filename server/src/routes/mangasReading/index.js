import express from 'express';
import Promise from 'bluebird';
import moment from 'moment';

import arrangeManga from './services/arrangeManga';
import crawl, { sites as crawlableSites } from './services/crawl';
import quickUpdate from './services/quickUpdate';
import sortManga from './services/sortManga';
import manualSaveNewChapter from './services/manualSaveNewChapter';
import saveHistory from './services/saveHistory';

import { sites as subscriblableSites } from './services/getChapterFromUrl';

export default (MangasReading, factories, socket) => {
  const router = express.Router();
  const { wrap, commonService, deleteFile } = factories;

  router.post(
    '/add_manga',
    wrap(async ({ files, body }, res, next) => {
      const coverUri = commonService.uploadImage(files, './public/Mangas Reading');
      if (coverUri) body.CoverUri = coverUri;
      const manga = await commonService.create(MangasReading, body, ['Aka', 'Authors', 'Genre']);
      res.send(manga);
    })
  );

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const mangas = await commonService.getAll(MangasReading, null, { sort: { updatedAt: 'desc' } });
      res.send(arrangeManga(mangas));
    })
  );

  router.put(
    '/quick_update',
    wrap(async ({ body }, res, next) => {
      const manga = await quickUpdate(MangasReading, body);
      res.send(manga);
    })
  );

  router.put(
    '/manual_save_new_chapter',
    wrap(async ({ body }, res, next) => {
      const manga = await manualSaveNewChapter(MangasReading, body);
      res.send(manga);
    })
  );

  router.put(
    '/update',
    wrap(async ({ files, body }, res, next) => {
      const coverUri = commonService.uploadImage(files, './public/Mangas Reading');
      if (coverUri) body.CoverUri = coverUri;
      if (body.Chapter && body.Chapter.indexOf('END' != -1)) {
        body.Status = 'End';
      }
      const manga = await commonService.update(MangasReading, body, ['Aka', 'Authors', 'Genre'], ['CoverUri']);
      res.send(manga);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(MangasReading, id, ['CoverUri']);
      res.send(result);
    })
  );

  router.get(
    '/search',
    wrap(async ({ query }, res, next) => {
      const mangas = await commonService.search(MangasReading, query, null, { sort: { updatedAt: 'desc' } });
      res.send(arrangeManga(mangas));
    })
  );

  router.get(
    '/sort',
    wrap(async ({ query }, res, next) => {
      const mangas = await sortManga(MangasReading, query);
      res.send(mangas);
    })
  );

  router.post(
    '/crawl',
    wrap(async ({ body }, res, next) => {
      const form = await crawl(body.url);
      if (!form) {
        return res.send({ message: 'Site is not supported yet' });
      }
      form.Status = 'OnGoing';
      const manga = await commonService.create(MangasReading, form, ['Aka', 'Authors', 'Genre']);
      res.send(manga);
    })
  );

  router.get(
    '/supported_sites',
    wrap(async (req, res, next) => {
      res.send({
        crawlable: crawlableSites,
        subscribe: subscriblableSites
      });
    })
  );

  router.post(
    '/history',
    wrap(async ({ body }, res, next) => {
      await saveHistory(body, MangasReading, socket);
      res.sendStatus(200);
    })
  );

  router.post(
    '/confirm_unsaved',
    wrap(async ({ body }, res, next) => {
      const { maxChapter, maxChapterUrl, saved, ...formData } = body;
      if (!saved) {
        await deleteFile(body.CoverUri);
        return res.send(body);
      }
      formData.Chapter = maxChapter;
      const manga = await commonService.create(MangasReading, formData);
      res.send(manga);
    })
  );

  return router;
};
