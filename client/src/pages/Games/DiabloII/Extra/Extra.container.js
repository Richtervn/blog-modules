import { connect } from 'react-redux';
import Extra from './Extra.component';

import { getExtraData, extraLevel, extraGold, extraSkill, editExtraData } from '../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    data: diabloII.extraData
  }),
  dispatch => ({
    onGetData() {
      dispatch(getExtraData());
    },
    onEditData(formBody) {
      dispatch(editExtraData(formBody));
    },
    onExtraLevel(level) {
      dispatch(extraLevel(level));
    },
    onExtraGold(amount, type) {
      dispatch(extraGold(amount, type));
    },
    onExtraSkill(amount, type) {
      dispatch(extraSkill(amount, type));
    }
  })
)(Extra);
