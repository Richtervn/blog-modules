import socket from 'factories/socketInstance';

const SET_QUEST_LIST = 'darksteam97d99i/webQuest/SET_QUEST_LIST';
const REQUEST_QUEST_REWARD = 'darksteam97d99i/webQuest/REQUEST_QUEST_REWARD';

export const setQuestList = questList => ({ type: SET_QUEST_LIST, questList });
export const requestReward = questId => ({ type: REQUEST_QUEST_REWARD, questId });

export default (
	state = {
		socket: socket,
		questList: null
	},
	action
) => {
	switch (action.type) {
		case SET_QUEST_LIST:
			return { ...state, questList: action.questList };
		case REQUEST_QUEST_REWARD:
			socket.emit('darksteam97d99i/REQUEST_QUEST_REWARD', action.questId);
			return state;
		default:
			return state;
	}
};
