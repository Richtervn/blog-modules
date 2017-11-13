export default class WQ9 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.webQuest = webQuest;
		this.banking = banking;
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

	async checkPoint(amount) {
		this.baseRecord.checkpoint += amount;
		this.baseRecord.progress = this.baseRecord.checkpoint / this.currentRequirement * 100;

		await this.baseRecord.update({
			checkpoint: this.baseRecord.checkpoint,
			progress: this.baseRecord.progress
		});
	}

	async giveReward() {
		this.banking.zen_balance = parseInt(this.banking.zen_balance) + this.currentReward;
		this.baseRecord.checkpoint = 0;
		this.baseRecord.progress = 0;
		this.baseRecord.finish_times += 1;

		await this.banking.update({
			zen_balance: this.banking.zen_balance.toString()
		});

		await this.baseRecord.update({
			progress: 0,
			checkpoint: 0,
			finish_times: this.baseRecord.finish_times
		});

		this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
		this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;
	}
}
