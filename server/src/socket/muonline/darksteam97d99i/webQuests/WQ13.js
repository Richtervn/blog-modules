/* Make credits from Luxury Shop */

export default class WQ13 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.membCredits = membCredits;
		this.webQuest = webQuest;
		this.currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
		this.currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;
		this.MembCredits = models.MembCredits;
		this.membInfo = membInfo;
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
		this.baseRecord.checkpoint += amount;
		this.baseRecord.progress = this.baseRecord.checkpoint / this.currentRequirement * 100;

		await this.baseRecord.update({
			checkpoint: this.baseRecord.checkpoint,
			progress: this.baseRecord.progress
		});

		return {
			_id: 'WQ13',
			progress: this.baseRecord.progress
		};
	}

	async giveReward() {
		this.membCredits = await this.MembCredits.findOne({ where: { memb___id: this.membInfo.memb___id } });
		this.membCredits.credits += this.currentReward;
		this.baseRecord.finish_times += 1;
		this.baseRecord.progress = 0;
		this.baseRecord.checkpoint = 0;

		await this.membCredits.update({
			credits: this.membCredits.credits
		});

		await this.UserCreditsLog.create({
			memb___id: this.membInfo.memb___id,
			description: `Finish quest ${this.webQuest.description.replace(
				'%(requirement)',
				this.webQuest.requirement
			)} reward`,
			type: 'add',
			credits: this.currentReward
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
			_id: 'WQ13',
			progress: 0,
			finish_times: this.baseRecord.finish_times,
			credits: this.membCredits.credits,
			reward: this.currentReward,
			requirement: this.currentRequirement,
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
			rules,
			isRepeatable,
			type,
			reward_unit,
			isDone,
			progress,
			finish_times,
			isJumpStep
		};
		result.reward = this.currentReward;
		result.requirement = this.currentRequirement;
		return result;
	}
}
