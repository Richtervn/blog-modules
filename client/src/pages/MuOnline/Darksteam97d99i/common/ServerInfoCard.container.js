import { connect } from 'react-redux';
import ServerInfoCard from './ServerInfoCard.component';

import { getServerInfo } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    serverInfo: ds9799_appControl.serverInfo
  }),
  dispatch => ({
    onGetServerInfo() {
      dispatch(getServerInfo());
    }
  })
)(ServerInfoCard);
