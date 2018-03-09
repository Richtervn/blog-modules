import _ from 'underscore';
import express from 'express';
import Promise from 'bluebird';

export default (Music, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_song',
    wrap(async ({ body, files }, res, next) => {
      const url = commonService.uploadArchive(files, './public/Music', 'File');
      if (!url) {
        return { message: 'No MP3 File' };
      }
      const fragments = files.File.split(' - ');
      body.Artist = fragments[0].trim();
      bory.Name = fragments[1].replace('.mp3', '').trim();
      body.Url = url;
      const song = await commonService.create(Music, body);
      res.send(song);
    })
  );

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const songs = await commonService.getAll(Music);
      res.send(_.sortBy(songs, 'Artist'));
    })
  );

  router.get(
    '/search',
    wrap(async ({ query }, res, next) => {
      const songs = await commonService.search(Music, query);
      res.send(songs);
    })
  );

  router.put(
    '/update',
    wrap(async ({ body, files }, res, next) => {
      const url = commonService.uploadArchive(files, './public/Music', 'File');
      if (!url) {
        return { message: 'No MP3 File' };
      }
      const fragments = files.File.split(' - ');
      body.Artist = fragments[0].trim();
      body.Name = fragments[1].replace('.mp3', '').trim();
      body.Url = url;
      const song = await commonService.update(Music, body, null, ['Url']);
      res.send(song);
    })
  );

  router.put(
    '/delete_songs',
    wrap(async ({ body }, res, next) => {
      const ids = body.ids;
      await Promise.map(ids, id => commonService.delete(Music, id, ['Url']));
      return { ids };
    })
  );

  return router;
};
