import EditDs9799VipSystem from 'components/Forms/EditDs9799VipSystem';
import { connect } from 'react-redux';

import { changeEditDs9799VipSystemForm } from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditDS9799VipSystem }),
  dispatch => ({
    onChange(event) {
      dispatch(changeEditDs9799VipSystemForm(event));
    }
  })
)(EditDs9799VipSystem);
