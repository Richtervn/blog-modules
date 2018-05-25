/* Buy 1 Account VIP package */

export default class WQ10 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.membCredits = membCredits;
		this.webQuest = webQuest;
		this.banking = banking;
		this.Banking = models.Banking;
		this.membInfo = membInfo;
		this.UserBankingLog = models.UserBankingLog;
	}

	check() {
		let isDone = true;
		if (this.baseRecord.progress < 100) {
			isDone = false;
		}
		return { isDone };
	}

	async checkPoint() {
		this.baseRecord.progress = 100;

		await this.baseRecord.update({
			progress: this.baseRecord.progress
		});

		return {
			_id: 'WQ10',
			progress: this.baseRecord.progress
		};
	}

	async giveReward() {
		this.banking = await this.Banking.findOne({ where: { memb___id: this.membInfo.memb___id } });
		this.banking.zen_balance = parseInt(this.banking.zen_balance) + this.webQuest.reward;
		this.baseRecord.finish_times += 1;
		this.baseRecord.progress = 0;

		await this.banking.update({
			zen_balance: this.banking.zen_balance.toString()
		});

		await this.UserBankingLog.create({
			memb___id: this.membInfo.memb___id,
			description: `Finish quest ${this.webQuest.description} reward`,
			type: 'add',
			money: this.webQuest.reward
		});

		await this.baseRecord.update({
			progress: 0,
			finish_times: this.baseRecord.finish_times
		});

		const { isDone } = this.check();

		return {
			_id: 'WQ10',
			zen_balance: this.banking.zen_balance.toString(),
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
