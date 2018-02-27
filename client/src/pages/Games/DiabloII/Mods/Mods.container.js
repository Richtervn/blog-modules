import { connect } from 'react-redux';
import Mods from './Mods.component';

import { getMods, getModDetail, sortMod, searchMods } from '../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    mods: diabloII.mods,
    modDetail: diabloII.modDetail,
    sortKey: diabloII.sortModKey,
    sortOption: diabloII.sortModOption
  }),
  dispatch => ({
    onGetMods() {
      dispatch(getMods());
    },
    onGetModDetail(id) {
      dispatch(getModDetail(id));
    },
    onSort(sortKey, sortOption) {
      dispatch(sortMod(sortKey, sortOption));
    },
    onSearch(query) {
      dispatch(searchMods(query));
    }
  })
)(Mods);
