import { connect } from 'react-redux';
import Mods from './Mods.component';

import { getMods, getModDetail } from '../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    mods: diabloII.mods,
    modDetail: diabloII.modDetail
  }),
  dispatch => ({
    onGetMods() {
      dispatch(getMods());
    },
    onGetModDetail(id) {
      dispatch(getModDetail(id));
    }
  })
)(Mods);
