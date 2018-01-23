import express from 'express';

import addProject from './services/addProject';
import updateProject from './services/updateProject';

export default (Projects, factories) => {
  const router = express.Router();
  const { readFile, wrap, commonService } = factories;

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const projects = await commonService.getAll(Projects);
      res.send(projects);
    })
  );

  router.post(
    '/add',
    wrap(async (req, res, next) => {
      const project = await addProject(Projects, req.body);
      res.send(project);
    })
  );

  router.put(
    '/edit',
    wrap(async (req, res, next) => {
      const project = await updateProject(Projects, req.body);
      res.send(project);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(Projects, req.params.id);
      res.send(id);
    })
  );

  return router;
};
