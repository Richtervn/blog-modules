import React from 'react';
import QuestCard from './QuestCard';

const questIcons = {
	WQ1: 'wq-fill-form',
	WQ2: 'wq-add-points',
	WQ3: 'wq-reset',
	WQ4: 'wq-grand-reset',
	WQ5: 'wq-quest-reset',
	WQ6: 'wq-loan',
	WQ7: 'wq-pay',
	WQ8: 'wq-magic-gladiator',
	WQ9: 'wq-buy-credits',
	WQ10: 'wq-vip-account',
	WQ11: 'wq-vip-character',
	WQ12: 'wq-buy-webshop',
	WQ13: 'wq-make-credits',
	WQ14: 'wq-enhance-item',
	WQ15: 'wq-deposit',
	WQ16: 'wq-quest',
	WQ17: 'wq-recipe',
	WQ18: 'wq-craft'
};

export default ({ socket, questList, onReceiveQuestList, onRequestReward, onRefreshQuestList }) => {
	socket.on('darksteam97d99i/GET_WEB_QUEST_LIST_SUCCESS', questList => {
		onReceiveQuestList(questList);
	});

	socket.on('darksteam97d99i/CHECK_POINT_QUEST_SUCCESS', quest => {
		onRefreshQuestList(quest);
	});

	socket.on('darksteam97d99i/REQUEST_QUEST_REWARD_SUCCESS', quest => {
		onRefreshQuestList(quest);
	});

	if (!questList) return null;
	console.log(questList);

	return (
		<div className="ds9799-web-quest-container">
			<div className="row no-row-margin">
				{questList.filter(quest => quest.status != 'done').map(quest => (
					<div className="col-6 no-col-margin" key={quest._id}>
						<QuestCard
							quest={quest}
							icon={`/app_modules/images/icons/${questIcons[quest._id]}.jpg`}
							onRequestReward={onRequestReward}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
