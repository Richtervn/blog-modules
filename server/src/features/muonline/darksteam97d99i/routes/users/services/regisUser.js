import Promise from 'bluebird';

export default async (models, factories, helpers, body, commonSequelize) => {
  const { makeSmallDateTime, makeSnoNumber } = factories;
  const { getData } = helpers;
  const GameSetting = await getData('GameSetting');
  const { MembInfo, MembCredits, ViCurInfo, Banking, BankingLog, UserBankingLog, UserCreditLog } = models;

  const [isUsernameExist, isEmailExist] = [
    await commonSequelize.checkExist(MembInfo, 'memb___id', body.Username),
    await commonSequelize.checkExist(MembInfo, 'mail_addr', body.Email)
  ];

  if (isUsernameExist) return { message: 'Username is already exist' };
  if (isEmailExist) return { message: 'Email is already used' };

  const appl_days = makeSmallDateTime();
  const sno__numb = makeSnoNumber(body.BirthDay);

  const account = await MembInfo.create({
    memb___id: body.Username,
    memb__pwd: body.Password,
    memb_name: body.Name,
    mail_addr: body.Email,
    sno__numb: sno__numb,
    appl_days: appl_days,
    bloc_code: '0',
    ctl1_code: '0',
    IsVip: 0,
    VipExpirationTime: 0
  });

  ViCurInfo.create({
    ends_days: '2005',
    chek_code: '1',
    used_time: 1234,
    memb___id: account.memb___id,
    memb_name: account.memb_name,
    memb_guid: account.memb_guid,
    sno__numb: account.sno__numb,
    Bill_Section: 6,
    Bill_Value: 3,
    Bill_Hour: 6,
    Surplus_Point: 6,
    Increase_Days: 0
  });

  Banking.create({
    memb___id: body.Username,
    zen_balance: GameSetting.NEW_REGISTER_ZEN.toString(),
    loan_money: 0
  });

  MembCredits.create({
    memb___id: body.Username,
    credits: GameSetting.NEW_REGISTER_CREDIT
  });

  if (GameSetting.NEW_REGISTER_CREDIT) {
    UserCreditLog.create({
      memb___id: body.Username,
      description: 'New register reward',
      type: 'add',
      credits: GameSetting.NEW_REGISTER_CREDIT
    });
  }

  if (GameSetting.NEW_REGISTER_ZEN) {
    UserBankingLog.create({
      memb___id: body.Username,
      description: 'New register reward',
      type: 'add',
      money: GameSetting.NEW_REGISTER_ZEN
    });
  }

  return account;
};
