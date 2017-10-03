export default async (Banking, Character, query, GameSetting, bankLogger) => {
  const { BANKING_LOAN_SETTING: { maxValue, isPercentage, charge } } = GameSetting;

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

  const record = {
    AccountID: character.AccountID,
    CharName: character.Name,
    Amount: amount,
    Type: 'Loan'
  };
  [
    await banking.update(updateBankForm),
    await character.update({ Money: Money }),
    await bankLogger(record, charged, amount)
  ];

  return {
    Money,
    zen_balance: updateBankForm.zen_balance,
    loan_money: updateBankForm.loan_money,
    Name: character.Name
  };
};
