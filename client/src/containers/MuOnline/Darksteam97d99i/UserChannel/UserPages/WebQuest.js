import WebQuest from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/WebQuest';
import { connect } from 'react-redux';

import { setQuestList, requestReward } from 'modules/MuOnline/darksteam97d99i/webQuest';

export default connect(
	({ ds9799_webQuest }) => ({
		socket: ds9799_webQuest.socket,
		questList: ds9799_webQuest.questList
	}),
	dispatch => ({
		onReceiveQuestList(questList) {
			dispatch(setQuestList(questList));
		},
		onRequestReward(questId){
			dispatch(requestReward(questId));
		}
	})
)(WebQuest);
