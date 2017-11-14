import Promise from 'bluebird';

export default class WQ3 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecords = baseRecord;
		this.characters = characters;
		this.webQuest = webQuest;
		this.membCredits = membCredits;
	}

	check() {
		let isDone = false;
		this.baseRecords.forEach(baseRecord => {
			if (baseRecord.progress >= 100) {
				isDone = true;
				this.characterFullFilled = baseRecord.character_name;
			}
		});
		return { isDone, character_name: this.characterFullFilled };
	}

	async checkPoint(character_name) {
		this.baseRecords = await Promise.all(
			this.baseRecords.map(async baseRecord => {
				if (baseRecord.character_name == character_name) {
					baseRecord.checkpoint += 1;
					baseRecord.progress = baseRecord.checkpoint / this.webQuest.requirement * 100;
					await baseRecord.update({
						checkpoint: baseRecord.checkpoint,
						progress: baseRecord.progress
					});
				}
				return baseRecord;
			})
		);
	}

	async giveReward() {
		this.membCredits.credits += this.webQuest.reward;

		this.baseRecords = await Promise.all(
			this.baseRecords.map(async baseRecord => {
				if (baseRecord.character_name == this.characterFullFilled) {
					baseRecord.checkpoint = 0;
					baseRecord.progress = 0;
					baseRecord.finish_times += 1;
					await baseRecord.update({
						checkpoint: baseRecord.checkpoint,
						progress: baseRecord.progress
					});
				}
				return baseRecord;
			})
		);

		await this.membCredits.update({
			credits: this.membCredits.credits
		});
		this.characterFullFilled = '';

		return {
			_id: 'WQ3',
			credits: this.membCredits.credits
		};
	}

	buildResult() {
		const { _id, description, isRepeatable, type, reward, reward_unit, isJumpStep } = this.webQuest;
		let progress = 0;
		let finish_times = 0;
		this.baseRecords.forEach(baseRecord => {
			if (baseRecord.progress > progress) progress = baseRecord.progress;
			if (baseRecord.finish_times > finish_times) finish_times = baseRecord.finish_times;
		});
		const { isDone, character_name } = this.check();
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
			character_name,
			isJumpStep
		};

		return result;
	}
}
