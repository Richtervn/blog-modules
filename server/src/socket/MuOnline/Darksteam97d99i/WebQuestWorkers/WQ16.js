import Promise from 'bluebird';

export default class WQ16 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.baseRecords = baseRecord;
		this.membCredits = membCredits;
		this.webQuest = webQuest;
		this.characters = characters;
	}

	check() {
		let isDone = false;
		this.baseRecords.map(baseRecord => {
			if (baseRecord.progress >= 100) {
				isDone = true;
				this.characterFullFilled = baseRecord.character_name;
			}
		});
		return { isDone, character_name: this.characterFullFilled };
	}

	async checkPoint(character_name) {
		const character = this.characters.filter(char => char.name == character_name)[0];
		this.baseRecords = await Promise.all(
			this.baseRecords.map(async baseRecord => {
				if (baseRecord.character_name == character_name) {
					baseRecord.progress = character.QuestNumber - baseRecord.checkpoint / 5 * 100;
					await baseRecord.update({
						progress: baseRecord.progress
					});
				}
				return baseRecord;
			})
		);
	}

	async giveReward() {
		this.membCredits.credits += this.webQuest.reward;
		const character = this.characters.filter(char => char.name == this.characterFullFilled)[0];

		this.baseRecords = await Promise.all(
			this.baseRecords.map(baseRecord => {
				if (baseRecord.character_name == this.characterFullFilled) {
					baseRecord.checkpoint += 5;
					baseRecord.finish_times += 1;
					baseRecord.progress = character.QuestNumber - baseRecord.checkpoint / 5 * 100;

					baseRecord.update({
						progress: baseRecord.progress,
						checkpoint: baseRecord.checkpoint,
						finish_times: baseRecord.finish_times
					});
				}
				return baseRecord;
			})
		);

		await this.membCredits.update({
			credits: this.membCredits.credits
		});

		return {
			_id: 'WQ16',
			credits: this.membCredits.credits
		};
	}

	buildResult() {
		const { _id, description, isRepeatable, type, reward, reward_unit, isJumpStep, rules } = this.webQuest;
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
			isJumpStep,
			rules
		};

		return result;
	}
}
