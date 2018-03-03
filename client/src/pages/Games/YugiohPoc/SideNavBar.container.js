import { connect } from 'react-redux';
import SideNavBar from './SideNavBar.component';

import { getDecks, setFocusMod } from './YugiohPoc.module';

export default connect(
  ({ yugiohPoc }) => ({
    mods: yugiohPoc.mods,
    focusMod: yugiohPoc.focusMod
  }),
  dispatch => ({
    onGetDecks(modId) {
      dispatch(getDecks(modId));
    },
    onSetFocusMod(id) {
      dispatch(setFocusMod(id));
    }
  })
)(SideNavBar);
