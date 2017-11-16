import React from 'react';
import QuestCard from './QuestCard';

const questIcons = {
	WQ1: 'fill-form',
	WQ2: 'add-points',
	WQ3: 'reset',
	WQ4: 'grand-reset',
	WQ5: 'quest-reset',
	WQ6: 'loan',
	WQ7: 'pay',
	WQ8: 'magic-gladiator',
	WQ9: 'buy-credits',
	WQ10: 'vip-account',
	WQ11: 'vip-character',
	WQ12: 'buy-webshop',
	WQ13: 'make-credits',
	WQ14: 'enhance-item',
	WQ15: 'deposit',
	WQ16: 'quest',
	WQ17: 'recipe',
	WQ18: 'craft'
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
