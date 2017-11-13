export default class WQ17 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.banking = banking;
		this.webQuest = webQuest;
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
	}

	async giveReward() {
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
	}
}
