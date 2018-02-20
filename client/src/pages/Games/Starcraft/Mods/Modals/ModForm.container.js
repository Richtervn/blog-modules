import { connect } from 'react-redux';
import ModForm from './ModForm.component';

import { editMod, addMod } from '../../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    mod: starcraft.modDetail
  }),
  dispatch => ({
    onEditMod(formBody) {
      dispatch(editMod(formBody));
    },
    onAddMod(formBody) {
      dispatch(addMod(formBody));
    }
  })
)(ModForm);
