import Darksteam97d99i from 'components/MuOnline/Darksteam97d99i';
import { connect } from 'react-redux';

import { changeActiveChannel } from 'modules/MuOnline/darksteam97d99i/navigator';
import { getServerInfo, getGameSetting } from 'modules/MuOnline/darksteam97d99i/info';

export default connect(
  ({ ds9799_user, ds9799_navigator, ds9799_info }) => ({
    user: ds9799_user.user,
    channels: ds9799_navigator.channels,
    activeChannel: ds9799_navigator.activeChannel,
    serverInfo: ds9799_info.serverInfo,
    gameSetting: ds9799_info.gameSetting,
    errorRegister: ds9799_user.errorRegister,
    errorLogin: ds9799_user.errorLogin
  }),
  dispatch => ({
    onChangeActiveChannel(channel) {
      dispatch(changeActiveChannel(channel));
    },
    onGetServerInfo() {
      dispatch(getServerInfo());
    },
    onGetGameSetting() {
      dispatch(getGameSetting());
    }
  })
)(Darksteam97d99i);
