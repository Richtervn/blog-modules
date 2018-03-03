import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteSurvivalKitConfirm from './DeleteSurvivalKitConfirm.component';

import { deleteSurvivalKit } from '../../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    survivalKit: _.findWhere(diabloII.survivalKits, { _id: diabloII.focusSurvivalKit })
  }),
  dispatch => ({
    onDeleteSurvivalKit(id) {
      dispatch(deleteSurvivalKit(id));
    }
  })
)(DeleteSurvivalKitConfirm);
