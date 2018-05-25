/* Fill profile quest */

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

export default class WQ01 {
  constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
    this.baseRecord = baseRecord;
    this.webQuest = webQuest;
    this.membInfo = membInfo;
    this.membCredits = membCredits;
    this.MembCredits = models.MembCredits;
    this.MembInfo = models.MembInfo;
    this.UserCreditsLog = models.UserCreditsLog;
  }

  check() {
    const message = validateMembInfo(this.membInfo);
    const isDone = message == '';

    return { message, isDone };
  }

  async checkPoint() {
    this.membInfo = await this.MembInfo.findOne({ where: { memb___id: this.membInfo.memb___id } });
    const { isDone } = this.check();
    return { _id: 'WQ01', isDone };
  }

  async giveReward() {
    this.membCredits = await this.MembCredits.findOne({ where: { memb___id: this.membInfo.memb___id } });
    const { reward } = this.webQuest;
    this.membCredits.credits += reward;

    await this.membCredits.update({
      credits: this.membCredits.credits
    });

    await this.UserCreditsLog.create({
      memb___id: this.membInfo.memb___id,
      description: `Finish quest ${this.webQuest.description} reward`,
      type: 'add',
      credits: reward
    });

    this.baseRecord = await this.baseRecord.update({
      status: 'done'
    });

    return {
      _id: 'WQ01',
      credits: this.membCredits.credits,
      status: 'done'
    };
  }

  buildResult() {
    const { _id, description, isRepeatable, type, reward_unit, reward, isJumpStep, rules } = this.webQuest;
    const { message, isDone } = this.check();
    const { status } = this.baseRecord;
    const result = {
      _id,
      description,
      isRepeatable,
      type,
      reward_unit,
      reward,
      message,
      isDone,
      isJumpStep,
      rules,
      status
    };
    result.progress = isDone ? 100 : 0;
    return result;
  }
}
