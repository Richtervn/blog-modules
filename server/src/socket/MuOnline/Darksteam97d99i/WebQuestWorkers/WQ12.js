export default class WQ11 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.membCredits = membCredits;
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
		this.membCredits.credits += this.webQuest.reward;
		this.baseRecord.finish_times += 1;
		this.baseRecord.progress = 0;

		await this.membCredits.update({
			credits: this.membCredits.credits
		});
		
		await this.baseRecord.update({
			progress: 0,
			finish_times: this.baseRecord.finish_times
		});
	}
}
