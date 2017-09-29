export default async (MembInfo, MembId) => {
  const account = await MembInfo.findOne({
    where: {
      memb___id: MembId
    }
  });
  return account;
};
