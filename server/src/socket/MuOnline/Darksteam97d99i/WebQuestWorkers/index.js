import _ from 'underscore';
import Promise from 'bluebird';
import questList from './questList';

import WQ1 from './WQ1';

const questWorkers = { WQ1 };

class WebQuestWorker {
	constructor(client, models, methods) {
		this.client = client;
		this.models = models;
		this.methods = methods;
		this.questWorkers = {};
	}

	async initial(memb___id) {
		const { MembInfo, Character, Banking, MembCredits, UserWebQuest } = this.models;

		const { membInfo, characters, banking, membCredits, userWebQuest } = [
			await MembInfo.findOne({ where: { memb___id: memb___id } }),
			await Character.findAll({ where: { AccountId: memb___id } }),
			await Banking.findOne({ where: { memb___id: memb___id } }),
			await MembCredits.findOne({ where: { memb___id: memb___id } }),
			await UserWebQuest.findAll({ where: { memb___id: memb___id } })
		];

		this.membInfo = membInfo;
		this.characters = characters;
		this.banking = banking;
		this.membCredits = membCredits;
		this.userWebQuest = userWebQuest;

		const userQuestIds = _.pluck(userWebQuest, 'quest_id');

		await Promise.map(questList, async webQuest => {
			if (!_.contains(userQuestIds, webQuest._id)) {
				const questWorker = new questWorkers[webQuest._id]();
				await questWorker.initial(
					this.models,
					this.methods,
					this.membInfo,
					this.characters,
					this.banking,
					this.membCredits,
					webQuest
				);
				this.questWorkers[webQuest._id] = questWorker;
			}
		});
	}
}

export default WebQuestWorker;
// export WQ1 from './WQ1';
// export WQ2 from './WQ2';
// export WQ3 from './WQ3';
// export WQ4 from './WQ4';
// export WQ5 from './WQ5';
// export WQ6 from './WQ6';
// export WQ7 from './WQ7';
// export WQ8 from './WQ8';
// export WQ9 from './WQ9';
// export WQ10 from './WQ10';
// export WQ11 from './WQ11';
// export WQ12 from './WQ12';
// export WQ13 from './WQ13';
// export WQ14 from './WQ14';
// export WQ15 from './WQ15';
// export WQ16 from './WQ16';
// export WQ17 from './WQ17';
// export WQ18 from './WQ18';
