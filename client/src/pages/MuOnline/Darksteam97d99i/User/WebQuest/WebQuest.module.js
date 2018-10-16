import { actionCreator } from 'helpers';

const START_QUEST_WORKER = 'ds9799_user/START_QUEST_WORKER';
const GET_QUEST_LIST = 'ds9799_user/GET_QUEST_LIST';
const SET_QUEST_LIST = 'ds9799_webQuest/SET_QUEST_LIST';
const REQUEST_QUEST_REWARD = 'ds9799_webQuest/REQUEST_QUEST_REWARD';
export const REFRESH_QUEST_LIST = 'ds9799_webQuest/REFRESH_QUEST_LIST';

const setQuestList = questList => ({ type: SET_QUEST_LIST, questList });
const refreshQuestList = data => ({ type: REFRESH_QUEST_LIST, data });

export const getQuestList = () =>
  actionCreator(GET_QUEST_LIST, (payload, { dispatch, socket }) => {
    socket.emit('darksteam97d99i/GET_WEB_QUEST_LIST_START');
  })();

export const startQuestWorker = () =>
  actionCreator(START_QUEST_WORKER, (payload, { socket, dispatch }) => {
    socket.on('darksteam97d99i/GET_WEB_QUEST_LIST_SUCCESS', questList => {
      dispatch(setQuestList(questList));
    });
    socket.on('darksteam97d99i/CHECK_POINT_QUEST_SUCCESS', quest => {
      dispatch(refreshQuestList(quest));
    });
    socket.on('darksteam97d99i/REQUEST_QUEST_REWARD_SUCCESS', quest => {
      dispatch(refreshQuestList(quest));
    });
  })();

export const requestQuestReward = questId =>
  actionCreator(REQUEST_QUEST_REWARD, (payload, { socket }) => {
    socket.emit('darksteam97d99i/REQUEST_QUEST_REWARD', questId);
  })();

export default (state = { questList: null }, action) => {
  switch (action.type) {
    case SET_QUEST_LIST:
      return { ...state, questList: action.questList };
    case REFRESH_QUEST_LIST:
      const { data } = action;
      state.questList = state.questList.map(quest => {
        if (quest._id === data._id) {
          return { ...quest, ...data };
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
