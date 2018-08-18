import Sequelize from 'sequelize';
import Promise from 'bluebird';
import chalk from 'chalk';

const models = async config => {
  const sequelize = new Sequelize('l2jdb', 'root', null, { ...config.l2Database, operatorsAliases: false });

  const authError = await sequelize.authenticate();

  if (authError) {
    console.log(`${chalk.bold.red('[L2-Freya]')} Unable to connect database`);
    return;
  }

  console.log(`${chalk.bold.blue('[L2-Freya]')} Connect database successfully`);

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
