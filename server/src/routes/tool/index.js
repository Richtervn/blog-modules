import _ from 'underscore';
import express from 'express';

export default (models, factories) => {
  const router = express.Router();
  const { wrap } = factories;

  const htmlField = {
    Introduction: ['StarcraftCampaigns', 'StarcraftMods'],
    Description: ['DiabloIIMods', 'DiabloIITools']
  };

  router.get(
    '/content_manage/db/:tableName',
    wrap(async (req, res, next) => {
      const data = await models[req.params.tableName].find({}, { Name: true });
      res.send(data);
    })
  );

  router.get(
    '/content_manage/record/:tableName/:id',
    wrap(async ({ params: { tableName, id } }, res, next) => {
      const data = await models[tableName].findOne({ _id: id });
      let result;
      for (let key in htmlField) {
        if (_.contains(htmlField[key], tableName)) {
          result = data[key];
        }
      }

      res.send(result);
    })
  );

  router.post(
    '/content_manage/save',
    wrap(async (req, res, next) => {
      const { content, tableName, id } = req.body;
      let field;
      for (let key in htmlField) {
        if (_.contains(htmlField[key], tableName)) {
          field = key;
        }
      }
      await models[tableName].update({ _id: id, $set: { [field]: content } });
      res.send(req.body);
    })
  );

  return router;
};
