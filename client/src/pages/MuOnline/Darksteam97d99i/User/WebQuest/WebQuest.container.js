import { connect } from 'react-redux';
import WebQuest from './WebQuest.component';

import { getQuestList, requestQuestReward } from './WebQuest.module';

export default connect(
  ({ ds9799_webQuest }) => ({ questList: ds9799_webQuest.questList }),
  dispatch => ({
    onGetQuestList() {
      dispatch(getQuestList());
    },
    onRequestQuestReward(questId) {
      dispatch(requestQuestReward(questId));
    }
  })
)(WebQuest);
