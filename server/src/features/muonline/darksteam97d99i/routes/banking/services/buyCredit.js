export default async (models, factories, query, GameSetting, io) => {
  const { Banking, Character, BankingLog, UserBankingLog, UserCreditsLog, MembCredits } = models;
  const { findSocket } = factories;

  let { name, amount } = query;
  const { CREDIT_PRICE } = GameSetting;
  amount = parseInt(amount);

  const character = await Character.findOne({
    where: { Name: name },
    attributes: ['Name', 'AccountID', 'Money']
  });

  const [banking, membCredits] = [
    await Banking.findOne({
      where: { memb___id: character.AccountID }
    }),
    await MembCredits.findOne({
      where: { memb___id: character.AccountID }
    })
  ];

  banking.zen_balance = parseInt(banking.zen_balance);
  banking.loan_money = parseInt(banking.loan_money);

  if (banking.loan_money > 0) {
    return { message: `You must pay your dept first` };
  }

  const charged = amount * CREDIT_PRICE.buy;
  if (charged > banking.zen_balance) {
    return { message: 'Your zen balance is not enough' };
  }

  const [userBankingLog, userCreditsLog] = [
    await UserBankingLog.create({
      memb___id: character.AccountID,
      description: 'Buy credits',
      type: 'minus',
      money: charged
    }),
    await UserCreditsLog.create({
      memb___id: character.AccountID,
      description: 'Bought with zen',
      type: 'add',
      credits: amount
    }),
    await banking.update({ zen_balance: (banking.zen_balance - charged).toString() }),
    await membCredits.update({ credits: membCredits.credits + amount })
  ];
  
  const client = findSocket(io, 'ds9799_id', character.AccountID);
  if (client) {
    client.emit('darksteam97d99i/USER_CREDITS_LOG_UPDATE', userCreditsLog);
    client.emit('darksteam97d99i/USER_BANKING_LOG_UPDATE', userBankingLog);
  }

  return {
    credits: membCredits.credits + amount,
    zen_balance: banking.zen_balance - charged,
    Name: character.Name
  };
};
