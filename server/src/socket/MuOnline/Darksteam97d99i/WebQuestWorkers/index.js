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
			if (webQuest.type == 'Account' && !_.contains(userQuestIds, webQuest._id)) {
				UserWebQuest.create({
					memb___id: memb___id,
					quest_id: webQuest._id,
					finish_times: 0,
					progress: 0,
					status: 'start',
					type: webQuest.isRepeatable ? 'repeatable' : 'onetime'
				});
			}

			if(webQuest.type == 'Character')
			// if(webQuest.type == 'Character'){

			// 	UserWebQuest.create({
			// 		memb___id: memb___id,
			// 		quest_id: webQuest._id,
			// 		finish_times: 0,
			// 		progress: 0,
			// 		status: 'start',
			// 		type: webQuest.isRepeatable ? 'repeatable' : 'onetime'
			// 	})
			// }
			// const questWorker = new questWorkers[webQuest._id]();
			// await questWorker.initial(
			// 	this.models,
			// 	this.methods,
			// 	this.membInfo,
			// 	this.characters,
			// 	this.banking,
			// 	this.membCredits,
			// 	webQuest
			// );
			// this.questWorkers[webQuest._id] = questWorker;
		});
	}
}

export default WebQuestWorker;

// z    id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//       },
//       memb___id: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       character_name: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       quest_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       finish_times: {
//         type: DataTypes.INTEGER,
//         allowNull: true
//       },
//       status: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       progress: {
//         type: DataTypes.INTEGER,
//         allowNull: true
//       },
//       type: {
//         type: DataTypes.STRING,
//         allowNull: true
//       }
