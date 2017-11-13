import _ from 'underscore';
import Promise from 'bluebird';
import questList from './questList';

import WQ1 from './WQ1';
import WQ2 from './WQ2';
import WQ3 from './WQ3';
import WQ4 from './WQ4';
import WQ5 from './WQ5';
import WQ6 from './WQ6';
import WQ7 from './WQ7';
import WQ8 from './WQ8';
import WQ9 from './WQ9';
import WQ10 from './WQ10';
import WQ11 from './WQ11';
import WQ12 from './WQ12';
import WQ13 from './WQ13';
import WQ14 from './WQ14';
import WQ15 from './WQ15';
import WQ16 from './WQ16';
import WQ17 from './WQ17';
import WQ18 from './WQ18';

const questWorkers = {
	WQ1,
	WQ2,
	WQ3,
	WQ4,
	WQ5,
	WQ6,
	WQ7,
	WQ8,
	WQ9,
	WQ10,
	WQ11,
	WQ12,
	WQ13,
	WQ14,
	WQ15,
	WQ16,
	WQ17,
	WQ18
};

class WebQuestWorker {
	constructor(client, models, methods) {
		this.client = client;
		this.models = models;
		this.methods = methods;
		this.questWorkers = {};
		this.completedStatus = {};
	}

	async initial(memb___id) {
		const { MembInfo, Character, Banking, MembCredits, UserWebQuest } = this.models;

		const [membInfo, characters, banking, membCredits, userWebQuest] = [
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

		const userQuestIds = _.uniq(_.pluck(userWebQuest, 'quest_id'));

		await Promise.map(questList, async webQuest => {
			let baseRecords;

			if (webQuest.type == 'Account' && !_.contains(userQuestIds, webQuest._id)) {
				baseRecords = await UserWebQuest.create({
					memb___id: memb___id,
					quest_id: webQuest._id,
					finish_times: 0,
					progress: 0,
					checkpoint: 0,
					status: 'start',
					type: webQuest.isRepeatable ? 'repeatable' : 'onetime'
				});
			} else if (webQuest.type == 'Character') {
				const existQuestRecord = userWebQuest.filter(userQuest => userQuest.quest_id == webQuest._id);
				const characterWebQuestIds = _.pluck(existQuestRecord, 'character_name');
				baseRecords = [];
				await Promise.map(characters, async character => {
					if (!_.contains(characterWebQuestIds, character.Name)) {
						const record = await UserWebQuest.create({
							memb___id: memb___id,
							quest_id: webQuest._id,
							character_name: character.Name,
							finish_times: 0,
							progress: 0,
							checkpoint: 0,
							status: 'start',
							type: webQuest.isRepeatable ? 'repeatable' : 'onetime'
						});
						baseRecords.push(record);
						return;
					}
				});

				if (baseRecords.length == 0) {
					baseRecords = userWebQuest.filter(userQuest => userQuest.quest_id == webQuest._id);
				}
			} else {
				baseRecords = userWebQuest.filter(userQuest => userQuest.quest_id == webQuest._id);
			}

			const questWorker = new questWorkers[webQuest._id](
				this.models,
				this.methods,
				this.membInfo,
				this.characters,
				this.banking,
				this.membCredits,
				webQuest,
				baseRecords
			);
			this.completedStatus[webQuest._id] = await questWorker.check();
			this.questWorkers[webQuest._id] = questWorker;
		});
	}
}

export default WebQuestWorker;
