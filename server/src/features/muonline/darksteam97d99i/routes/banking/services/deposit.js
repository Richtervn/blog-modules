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
  banking.loan_money = parseInt(banking.loan_money);

  if (!isPercentage && amount < BANKING_DEPOSIT_FEE) {
    return { message: 'Character do not have enough Zen' };
  }

  if (character.Money < amount) {
    return { message: 'Character do not have enough Zen' };
  }

  let charged = 0;
  charged = isPercentage ? amount * charge : charge;

  let realDeposit = amount - charged;
  let updateBankForm = {}
  if(banking.loan_money > 0 && banking.loan_money <= realDeposit){
    updateBankForm.loan_money = '0';
    updateBankForm.zen_balance = (realDeposit - banking.loan_money).toString();
  } else {
    updateBankForm.zen_balance = (updateBankForm.zen_balance + realDeposit).toString();
  }

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
    Money,
    zen_balance: updateBankForm.zen_balance,
    loan_money: updateBankForm.loan_money ? updateBankForm.loan_money : 0,
    Name: character.Name
  };
};
