import Sequelize from 'sequelize';
import Promise from 'bluebird';

const models = async config => {
  const sequelize = new Sequelize(config.muDatabase);

  const authError = await sequelize.authenticate();

  if (authError) {
    console.log('[MUAPP] Unable to connect database', authError);
    return;
  }

  console.log('[MUAPP] Connect database successfully');
  await sequelize.sync();

  const MembInfo = sequelize.import('./MembInfo');
  const AccountCharacter = sequelize.import('./AccountCharacter');
  const Character = sequelize.import('./Character');
  const MembCredits = sequelize.import('./MembCredits');
  const Banking = sequelize.import('./Banking');
  const ViCurInfo = sequelize.import('./ViCurInfo');

  return {
    MembInfo,
    AccountCharacter,
    Character,
    MembCredits,
    Banking,
    ViCurInfo
  };
};

export default models;
