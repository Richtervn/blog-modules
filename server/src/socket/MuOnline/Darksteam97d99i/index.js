import WebQuestWorkers from './WebQuestWorkers';

export default (client, models, methods) => {
	client.on('darksteam97d99i/USER_LOGGED_IN', async memb___id => {
		const webQuestWorker = new WebQuestWorkers(client, models, methods);
		await webQuestWorker.initial(memb___id);
	});
};
