import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteVersionConfirm from './DeleteVersionConfirm.component';

import { deleteVersion } from '../../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    version: _.findWhere(muOnline.versions, { _id: muOnline.focusVersion })
  }),
  dispatch => ({
    onDeleteVersion(id) {
      dispatch(deleteVersion(id));
    }
  })
)(DeleteVersionConfirm);
