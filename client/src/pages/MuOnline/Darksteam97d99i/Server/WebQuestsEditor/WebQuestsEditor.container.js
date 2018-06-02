import { connect } from 'react-redux';
import WebQuestsEditor from './WebQuestsEditor.component';

import { getWebQuests, editWebQuests } from '../Server.module';

export default connect(
  ({ ds9799_server }) => ({
    webQuests: ds9799_server.webQuests
  }),
  dispatch => ({
    onGetWebQuests() {
      dispatch(getWebQuests());
    },
    onEditWebQuests(formBody) {
      dispatch(editWebQuests(formBody));
    }
  })
)(WebQuestsEditor);
