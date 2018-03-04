import { connect } from 'react-redux';
import SideNavBar from './SideNavBar.component';

import { getDecks, setFocusMod, sortMod, searchMod } from './YugiohPoc.module';

export default connect(
  ({ yugiohPoc }) => ({
    mods: yugiohPoc.mods,
    focusMod: yugiohPoc.focusMod,
    sortKey: yugiohPoc.sortModKey,
    sortOption: yugiohPoc.sortModOption
  }),
  dispatch => ({
    onGetDecks(modId) {
      dispatch(getDecks(modId));
    },
    onSetFocusMod(id) {
      dispatch(setFocusMod(id));
    },
    onSort(sortKey, sortOption) {
      dispatch(sortMod(sortKey, sortOption));
    },
    onSearch(query) {
      dispatch(searchMod(query));
    }
  })
)(SideNavBar);
