export default async (models, query, GameSetting, bankProfitLog) => {
  const { BANKING_LOAN_SETTING: { maxValue, isPercentage, charge } } = GameSetting;
  const { Banking, Character, BankingLog, UserBankingLog } = models;

  let { name, amount } = query;
  amount = parseInt(amount);
  let profit = 0;

  const character = await Character.findOne({
    attributes: ['Money', 'AccountID', 'Name'],
    where: { Name: name }
  });

  const banking = await Banking.findOne({
    where: { memb___id: character.AccountID }
  });
  banking.zen_balance = parseInt(banking.zen_balance);
  banking.loan_money = parseInt(banking.loan_money);

  if (amount >= maxValue) {
    return { message: 'You need to pay your dept first' };
  }

  let charged = 0;
  charged = isPercentage ? amount * charge : charge;

  let updateBankForm = {};
  let realGiveaway = amount - charged;
  let Money = character.Money + realGiveaway;
  updateBankForm.loan_money = (banking.loan_money + amount).toString();

  const [bankingLog, userBankingLog] = [
    await BankingLog.create({
      memb___id: character.AccountID,
      character_name: character.Name,
      description: `${character.AccountID} loan`,
      type: 'add',
      money: charged,
      indept_type: 'add',
      indept: amount
    }),
    await UserBankingLog.create({
      memb___id: character.AccountID,
      description: 'Loan',
      type: 'add',
      money: amount
    }),
    await bankProfitLog(charged, amount, 'add'),
    await banking.update(updateBankForm),
    await character.update({ Money: Money })
  ];

  const client = findSocket(io, 'ds9799_id', character.AccountID);

  return {
    Money,
    zen_balance: updateBankForm.zen_balance,
    loan_money: updateBankForm.loan_money,
    Name: character.Name
  };
};
