export default async (models, factories, helpers, body, commonSequelize) => {
  const { MembInfo, ViCurInfo, MembCredits, Banking } = models;
  const { makeSmallDateTime } = factories;
  const { getData } = helpers;
  const GameSetting = await getData('GameSetting');

  const [isUsernameExist, isEmailExist] = [
    await commonSequelize.checkExist(MembInfo, 'memb___id', body.Username),
    await commonSequelize.checkExist(MembInfo, 'mail_addr', body.Email)
  ];

  if (isUsernameExist) return { message: 'Username is already exist' };
  if (isEmailExist) return { message: 'Email is already used' };
  if (!body.appl_days) {
    body.appl_days = makeSmallDateTime();
  }

  const account = await MembInfo.create(body);
  [
    await ViCurInfo.create({
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
    }),
    await Banking.create({
      memb___id: body.Username,
      zen_balance: GameSetting.NEW_REGISTER_ZEN.toString(),
      loan_money: 0
    }),
    await MembCredits.create({
      memb___id: body.Username,
      credits: GameSetting.NEW_REGISTER_CREDIT
    })
  ];
  return account;
};
