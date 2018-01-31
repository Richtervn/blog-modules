import express from 'express';
import moment from 'moment';

export default (AppDiary, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/',
    wrap(async (req, res, next) => {
      const log = new AppDiary({
        ts: moment(),
        text: req.body.text
      });
      const result = await log.save();
      res.send(result);
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
