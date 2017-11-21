import socket from 'factories/socketInstance';

const SET_QUEST_LIST = 'darksteam97d99i/webQuest/SET_QUEST_LIST';
const REQUEST_QUEST_REWARD = 'darksteam97d99i/webQuest/REQUEST_QUEST_REWARD';
export const REFRESH_QUEST_LIST = 'darksteam97d99i/webQuest/REFRESH_QUEST_LIST';

export const setQuestList = questList => ({ type: SET_QUEST_LIST, questList });
export const requestReward = questId => ({ type: REQUEST_QUEST_REWARD, questId });
export const refreshQuestList = data => ({ type: REFRESH_QUEST_LIST, data });

export default (
	state = {
		questList: null
	},
	action
) => {
	if (action.type == REQUEST_QUEST_REWARD) {
		socket.emit('darksteam97d99i/REQUEST_QUEST_REWARD', action.questId);
	}

	switch (action.type) {
		case SET_QUEST_LIST:
			return { ...state, questList: action.questList };
		case REFRESH_QUEST_LIST:
			const { data } = action;
			state.questList = state.questList.map(quest => {
				if (quest._id == data._id) {
					quest = {...quest, ...data};
				}
				return quest;
			});
			return {
				...state,
				questList: state.questList.slice(0)
			};
		default:
			return state;
	}
};
