export default async (Banking, Character, query, GameSetting, bankLogger) => {
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

  const record = {
    AccountID: character.AccountID,
    CharName: character.Name,
    Amount: amount,
    Type: 'BuyCredit'
  };

  [
    await banking.update({ zen_balance: (banking.zen_balance - charged).toString() }),
    await membCredits.update({ credits: membCredits.credits + amount }),
    await bankLogger(record)
  ];

  return {
    credits: membCredits.credits + amount,
    zen_balance: banking.zen_balance - charged,
    Name: character.Name
  }

};
