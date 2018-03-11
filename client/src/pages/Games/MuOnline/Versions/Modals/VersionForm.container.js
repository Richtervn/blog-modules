import _ from 'underscore';
import { connect } from 'react-redux';
import VersionForm from './VersionForm.component';

import { addVersion, editVersion } from '../../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    version: _.findWhere(muOnline.versions, { _id: muOnline.focusVersion })
  }),
  dispatch => ({
    onAddVersion(formBody) {
      dispatch(addVersion(formBody));
    },
    onEditVersion(formBody) {
      dispatch(editVersion(formBody));
    }
  })
)(VersionForm);
