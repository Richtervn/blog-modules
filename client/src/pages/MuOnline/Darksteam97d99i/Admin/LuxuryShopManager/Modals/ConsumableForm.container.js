import { connect } from 'react-redux';
import ConsumableForm from './ConsumableForm.component';

import { addConsumable, editConsumable } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    consumable: ds9799_admin.focusLxConsumable
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addConsumable(formBody));
    },
    onEdit(formBody) {
      dispatch(editConsumable(formBody));
    }
  })
)(ConsumableForm);
