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
		this.baseRecords = this.baseRecords.map(baseRecord => {
			if (baseRecord.character_name == character_name) {
				baseRecord.checkpoint += 1;
				baseRecord.progress = baseRecord.checkpoint / this.webQuest.requirement * 100;
				baseRecord.update({
					checkpoint: baseRecord.checkpoint,
					progress: baseRecord.progress
				});
			}
			return baseRecord;
		});
	}

	async giveReward() {
		this.membCredits.credits += this.webQuest.reward;

		this.baseRecords = this.baseRecords.map(baseRecord => {
			if (baseRecord.character_name == this.characterFullFilled) {
				baseRecord.checkpoint = 0;
				baseRecord.progress = 0;
				baseRecord.update({
					checkpoint: baseRecord.checkpoint,
					progress: baseRecord.progress
				});
			}
			return baseRecord;
		});

		await this.membCredits.update({
			credits: this.membCredits.credits
		});
		this.characterFullFilled = '';
	}
}
