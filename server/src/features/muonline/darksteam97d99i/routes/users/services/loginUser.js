export default async (MembInfo, body) => {
  try {
    const account = await MembInfo.findOne({
      where: {
        memb___id: body.Username,
        memb__pwd: body.Password
      }
    });
    return account;
  } catch(e){
    console.log(e);
    return false;
  }
}