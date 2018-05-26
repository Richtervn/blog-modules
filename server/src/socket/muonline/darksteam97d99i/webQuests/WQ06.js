/* Loan 5 billions zen from Bank */

export default class WQ06 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.webQuest = webQuest;
		this.membCredits = membCredits;
		this.membInfo = membInfo;
		this.MembCredits = models.MembCredits;
		this.UserCreditsLog = models.UserCreditsLog;
	}

	check() {
		let isDone = true;
		if (this.baseRecord.progress < 100) {
			isDone = false;
		}
		return { isDone };
	}

	async checkPoint(amount) {
		this.baseRecord.checkpoint += parseInt(amount);
		this.baseRecord.progress = this.baseRecord.checkpoint / 5000000000 * 100;
		await this.baseRecord.update({
			progress: this.baseRecord.progress,
			checkpoint: this.baseRecord.checkpoint
		});
		return {
			_id: 'WQ06',
			progress: this.baseRecord.progress
		};
	}

	async giveReward() {
		this.membCredits = await this.MembCredits.findOne({ where: { memb___id: this.membInfo.memb___id } });
		this.membCredits.credits += this.webQuest.reward;
		this.baseRecord.finish_times += 1;
		this.baseRecord.checkpoint = 0;
		this.baseRecord.progress = 0;

		await this.membCredits.update({
			credits: this.membCredits.credits
		});

		await this.baseRecord.update({
			progress: 0,
			checkpoint: 0,
			finish_times: this.baseRecord.finish_times
		});

		await this.UserCreditsLog.create({
      memb___id: this.membInfo.memb___id,
      description: `Finish quest ${this.webQuest.description} reward`,
      type: 'add',
      credits: this.webQuest.reward
    });

		const { isDone } = this.check();

		return {
			_id: 'WQ06',
			credits: this.membCredits.credits,
			progress: 0,
			finish_times: this.baseRecord.finish_times,
			isDone
		};
	}

	buildResult() {
		const { _id, description, isRepeatable, type, reward, reward_unit, isJumpStep, rules } = this.webQuest;
		const { progress, finish_times } = this.baseRecord;
		const { isDone } = this.check();
		const result = {
			_id,
			description,
			isRepeatable,
			type,
			reward,
			reward_unit,
			isDone,
			progress,
			finish_times,
			isJumpStep,
			rules
		};
		return result;
	}
}
