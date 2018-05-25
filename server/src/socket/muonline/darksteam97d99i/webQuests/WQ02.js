/* Use add points 10 times */

export default class WQ02 {
  constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
    this.webQuest = webQuest;
    this.baseRecord = baseRecord;
    this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
    this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;
    this.MembCredits = models.MembCredits;
    this.membInfo = membInfo;
  }

  check() {
    let isDone = true;
    if (this.baseRecord.progress < 100) {
      isDone = false;
    }
    return { isDone };
  }

  async checkPoint(amount) {
    if (parseInt(amount) > this.currentRequirement) {
      this.baseRecord.checkpoint += 1;
      this.baseRecord.progress = this.baseRecord.checkpoint / 10 * 100;
      await this.baseRecord.update({
        checkpoint: this.baseRecord.checkpoint,
        progress: this.baseRecord.progress
      });
    }
    return { _id: 'WQ02', progress: this.baseRecord.progress };
  }

  async giveReward() {
    this.membCredits = await this.MembCredits.findOne({ where: { memb___id: this.membInfo.memb___id } });

    await this.membCredits.update({
      credits: this.membCredits.credits
    });

    this.baseRecord.finish_times += 1;
    this.baseRecord.checkpoint = 0;
    this.baseRecord.progress = 0;
    this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
    this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;

    const { isDone } = this.check();

    await this.baseRecord.update({
      checkpoint: 0,
      progress: 0
    });

     await this.UserCreditsLog.create({
      memb___id: this.membInfo.memb___id,
      description: `Finish quest ${this.webQuest.description} reward`,
      type: 'add',
      credits: reward
    });

    return {
      _id: 'WQ02',
      progress: 0,
      credits: this.membCredits.credits,
      finish_times: this.finish_times,
      isDone
    };
  }

  buildResult() {
    const { _id, description, isRepeatable, type, reward_unit, isJumpStep, rules } = this.webQuest;
    const { progress, finish_times } = this.baseRecord;
    const { isDone } = this.check();
    const result = {
      _id,
      description,
      isRepeatable,
      type,
      reward_unit,
      isDone,
      progress,
      finish_times,
      isJumpStep,
      rules
    };
    result.reward = this.currentReward;
    result.requirement = this.currentRequirement;

    return result;
  }
}
