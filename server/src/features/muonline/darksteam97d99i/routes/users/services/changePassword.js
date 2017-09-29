export default async (MembInfo, body) => {
  const account = await MembInfo.findOne({
    where: {
      memb___id: body.MembId
    }
  });
  if (account.memb__pwd != body.OldPassword) {
    return { message: 'Current password is wrong' };
  }
  account.update({ memb__pwd: body.NewPassword });
  return;
};
