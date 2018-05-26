/* Create Magic Gladiator character */

export default class WQ08 {
	constructor(models, methods, membInfo, characters, banking, membCredits, webQuest, baseRecord) {
		this.characters = characters;
		this.baseRecord = baseRecord;
		this.webQuest = webQuest;
		this.membCredits = membCredits;
		this.membInfo = membInfo;
		this.MembCredits = models.MembCredits;
		this.UserCreditsLog = models.UserCreditsLog;
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

		await this.UserCreditsLog.create({
      memb___id: this.membInfo.memb___id,
      description: `Finish quest ${this.webQuest.description} reward`,
      type: 'add',
      credits: this.webQuest.reward
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
			progress: isDone ? 100 : 0,
			isJumpStep,
			rules,
			status
		};
		return result;
	}
}
