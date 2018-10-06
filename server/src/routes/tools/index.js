import _ from 'underscore';
import express from 'express';
import dynamicContentManifest from './dynamicContentManifest';

// import kue from 'kue';

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

  // let queue
  // router.get('/create_queue', (req, res, next) => {
  //   queue = kue.createQueue({
  //     redis: 'redis://localhost'
  //   });
  //   queue.process('test', (job, done) => {
  //     console.log('done');
  //   })
  //   console.log(queue);
  //   res.sendStatus(200);
  // });

  // router.get('/create_job', (req, res, next) => {
  //   queue.create('test', { data: 'dcm' }).save();
  //   res.sendStatus(200);
  // })

  return router;
};
