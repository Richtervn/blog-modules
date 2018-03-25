export default async (models, query, GameSetting, bankProfitLog) => {
  const { BANKING_TRANSFER_FEE: { isPercentage, charge } } = GameSetting;
  const { Banking, Character, BankingLog, UserBankingLog } = models;

  let { name, amount, receiveMemb } = query;
  amount = parseInt(amount);

  const receiverBanking = await Banking.findOne({
    where: { memb___id: receiveMemb }
  });

  if (!receiverBanking) return { message: `Account ${receiveMemb} is not exist` };
  receiverBanking.zen_balance = parseInt(banking.zen_balance);
  receiverBanking.loan_money = parseInt(banking.loan_money);

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

  if (amount < banking.zen_balance - charged) {
    return { message: 'Your remain balance will not enough to pay the fee' };
  }

  const realTransfer = amount - charged;
  const zen_balance = banking.zen_balance - amount;

  if (receiverBanking.loan_money > 0) {
    if (receiverBanking.loan_money < realTransfer) {
      receiverBanking.update({
        zen_balance: realTransfer - receiverBanking.loan_money,
        loan_money: 0
      });
    } else {
      receiverBanking.update({
        loan_money: receiverBanking.loan_money - realTransfer
      });
    }
  }

  const [bankingLog, userBankingLog, receiverBankingLog] = [
    await BankingLog.create({
      memb___id: character.AccountID,
      character_name: character.Name,
      description: `${character.AccountID} transfer to ${receiveMemb}`,
      type: 'add',
      money: charged
    }),
    await UserBankingLog.create({
      memb___id: character.AccountID,
      description: 'Transfer',
      type: 'minus',
      money: amount
    }),
    await UserBankingLog.create({
      memb___id: receiveMemb,
      description: 'Received',
      type: 'add',
      money: realTransfer
    }),
    await banking.update({ zen_balance: zen_balance.toString() }),
    await bankProfitLog(charged)
  ];

  return {
    zen_balance: zen_balance,
    Name: character.Name
  };
};
