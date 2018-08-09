import Sequelize from 'sequelize';
import Promise from 'bluebird';

const models = async config => {
  const sequelize = new Sequelize('l2jdb', 'root', null, config.l2Database);

  const authError = await sequelize.authenticate();

  if (authError) {
    console.log('[L2-Freya] Unable to connect database', authError);
    return;
  }

  console.log('[L2-Freya] Connect database successfully');

  const Accounts = sequelize.import('./Accounts');

  //   try {
  //     await sequelize.sync();
  //   } catch(e){
  //     console.log(e);
  //   }

  return {
    Accounts
  };
};

export default models;
