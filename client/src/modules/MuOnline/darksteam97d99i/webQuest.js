import socket from 'factories/socketInstance';
socket.on('darksteam97d99i/GET_WEB_QUEST_LIST_SUCCESS', questList => {
	console.log(questList);
})

export default (state = {}, action) => {
	switch(action.type){
		default:
			return state;
	}
}