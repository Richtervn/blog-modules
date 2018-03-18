import { connect } from 'react-redux';
import GameSettingCard from './GameSettingCard.component';

import { getGameSetting } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onGetGameSetting() {
      dispatch(getGameSetting());
    }
  })
)(GameSettingCard);
