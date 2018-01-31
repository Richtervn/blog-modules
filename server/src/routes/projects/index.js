import express from 'express';

import addProject from './services/addProject';
import addItem from './services/addItem';
import editItem from './services/editItem';
import getAllProjects from './services/getAllProjects';
import moveItem from './services/moveItem';
import updateProject from './services/updateProject';
import updateSetting from './services/updateSetting';

export default (Projects, factories) => {
  const router = express.Router();
  const { readFile, wrap, commonService } = factories;

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const projects = await getAllProjects(Projects);
      res.send(projects);
    })
  );

  router.get(
    '/get_detail/:id',
    wrap(async (req, res, next) => {
      const project = await commonService.getOne(Projects, req.params.id);
      res.send(project);
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

  router.put(
    '/setting',
    wrap(async (req, res, next) => {
      const setting = await updateSetting(Projects, req.body);
      res.send(setting);
    })
  );

  router.post(
    '/add_item',
    wrap(async (req, res, next) => {
      const result = await addItem(Projects, req.body);
      res.send(result);
    })
  );

  router.put(
    '/move_item',
    wrap(async (req, res, next) => {
      const result = await moveItem(Projects, req.body);
      res.send(result);
    })
  );

  router.put(
    '/edit_item',
    wrap(async (req, res, next) => {
      const result = await editItem(Projects, req.body);
      res.send(result);
    })
  );

  return router;
};
