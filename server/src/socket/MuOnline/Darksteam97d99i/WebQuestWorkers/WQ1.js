const validateMembInfo = membInfo => {
  let message = '';

  const {
    mail_addr,
    post_code,
    addr_info,
    addr_deta,
    tel__numb,
    phon_numb,
    fpas_ques,
    fpas_answ,
    job__code
  } = membInfo;

  if (!mail_addr) {
    return (message = 'Missing field Email Address');
  }
  if (!post_code) {
    return (message = 'Missing field Post Code');
  }
  if (!addr_info) {
    return (message = 'Missing field Address Info');
  }
  if (!addr_deta) {
    return (message = 'Missing field Address Deta');
  }
  if (!tel__numb) {
    return (message = 'Missing field Telephone Number');
  }
  if (!phon_numb) {
    return (message = 'Missing field Phone Number');
  }
  if (!fpas_ques) {
    return (message = 'Missing field Secret Question');
  }
  if (!fpas_answ) {
    return (message = 'Missing field Secret Answer');
  }
  if (!job__code) {
    return (message = 'Missing field JobCode');
  }

  return message;
};

export default class WQ1 {
  constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
    this.baseRecord = baseRecord;
    this.webQuest = webQuest;
    this.membInfo = membInfo;
  }

  check() {
    const message = validateMembInfo(this.membInfo);
    const isDone = message == '';

    return { message, isDone };
  }

  async giveReward() {
    const { reward } = this.webQuest;
    this.membCredits += 50;

    await this.membCredits.update({
      credits: this.membCredits.credits,
      status: 'done'
    });

    return {
      _id: 'WQ1',
      credits: this.membCredits.credits,
      status: 'done'
    };
  }

  buildResult() {
    const { _id, description, isRepeatable, type, reward_unit, reward, isJumpStep, rules } = this.webQuest;
    const { message, isDone } = this.check();
    const result = { _id, description, isRepeatable, type, reward_unit, reward, message, isDone, isJumpStep, rules };
    result.progress = isDone ? 100 : 0;
    return result;
  }
}
