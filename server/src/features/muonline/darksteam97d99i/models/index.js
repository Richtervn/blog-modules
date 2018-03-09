import Sequelize from 'sequelize';

export default async config => {
  const sequelize = new Sequelize(config.muDatabase, { logging: false });
  const authError = await sequelize.authenticate();

  if (authError) {
    console.log('[MUAPP] Unable to connect database', authError);
    return;
  }

  console.log('[MUAPP] Connect database successfully');

  const MembInfo = sequelize.import('./MembInfo');
  const AccountCharacter = sequelize.import('./AccountCharacter');
  const Character = sequelize.import('./Character');
  const MembCredits = sequelize.import('./MembCredits');
  const Banking = sequelize.import('./Banking');
  const ViCurInfo = sequelize.import('./ViCurInfo');
  const VipSystem = sequelize.import('./VipSystem');
  const UserWebQuest = sequelize.import('./UserWebQuest');
  const WebShopItem = sequelize.import('./WebShopItem');
  const WebShopPackage = sequelize.import('./WebShopPackage');
  const Consumable = sequelize.import('./Consumable');
  const Exchange = sequelize.import('./Exchange');
  const Material = sequelize.import('./Material');
  const Receipt = sequelize.import('./Receipt');
  const UserReceipt = sequelize.import('./UserReceipt');

  try {
    await sequelize.sync();
  } catch (e) {
    console.log(e);
  }

  return {
    MembInfo,
    AccountCharacter,
    Character,
    MembCredits,
    Banking,
    ViCurInfo,
    VipSystem,
    UserWebQuest,
    WebShopItem,
    WebShopPackage,
    Consumable,
    Exchange,
    Material,
    Receipt,
    UserReceipt
  };
};
