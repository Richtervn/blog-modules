import { connect } from 'react-redux';
import GameSetting from './GameSetting.component';

import { getGameSetting, editGameSetting } from '../../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onGetGameSetting() {
      dispatch(getGameSetting());
    },
    onEditGameSetting(formBody) {
      dispatch(editGameSetting(formBody));
    }
  })
)(GameSetting);
