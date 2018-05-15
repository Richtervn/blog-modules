export default async (models, query, GameSetting, bankProfitLog) => {
  const { Banking, Character, BankingLog, UserBankingLog } = models;
  const { BANKING_DEPOSIT_FEE: { isPercentage, charge } } = GameSetting;

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

  if (!isPercentage && amount < BANKING_DEPOSIT_FEE) {
    return { message: `Deposit amount is not enough to pay the fee` };
  }

  if (character.Money < amount) {
    return { message: `${name} do not have enough Zen` };
  }

  let charged = 0;
  charged = isPercentage ? amount * charge : charge;

  let realDeposit = amount - charged;
  let updateBankForm = {};
  
  let indeptPaid = null;
  let bankingLogForm = {
    memb___id: character.AccountID,
    character_name: character.Name,
    description: `${character.AccountID} deposited`,
    type: 'add',
    money: charged
  };

  if (banking.loan_money > 0) {
    bankingLogForm.indept_type = 'minus';
    if (banking.loan_money <= realDeposit) {
      updateBankForm.loan_money = 0;
      updateBankForm.zen_balance = (realDeposit - banking.loan_money).toString();
      indeptPaid = banking.loan_money;
      bankingLogForm.indept = banking.loan_money;
    } else {
      updateBankForm.zen_balance = banking.zen_balance;
      updateBankForm.loan_money = banking.loan_money - realDeposit;
      indeptPaid = amount;
      bankingLogForm.indept = realDeposit;
    }
  } else {
    updateBankForm.zen_balance = (banking.zen_balance + realDeposit).toString();
  }

  const Money = character.Money - amount;
  const record = {
    AccountID: character.AccountID,
    CharName: character.Name,
    Amount: amount,
    Type: 'Deposit'
  };

  const [bankingLog, userBankingLog] = [
    await BankingLog.create(bankingLogForm),
    await UserBankingLog.create({
      memb___id: character.AccountID,
      description: 'Deposit',
      type: 'add',
      money: realDeposit
    }),
    await banking.update(updateBankForm),
    await character.update({ Money: Money }),
    await bankProfitLog(charged, indeptPaid, 'minus')
  ];

  return {
    Money,
    zen_balance: updateBankForm.zen_balance,
    loan_money: updateBankForm.loan_money ? updateBankForm.loan_money : 0,
    Name: character.Name
  };
};
