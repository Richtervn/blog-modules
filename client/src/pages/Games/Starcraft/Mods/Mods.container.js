import { connect } from 'react-redux';
import Mods from './Mods.component';

import { getMods, getModDetail, searchMod, sortMod } from '../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    mods: starcraft.mods,
    modDetail: starcraft.modDetail
  }),
  dispatch => ({
    onGetMods() {
      dispatch(getMods());
    },
    onGetModDetail(id) {
      dispatch(getModDetail(id));
    },
    onSearchMod(text) {
      dispatch(searchMod(text));
    },
    onSortMod(query) {
      dispatch(sortMod(query));
    }
  })
)(Mods);
