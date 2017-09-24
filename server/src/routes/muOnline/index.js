import express from 'express';

export default (MuOnlineTools, MuOnlineVersions, factories) => {
  const router = express.Router();
  const {wrap, commonService} = factories;

  return router;
};
