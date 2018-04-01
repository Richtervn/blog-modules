export default class WQ08 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.characters = characters;
		this.baseRecord = baseRecord;
		this.webQuest = webQuest;
		this.membCredits = membCredits;
		this.membInfo = membInfo;
		this.MembCredits = models.MembCredits;
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
		this.membCredits = await this.MembCredits.findOne({ where: { memb___id: this.membInfo.memb___id } });
		this.membCredits.credits += this.webQuest.reward;
		await this.membCredits.update({
			credits: this.membCredits.credits
		});

		this.baseRecord = await this.baseRecord.update({
			status: 'done'
		});

		return {
			_id: 'WQ08',
			credits: this.membCredits.credits,
			status: 'done'
		};
	}

	buildResult() {
		const { _id, description, isRepeatable, type, reward, reward_unit, isJumpStep, rules } = this.webQuest;
		const { isDone } = this.check();
		const { status } = this.baseRecord;
		const result = {
			_id,
			description,
			isRepeatable,
			type,
			reward,
			reward_unit,
			isDone,
			isJumpStep,
			rules,
			status
		};
		return result;
	}
}
