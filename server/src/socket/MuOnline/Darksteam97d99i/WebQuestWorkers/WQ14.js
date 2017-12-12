export default class WQ14 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecord = baseRecord;
		this.membCredits = membCredits;
		this.webQuest = webQuest;
		this.MembCredits = models.MembCredits;
		this.membInfo = membInfo;
	}

	check() {
		let isDone = true;
		if (this.baseRecord.progress < 100) {
			isDone = false;
		}
		return { isDone };
	}

	async checkPoint(amount) {
		this.baseRecord.progress = 100;

		await this.baseRecord.update({
			progress: this.baseRecord.progress
		});

		return {
			_id: 'WQ14',
			progress: this.baseRecord.progress
		};
	}

	async giveReward() {
		this.membCredits = await this.MembCredits.findOne({ where: { memb___id: this.membInfo.memb___id } });
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

		return {
			_id: 'WQ14',
			credits: this.membCredits.credits,
			progress: 0,
			finish_times: this.baseRecord.finish_times,
			isDone: false
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
