export default async (MembInfo, body, helpers) => {
  const { makeSmallDateTime } = helpers;
  try {
    const account = await MembInfo.findOne({
      where: {
        memb_guid: body.MembGuid
      }
    });

    const modi_days = makeSmallDateTime();
    const editForm = { modi_days: modi_days };

    const { PostCode, AddrInfo, AddrDeta, TelNumb, PhonNumb, FpasQues, FpasAnsw, JobCode, MailAddr } = body;
    if (PostCode) editForm.post_code = PostCode;
    if (AddrInfo) editForm.addr_info = AddrInfo;
    if (AddrDeta) editForm.addr_deta = AddrDeta;
    if (TelNumb) editForm.tel__numb = TelNumb;
    if (PhonNumb) editForm.phon_numb = PhonNumb;
    if (FpasQues) editForm.fpas_ques = FpasQues;
    if (FpasAnsw) editForm.fpas_answ = FpasAnsw;
    if (JobCode) editForm.job__code = JobCode;
    if (MailAddr) editForm.mail_addr = MailAddr;

    const editedAccount = await account.update(editForm);
    return editedAccount;
  } catch (e) {
    console.log(e);
    return { message: e.message };
  }
};
