export default async (Banking, Character, query, GameSetting, bankLogger) => {
  const { BANKING_DEPOSIT_FEE: { isPercentage, charge } } = GameSetting;

  let { name, amount } = query;
  amount = parseInt(amount);
  let profit = 0;

  const character = await Character.findOne({
    attributes: ['Money', 'AccountID'],
    where: { Name: name }
  });

  const banking = await Banking.findOne({
    where: { memb___id: character.AccountID }
  });
  banking.zen_balance = parseInt(banking.zen_balance);

  if (!isPercentage && amount < BANKING_DEPOSIT_FEE) {
    return { message: 'Character do not have enough Zen' };
  }

  if (character.Money < amount) {
    return { message: 'Character do not have enough Zen' };
  }

  let charged = 0;
  charged = isPercentage ? amount * charge : charge;
  const zen_balance = banking.zen_balance + amount - charged;
  const Money = character.Money - amount;
  const record = {
    AccountID: character.AccountID,
    CharName: character.Name,
    Amount: amount,
    Type: 'Deposit'
  };
  [
    await banking.update({ zen_balance: zen_balance.toString() }),
    await character.update({ Money: Money }),
    await bankLogger(record, charged)
  ];

  return {
    zen_balance,
    Money,
    Name: character.Name
  };
};
