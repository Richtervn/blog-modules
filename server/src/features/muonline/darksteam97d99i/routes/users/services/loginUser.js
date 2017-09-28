export default async (MembInfo, ViCurInfo, Banking, MembCredits, body) => {
  try {
    const account = await MembInfo.findOne({
      where: {
        memb___id: body.Username
      }
    });

    if (!account) return { message: 'Wrong Username' };
    if (account.memb__pwd != body.Password) return { message: 'Wrong password' };

    const getVipInfo = async () => {
      const vipInfo = await ViCurInfo.findOne({
        where: { memb___id: account.dataValues.memb___id }
      });
      return vipInfo;
    };

    const getBanking = async () => {
      const bankInfo = await Banking.findOne({
        where: { memb___id: account.dataValues.memb___id }
      });
      return bankInfo;
    };

    const getMembCredit = async () => {
      const creditInfo = await MembCredits.findOne({
        where: { memb___id: account.dataValues.memb___id }
      });
      return creditInfo;
    };

    const [vipInfo, bankInfo, creditInfo] = [await getVipInfo(), await getBanking(), await getMembCredit()];

    account.dataValues.ViCurInfo = vipInfo;
    account.dataValues.Banking = bankInfo;
    account.dataValues.MembCredits = creditInfo;

    return account.dataValues;
  } catch (e) {
    console.log(e);
    return false;
  }
};
