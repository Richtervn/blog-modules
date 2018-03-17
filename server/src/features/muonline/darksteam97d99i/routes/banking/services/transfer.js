export default async (models, factories, query, GameSetting, bankProfitLog, io) => {
  const { BANKING_TRANSFER_FEE: { isPercentage, charge } } = GameSetting;
  const { Banking, Character, BankingLog, UserBankingLog } = models;
  const { findSocket, emitToClient } = factories;

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

  const client = findSocket(io, 'ds9799_id', character.AccountID);

  if (client) {
    client.emit('darksteam97d99i/BANKING_LOG_UPDATE', bankingLog);
    client.emit('darksteam97d99i/USER_BANKING_LOG_UPDATE', userBankingLog);
  }

  emitToClient(io, 'memb___id', receiveMemb, 'darksteam97d99i/USER_BANKING_LOG_UPDATE', receiverBankingLog);

  return {
    zen_balance: zen_balance,
    Name: character.Name
  };
};
