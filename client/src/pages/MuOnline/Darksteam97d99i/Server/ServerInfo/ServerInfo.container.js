import { connect } from 'react-redux';
import ServerInfo from './ServerInfo.component';

import { getServerInfo, editServerInfo } from '../../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    serverInfo: ds9799_appControl.serverInfo
  }),
  dispatch => ({
    onGetServerInfo() {
      dispatch(getServerInfo());
    },
    onSave(formBody) {
      dispatch(editServerInfo(formBody));
    }
  })
)(ServerInfo);
