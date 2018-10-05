import _ from 'underscore';
import express from 'express';
import Promise from 'bluebird';
import lyricGet from 'lyric-get';

const getLyric = song =>
  new Promise((resolve, reject) => {
    lyricGet.get(song.Artist, song.Name, (err, res) => {
      if (err) {
        return resolve('');
      }
      return resolve(res);
    });
  });

export default (Music, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_songs',
    wrap(async ({ body, files }, res, next) => {
      const fileCount = parseInt(body._fileCount);
      if (fileCount < 1) {
        return res.send({ message: 'No MP3 Files' });
      }
      const records = [];
      for (let i = 0; i < fileCount; i++) {
        const record = {};
        const url = commonService.uploadArchive(files, './public/Music', `File${i}`);
        record.Url = url;
        const fragments = files[`File${i}`].name.split(' - ');
        record.Artist = fragments[0].trim();
        record.Name = fragments[1]
          .replace('.mp3', '')
          .replace('.m4a', '')
          .trim();
        record.Rating = body.Rating;
        record.Genre = body.Genre;
        records.push(record);
      }
      const results = [];
      await Promise.map(records, async rec => {
        const result = await commonService.create(Music, rec);
        results.push(result);
      });
      res.send(results);
    })
  );

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const songs = await commonService.getAll(Music, {}, { sort: { Artist: 'asc', Name: 'asc' } });
      res.send(songs);
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
      if (url) {
        const fragments = files.File.split(' - ');
        body.Artist = fragments[0].trim();
        body.Name = fragments[1]
          .replace('.mp3', '')
          .replace('.m4a', '')
          .trim();
        body.Url = url;
      }
      const song = await commonService.update(Music, body, null, ['Url']);
      res.send(song);
    })
  );

  router.put(
    '/delete_songs',
    wrap(async ({ body }, res, next) => {
      const ids = body.ids;
      await Promise.map(ids, id => commonService.delete(Music, id, ['Url']));
      res.send({ ids });
    })
  );

  router.get(
    '/lyrics/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const song = await commonService.getOne(Music, id);
      if (song.Lyrics) {
        return res.send({ lyrics: song.Lyrics });
      }
      try {
        const lyrics = await getLyric(song).timeout(5000);
        if (lyrics) {
          await commonService.update(Music, { _id: id, Lyrics: lyrics });
        }
        res.send({ lyrics });
      } catch (e) {
        res.send({ lyrics: '' });
      }
    })
  );

  return router;
};
