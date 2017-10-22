import AddDs9799VipSystem from 'components/Forms/AddDs9799VipSystem';
import { connect } from 'react-redux';

import { changeAddDs9799VipSystemForm } from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddDS9799VipSystem }),
  dispatch => ({
    onChange(event) {
      dispatch(changeAddDs9799VipSystemForm(event));
    }
  })
)(AddDs9799VipSystem);
