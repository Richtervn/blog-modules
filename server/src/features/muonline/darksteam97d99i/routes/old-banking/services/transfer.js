export default async (Banking, Character, query, GameSetting, bankLogger) => {
  const { BANKING_TRANSFER_FEE: { isPercentage, charge } } = GameSetting;

  let { name, amount, receiveMemb } = query;
  amount = parseInt(amount);
  let profit = 0;

  const reciverBanking = await Banking.findOne({
    where: { memb___id: receiveMemb }
  });
  if (!reciverBanking) return { message: `Account ${receiveMemb} is not exist` };
  reciverBanking.zen_balance = parseInt(banking.zen_balance);
  reciverBanking.loan_money = parseInt(banking.loan_money);

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
  const zen_balance = banking.zen_balance - amount - charged;
  const record = {
    AccountID: character.AccountID,
    CharName: character.Name,
    Reciever: receiveMemb,
    Amount: amount,
    Type: 'Transfer'
  };

  if (reciverBanking.loan_money > 0) {
    if (reciverBanking.loan_money < realTransfer) {
      reciverBanking.update({
        zen_balance: realTransfer - reciverBanking.loan_money,
        loan_money: 0
      });
    } else {
      reciverBanking.update({
        loan_money: reciverBanking.loan_money - realTransfer
      });
    }
  }

  [await banking.update({ zen_balance: zen_balance.toString() }), await bankLogger(record, charged)];

  return {
    zen_balance: zen_balance,
    Name: character.Name
  };
};
