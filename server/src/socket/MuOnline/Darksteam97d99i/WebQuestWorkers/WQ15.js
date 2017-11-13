export default class WQ15 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.webQuest = webQuest;
		this.membCredits = membCredits;
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

		this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
		this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;
	}
}
