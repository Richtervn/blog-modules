import { connect } from 'react-redux';
import DeleteExchangeConfirm from './DeleteExchangeConfirm.component';

import { deleteExchange } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    pack: ds9799_admin.focusLxExchange
  }),
  dispatch => ({
    onDeletePackage(id) {
      dispatch(deleteExchange(id));
    }
  })
)(DeleteExchangeConfirm);
