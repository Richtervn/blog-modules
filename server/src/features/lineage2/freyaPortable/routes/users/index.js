import express from 'express';
import bcrypt from 'bcrypt';

export default (models, factories) => {
  const router = express.Router();
  const { wrap } = factories;
  const { Accounts } = models;

  router.get(
    '/',
    wrap(async (req, res, next) => {
      const user = await Accounts.findOne({ where: { login: 'richter' } });
      bcrypt.compare('123456', user.password).then(res => console.log(res));
      res.send(user);
    })
  );

  return router;
};
