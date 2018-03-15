export default async (Banking, Character, query, GameSetting, bankLogger) => {
  const { BANKING_WITHDRAW_FEE: { isPercentage, charge } } = GameSetting;

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

  let charged = 0;
  charged = isPercentage ? amount * charge : charge;

  if (banking.zen_balance < charged) {
    return { message: 'Withdraw amount is not enough to pay the fee' };
  }

  if (amount > banking.zen_balance - charged) {
    return { message: 'Your remain balance will not enough to pay the fee' };
  }

  const Money = character.Money + amount;
  const zen_balance = banking.zen_balance - amount - charged;

  const record = {
    AccountID: character.AccountID,
    CharName: character.Name,
    Amount: amount,
    Type: 'Withdraw'
  };

  [
    await banking.update({ zen_balance: zen_balance.toString() }),
    await character.update({ Money: Money }),
    await bankLogger(record, charged)
  ];

  return {
    Money,
    zen_balance: zen_balance,
    Name: character.Name
  }
};
