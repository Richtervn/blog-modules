import MuOnline from 'components/Games/MuOnline';
import { connect } from 'react-redux';

import { changeActiveView } from 'modules/Games/muonline';

export default connect(
  ({ muonline }) => ({
    activeView: muonline.viewControl.activeView
  }),
  dispatch => ({
    onSwitchView(view) {
      dispatch(changeActiveView(view));
    }
  })
)(MuOnline);
