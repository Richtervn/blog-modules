import express from 'express';
import moment from 'moment';

export default (AppDiary, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/',
    wrap(async ({ body }, res, next) => {
      const log = await commonService.create(AppDiary, { ts: moment(), text: body.text });
      res.send(log);
    })
  );

  router.get(
    '/',
    wrap(async (req, res, next) => {
      const logs = await commonService.getAll(AppDiary);
      res.send(logs);
    })
  );

  return router;
};
