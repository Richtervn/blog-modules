import ToolDetail from './ToolDetail.component';
import { connect } from 'react-redux';

import { getToolDetail } from '../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    tool: muOnline.toolDetail
  }),
  dispatch => ({
    onGetToolDetail(id) {
      dispatch(getToolDetail(id));
    }
  })
)(ToolDetail);
