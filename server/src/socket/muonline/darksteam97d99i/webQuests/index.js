import _ from 'underscore';
import Promise from 'bluebird';

import WQ01 from './WQ01';
import WQ02 from './WQ02';
import WQ03 from './WQ03';
import WQ04 from './WQ04';
import WQ05 from './WQ05';
import WQ06 from './WQ06';
import WQ07 from './WQ07';
import WQ08 from './WQ08';
import WQ09 from './WQ09';
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
	WQ01,
	WQ02,
	WQ03,
	WQ04,
	WQ05,
	WQ06,
	WQ07,
	WQ08,
	WQ09,
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
	constructor(client, models, methods, helpers) {
		const { getData } = helpers;
		this.client = client;
		this.models = models;
		this.methods = methods;
		this.helpers = { getData };
		this.questWorkers = {};
	}

	async initial(memb___id) {
		const { MembInfo, Character, Banking, MembCredits, UserWebQuest } = this.models;

		const [membInfo, characters, banking, membCredits, userWebQuest, questList] = [
			await MembInfo.findOne({ where: { memb___id: memb___id } }),
			await Character.findAll({ where: { AccountId: memb___id } }),
			await Banking.findOne({ where: { memb___id: memb___id } }),
			await MembCredits.findOne({ where: { memb___id: memb___id } }),
			await UserWebQuest.findAll({ where: { memb___id: memb___id } }),
			await getData('WebQuests')
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
				baseRecords = userWebQuest.filter(userQuest => userQuest.quest_id == webQuest._id)[0];
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
			this.questWorkers[webQuest._id] = questWorker;
		});
	}

	getQuestList() {
		const results = Object.keys(this.questWorkers).map(wqId => {
			return this.questWorkers[wqId].buildResult();
		});
		return results;
	}

	async checkPointQuest(questId, ...params) {
		const result = await this.questWorkers[questId].checkPoint(...params);
		return result;
	}

	async getQuestReward(questId) {
		const result = await this.questWorkers[questId].giveReward();
		return result;
	}

	async checkQuest(questId) {
		const result = await this.questWorkers[questId].check();
		return result;
	}
}

export default WebQuestWorker;
