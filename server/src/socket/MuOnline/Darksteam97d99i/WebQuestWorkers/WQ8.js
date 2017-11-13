export default class WQ8 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.characters = characters;
		this.baseRecord = baseRecord;
		this.webQuest = webQuest;
		this.membCredits = membCredits;
	}

	check() {
		let isDone = false;
		this.characters.map(character => {
			if (character.Class == '48') {
				isDone = true;
			}
		});
		return { isDone };
	}

	async giveReward() {
		this.membCredits.credits += this.webQuest.reward;
		await this.membCredits.update({
			credits: this.membCredits.credits,
			status: 'done'
		});
	}
}
