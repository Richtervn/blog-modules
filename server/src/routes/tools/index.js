import _ from 'underscore';
import express from 'express';
import dynamicContentManifest from './dynamicContentManifest';

export default (models, factories) => {
  const router = express.Router();
  const { wrap } = factories;

  router.get('/content_mirror/get_tables', (req, res, next) => {
    res.send(dynamicContentManifest);
  });

  router.get(
    '/content_mirror/get_documents/:tableName',
    wrap(async ({ params: { tableName } }, res, next) => {
      const options = { _id: true };
      options[dynamicContentManifest[tableName].DisplayField] = true;
      const documents = await models[tableName].find({}, options);
      res.send(documents);
    })
  );

  router.get(
    '/content_mirror/get_document/:tableName/:docId',
    wrap(async ({ params: { tableName, docId } }, res, next) => {
      const options = { _id: true };
      options[dynamicContentManifest[tableName].CssField] = true;
      options[dynamicContentManifest[tableName].HtmlField] = true;
      const doc = await models[tableName].findOne({ _id: docId }, options);
      res.send(doc);
    })
  );

  router.put(
    '/content_mirror/save_code',
    wrap(async ({ body }, res, next) => {
      const { collectionName, documentId } = body;
      const updateForm = { ..._.omit(body, 'collectionName', 'documentId') };
      const doc = await models[collectionName].findOne({ _id: documentId });
      Object.keys(updateForm).forEach(key => {
        doc[key] = updateForm[key];
      });
      await doc.save();
      res.send(body);
    })
  );

  return router;
};
