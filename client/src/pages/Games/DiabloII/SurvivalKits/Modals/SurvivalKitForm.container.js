import _ from 'underscore';
import { connect } from 'react-redux';
import SurvivalKitForm from './SurvivalKitForm.component';

import { addSurvivalKit, editSurvivalKit } from '../../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    survivalKit: _.findWhere(diabloII.survivalKits, { _id: diabloII.focusSurvivalKit })
  }),
  dispatch => ({
    onAddSurvivalKit(formBody) {
      dispatch(addSurvivalKit(formBody));
    },
    onEditSurvivalKit(formBody) {
      dispatch(editSurvivalKit(formBody));
    }
  })
)(SurvivalKitForm);
