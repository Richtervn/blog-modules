import express from 'express';
import fs from 'fs';
import path from 'path';

import downloadYoutubeMp3 from './services/downloadYoutubeMp3';

export default factories => {
  const router = express.Router();
  const { wrap, deleteFile } = factories;

  router.post(
    '/download_youtube_mp3',
    wrap(async ({ body }, res, next) => {
      const result = await downloadYoutubeMp3(body.url);
      res.send(result);
    })
  );

  router.get(
    '/downloaded_mp3',
    wrap(async ({ query }, res, next) => {
      if (query.action == 'download') {
        const options = {
          headers: {
            'Content-Type': 'audio/mpeg',
            'Content-Disposition': `attachment; filename="${query.fileName}.mp3"`
          }
        };

        res.sendFile(
          path.join(__dirname, '../../../', `/public/tmp/Youtube MP3/${query.fileName}.mp3`),
          options,
          err => {
            if (err) return next(err);
            deleteFile(`/public/tmp/Youtube MP3/${query.fileName}.mp3`);
          }
        );
      } else {
        deleteFile(`/public/tmp/Youtube MP3/${query.fileName}.mp3`);
        res.send({ status: 'ok' });
      }
    })
  );

  return router;
};
