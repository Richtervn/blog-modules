import { connect } from 'react-redux';
import ExchangeForm from './ExchangeForm.component';

import { addExchange, editExchange } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    exchange: ds9799_admin.focusLxExchange
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addExchange(formBody));
    },
    onEdit(formBody) {
      dispatch(editExchange(formBody));
    }
  })
)(ExchangeForm);
