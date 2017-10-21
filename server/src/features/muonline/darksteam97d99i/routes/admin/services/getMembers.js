export default async (MembInfo, query) => {
  const options = { where: { ...query } };
  const accounts = await MembInfo.findAll(options);
  return accounts
}