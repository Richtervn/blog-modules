import WebQuestWorkers from './WebQuests';

export default (models, client, methods, helpers) => {
  let webQuestWorker;

  client.on('darksteam97d99i/USER_LOGGED_IN', async memb___id => {
    if (!memb___id) {
      return null;
    }
    client.ds9799_id = memb___id;
    webQuestWorker = new WebQuestWorkers(client, models, methods, helpers);
    try {
      await webQuestWorker.initial(memb___id);
    } catch (e) {
      console.error(e);
    }
  });

  client.on('darksteam97d99i/GET_WEB_QUEST_LIST_START', () => {
    const questList = webQuestWorker.getQuestList();
    client.emit('darksteam97d99i/GET_WEB_QUEST_LIST_SUCCESS', questList);
  });

  client.on('darksteam97d99i/REQUEST_QUEST_REWARD', async questId => {
    await webQuestWorker.checkQuest(questId);
    const result = await webQuestWorker.getQuestReward(questId);
    client.emit('darksteam97d99i/REQUEST_QUEST_REWARD_SUCCESS', result);
  });

  client.on('darksteam97d99i/CHECK_POINT_QUEST', async (questId, ...params) => {
    try {
      const result = await webQuestWorker.checkPointQuest(questId, ...params);
      client.emit('darksteam97d99i/CHECK_POINT_QUEST_SUCCESS', result);
    } catch (e) {
      console.error(e);
    }
  });
};
