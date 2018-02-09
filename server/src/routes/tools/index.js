import _ from 'underscore';
import express from 'express';

export default (models, factories) => {
  const router = express.Router();
  const { wrap } = factories;

  const dynamicContentManifest = {
    GamingHistoryGuide: {
      DisplayField: 'Title',
      CssField: 'CSS',
      HtmlField: 'HTML'
    }
  };

  router.get('/content_mirror/get_tables', (req, res, next) => {
    res.send(dynamicContentManifest);
  });

  router.get(
    '/content_mirror/get_documents/:tableName',
    wrap(async (req, res, next) => {
      const { tableName } = req.params;
      const options = { _id: true };
      options[dynamicContentManifest[tableName].DisplayField] = true;
      const documents = await models[tableName].find({}, options);
      res.send(documents);
    })
  );

  router.get(
    '/content_mirror/get_document/:tableName/:docId',
    wrap(async (req, res, next) => {
      const { tableName, docId } = req.params;
      const options = { _id: true };
      options[dynamicContentManifest[tableName].CssField] = true;
      options[dynamicContentManifest[tableName].HtmlField] = true;
      const doc = await models[tableName].findOne({ _id: docId }, options);
      res.send(doc);
    })
  );

  router.put(
    '/content_mirror/save_code',
    wrap(async (req, res, next) => {
      const { collectionName, documentId } = req.body;
      const updateForm = { ..._.omit(req.body, 'collectionName', 'documentId') };
      const doc = await models[collectionName].findOne({ _id: documentId });
      Object.keys(updateForm).forEach(key => {
        doc[key] = updateForm[key];
      });
      await doc.save();
      res.send(req.body);
    })
  );

  // const htmlField = {
  //   Introduction: ['StarcraftCampaigns', 'StarcraftMods'],
  //   Description: ['DiabloIIMods', 'DiabloIITools']
  // };

  // router.get(
  //   '/content_mirror/records/:tableName',
  //   wrap(async (req, res, next) => {
  //     const data = await models[req.params.tableName].find({}, { Name: true });
  //     res.send(data);
  //   })
  // );

  // router.get(
  //   '/content_mirror/record/:tableName/:id',
  //   wrap(async ({ params: { tableName, id } }, res, next) => {
  //     const data = await models[tableName].findOne({ _id: id });
  //     let result;
  //     for (let key in htmlField) {
  //       if (_.contains(htmlField[key], tableName)) {
  //         result = data[key];
  //       }
  //     }

  //     res.send({ content: result });
  //   })
  // );

  // router.post(
  //   '/content_mirror/save_code',
  //   wrap(async (req, res, next) => {
  //     const { content, tableName, id } = req.body;
  //     let field;
  //     for (let key in htmlField) {
  //       if (_.contains(htmlField[key], tableName)) {
  //         field = key;
  //       }
  //     }
  //     await models[tableName].update({ _id: id }, { $set: { [field]: content } });
  //     res.send(req.body);
  //   })
  // );

  return router;
};
