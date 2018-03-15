import Sequelize from 'sequelize';

// $notLike: Op.notLike,
// $iLike: Op.iLike,
// $notILike: Op.notILike,
// $regexp: Op.regexp,
// $notRegexp: Op.notRegexp,
// $iRegexp: Op.iRegexp,
// $notIRegexp: Op.notIRegexp,
// $between: Op.between,
// $notBetween: Op.notBetween,
// $overlap: Op.overlap,
// $contains: Op.contains,
// $contained: Op.contained,
// $adjacent: Op.adjacent,
// $strictLeft: Op.strictLeft,
// $strictRight: Op.strictRight,
// $noExtendRight: Op.noExtendRight,
// $noExtendLeft: Op.noExtendLeft,
// $and: Op.and,
// $or: Op.or,
// $any: Op.any,
// $all: Op.all,
// $values: Op.values,
// $col: Op.col
// $notIn: Op.notIn,
// $is: Op.is  // $eq: Op.eq,
// $ne: Op.ne,
// $gte: Op.gte,
// $gt: Op.gt,
// $lte: Op.lte,
// $lt: Op.lt,
// $not: Op.not,

const Op = Sequelize.Op;
const operatorsAliases = {
  $in: Op.in,
  $like: Op.like
};

export default async config => {
  const sequelize = new Sequelize(config.muDatabase, { logging: false, operatorsAliases });
  const authError = await sequelize.authenticate();

  if (authError) {
    console.log('[Darksteam97d99i] Unable to connect database', authError);
    return;
  }

  console.log('[Darksteam97d99i] Connect database successfully');

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
