import chalk from 'chalk';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $in: Op.in
};

export default async config => {
  const sequelize = new Sequelize(config.muDatabase, { logging: false, operatorsAliases });
  const authError = await sequelize.authenticate();

  if (authError) {
    console.log(`${chalk.bold.red('[Darksteam97d99i]')} Unable to connect database`);
    return;
  }

  console.log(`${chalk.bold.blue('[Darksteam97d99i]')} Connect database successfully`);

  const AccountCharacter = sequelize.import('./AccountCharacter');
  const Banking = sequelize.import('./Banking');
  const BankingLog = sequelize.import('./BankingLog');
  const Character = sequelize.import('./Character');
  const Consumable = sequelize.import('./Consumable');
  const Exchange = sequelize.import('./Exchange');
  const Material = sequelize.import('./Material');
  const MembCredits = sequelize.import('./MembCredits');
  const MembInfo = sequelize.import('./MembInfo');
  const Receipt = sequelize.import('./Receipt');
  const UserBankingLog = sequelize.import('./UserBankingLog');
  const UserCreditsLog = sequelize.import('./UserCreditsLog');
  const UserReceipt = sequelize.import('./UserReceipt');
  const UserWebQuest = sequelize.import('./UserWebQuest');
  const ViCurInfo = sequelize.import('./ViCurInfo');
  const VipSystem = sequelize.import('./VipSystem');
  const WebShopItem = sequelize.import('./WebShopItem');
  const WebShopPackage = sequelize.import('./WebShopPackage');

  try {
    await sequelize.sync();
  } catch (e) {
    console.log(e);
  }

  return {
    AccountCharacter,
    Banking,
    BankingLog,
    Character,
    Consumable,
    Exchange,
    Material,
    MembCredits,
    MembInfo,
    Receipt,
    UserBankingLog,
    UserCreditsLog,
    UserReceipt,
    UserWebQuest,
    ViCurInfo,
    VipSystem,
    WebShopItem,
    WebShopPackage
  };
};
