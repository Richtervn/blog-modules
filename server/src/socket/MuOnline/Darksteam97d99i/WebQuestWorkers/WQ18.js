export default class WQ17 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.banking = banking;
		this.webQuest = webQuest;
		this.Banking = models.Banking;
		this.membInfo = membInfo;
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
			_id: 'WQ18',
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

		await this.baseRecord.update({
			progress: 0,
			finish_times: this.baseRecord.finish_times
		});

		const { isDone } = this.check();

		return {
			_id: 'WQ18',
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
