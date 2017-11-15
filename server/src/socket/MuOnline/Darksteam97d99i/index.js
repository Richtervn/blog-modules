import WebQuestWorkers from './WebQuestWorkers';

export default (client, models, methods) => {
	let webQuestWorker;

	client.on('darksteam97d99i/USER_LOGGED_IN', async memb___id => {
		webQuestWorker = new WebQuestWorkers(client, models, methods);
		await webQuestWorker.initial(memb___id);
	});

	client.on('darksteam97d99i/GET_WEB_QUEST_LIST_START', () => {
		const questList = webQuestWorker.getQuestList();
		client.emit('darksteam97d99i/GET_WEB_QUEST_LIST_SUCCESS', questList)
	})

	client.on('darksteam97d99i/REQUEST_QUEST_REWARD', questId => {
		// const result = await webQuestWorker[questId].
	});

	client.on('darksteam97d99i/CHECK_POINT_QUEST', questId => {

	});
};
