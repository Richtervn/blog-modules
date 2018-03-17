export default async (models, factories, query, GameSetting, bankProfitLog, io) => {
  const { BANKING_WITHDRAW_FEE: { isPercentage, charge } } = GameSetting;
  const { Banking, Character, BankingLog, UserBankingLog } = models;
  const { findSocket } = factories;

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

  const [bankingLog, userBankingLog] = [
    await BankingLog.create({
      memb___id: character.AccountID,
      character_name: character.Name,
      description: `${character.AccountID} withdraw`,
      type: 'add',
      money: charged
    }),
    await UserBankingLog.create({
      memb___id: character.AccountID,
      description: 'Withdraw',
      type: 'minus',
      money: amount
    }),
    await banking.update({ zen_balance: zen_balance.toString() }),
    await character.update({ Money: Money }),
    await bankProfitLog(charged)
  ];

  const client = findSocket(io, 'ds9799_id', character.AccountID);

  if (client) {
    client.emit('darksteam97d99i/BANKING_LOG_UPDATE', bankingLog);
    client.emit('darksteam97d99i/USER_BANKING_LOG_UPDATE', userBankingLog);
  }

  return {
    Money,
    zen_balance: zen_balance,
    Name: character.Name
  };
};
