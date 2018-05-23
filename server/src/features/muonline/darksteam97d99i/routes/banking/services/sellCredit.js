export default async (models, query, GameSetting) => {
  const { Banking, Character, BankingLog, UserBankingLog, UserCreditsLog, MembCredits } = models;

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

  if (amount > membCredits.credits) {
    return { message: `You don't have enough credits to sell` };
  }

  const charged = amount * CREDIT_PRICE.sell;

  const [userBankingLog, userCreditsLog] = [
    await UserBankingLog.create({
      memb___id: character.AccountID,
      description: 'Sell credits',
      type: 'add',
      money: charged
    }),
    await UserCreditsLog.create({
      memb___id: character.AccountID,
      description: 'Sold for zen',
      type: 'minus',
      credits: amount
    }),
    await banking.update({ zen_balance: (banking.zen_balance + charged).toString() }),
    await membCredits.update({ credits: membCredits.credits - amount })
  ];

  return {
    credits: membCredits.credits - amount,
    zen_balance: banking.zen_balance + charged,
    Name: character.Name
  };
};
