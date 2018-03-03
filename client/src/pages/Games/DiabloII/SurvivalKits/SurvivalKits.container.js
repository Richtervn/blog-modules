import { connect } from 'react-redux';
import SurvivalKits from './SurvivalKits.component';

import { getSurvivalKits, searchSurvivalKits, setFocusSurvivalKit } from '../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    survivalKits: diabloII.survivalKits
  }),
  dispatch => ({
    onGetSurvivalKits() {
      dispatch(getSurvivalKits());
    },
    onSearchSurvivalKits(query) {
      dispatch(searchSurvivalKits(query));
    },
    onSetFocusSurvivalKit(id) {
      dispatch(setFocusSurvivalKit(id));
    }
  })
)(SurvivalKits);
