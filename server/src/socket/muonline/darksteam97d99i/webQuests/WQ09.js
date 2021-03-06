/* Buy credits */

export default class WQ09 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.webQuest = webQuest;
		this.banking = banking;
		this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
		this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;
		this.membInfo = membInfo;
		this.Banking = models.Banking;
		this.UserBankingLog = models.UserBankingLog;
	}

	check() {
		let isDone = true;
		if (this.baseRecord.progress < 100) {
			isDone = false;
		}
		return { isDone };
	}

	async checkPoint(amount) {
		this.baseRecord.checkpoint += amount;
		this.baseRecord.progress = this.baseRecord.checkpoint / this.currentRequirement * 100;

		await this.baseRecord.update({
			checkpoint: this.baseRecord.checkpoint,
			progress: this.baseRecord.progress
		});

		return {
			_id: 'WQ09',
			progress: this.baseRecord.progress
		};
	}

	async giveReward() {
		this.banking = await this.Banking.findOne({ where: { memb___id: this.membInfo.memb___id } });
		this.banking.zen_balance = parseInt(this.banking.zen_balance) + this.currentReward;
		this.baseRecord.checkpoint = 0;
		this.baseRecord.progress = 0;
		this.baseRecord.finish_times += 1;

		await this.banking.update({
			zen_balance: this.banking.zen_balance.toString()
		});

		await this.UserBankingLog.create({
      memb___id: this.membInfo.memb___id,
      description: `Finish quest ${this.webQuest.description} reward`,
      type: 'add',
      money: this.currentReward
    });

		await this.baseRecord.update({
			progress: 0,
			checkpoint: 0,
			finish_times: this.baseRecord.finish_times
		});

		this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
		this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;
		const { isDone } = this.check();

		return {
			_id: 'WQ09',
			zen_balance: this.banking.zen_balance.toString(),
			progress: 0,
			finish_times: this.baseRecord.finish_times,
			requirement: this.currentRequirement,
			reward: this.currentReward,
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
