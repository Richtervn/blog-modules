import { connect } from 'react-redux';
import ContentMirror from './ContentMirror.component';

import { getTables } from './ContentMirror.module';

export default connect(
  ({ contentMirror }) => ({
    isShareView: contentMirror.isShareView,
    tables: contentMirror.tables
  }),
  dispatch => ({
    onGetTables() {
      dispatch(getTables());
    }
  })
)(ContentMirror);
