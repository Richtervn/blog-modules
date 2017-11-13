export default class WQ2 {
  constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
    this.webQuest = webQuest;
    this.baseRecord = baseRecord;
    this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
    this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;
  }

  check() {
    let isDone = true;
    if (this.baseRecord.progress < 100) {
      isDone = false;
    }
    return { isDone };
  }

  async checkPoint() {
    this.baseRecord.checkpoint += 1;
    this.baseRecord.progress = this.baseRecord.checkpoint / 10 * 100;

    await this.baseRecord.update({
      checkpoint: this.baseRecord.checkpoint,
      progress: this.baseRecord.progress
    });
  }

  async giveReward() {
    this.membCredits.credits += this.currentReward;

    await this.membCredits.update({
      credits: this.membCredits.credits
    });

    this.baseRecord.finish_times += 1;
    this.baseRecord.checkpoint = 0;
    this.baseRecord.progress = 0;
    this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
    this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;

    await this.baseRecord.update({
      checkpoint: 0,
      progress: 0
    });
  }
}
