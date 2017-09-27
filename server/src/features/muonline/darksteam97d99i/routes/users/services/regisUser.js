import Promise from 'bluebird';

export default async (MembInfo, ViCurInfo, MembCredit, Banking, body, helpers, appConfigs) => {
  console.log(body);
  const { makeSmallDateTime, makeSnoNumber } = helpers;
  const { GameSetting } = appConfigs;

  const checkExistUsername = async () => {
    let isExist = false;
    try {
      const info = await MembInfo.findOne({ where: { memb___id: body.Username } });
      if (info) isExist = true;
      return isExist;
    } catch (e) {
      return false;
    }
  };

  const checkExistEmail = async () => {
    let isExist = false;
    try {
      const info = await MembInfo.findOne({ where: { mail_addr: body.Email } });
      if (info) isExist = true;
      return isExist;
    } catch (e) {
      return false;
    }
  };

  try {
    const [isUsernameExist, isEmailExist] = [await checkExistUsername(), await checkExistEmail()];
    if (isUsernameExist) return { error: 'Username is already exist' };
    if (isEmailExist) return { error: 'Email is already used' };

    const appl_days = makeSmallDateTime();
    const sno__numb = makeSnoNumber(body.BirthDay);

    const account = await MembInfo.create({
      memb___id: body.Username,
      memb__pwd: body.Password,
      memb_name: body.Name,
      mail_addr: body.EMail,
      sno__numb: sno__numb,
      appl_days: appl_days,
      bloc_code: '0',
      ctl1_code: '0'
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

    MembCredit.create({
      memb___id: body.Username,
      credits: GameSetting.NEW_REGISTER_CREDIT
    });
  } catch(e){
    console.log(e);
    return false;
  }

  return account;
};