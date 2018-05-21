import { connect } from 'react-redux';
import WebQuest from './WebQuest.component';

import { startQuestWorker, requestQuestReward } from './WebQuest.module';

export default connect(
  ({ ds9799_webQuest }) => ({ questList: ds9799_webQuest.questList }),
  dispatch => ({
    onStartQuestWorker() {
      dispatch(startQuestWorker());
    },
    onRequestQuestReward(questId) {
      dispatch(requestQuestReward(questId));
    }
  })
)(WebQuest);
