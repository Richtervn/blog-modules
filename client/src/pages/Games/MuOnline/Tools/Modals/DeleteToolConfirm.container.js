import { connect } from 'react-redux';
import DeleteToolConfirm from './DeleteToolConfirm.component';

import { deleteTool } from '../../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    tool: muOnline.toolDetail
  }),
  dispatch => ({
    onDeleteTool(id) {
      dispatch(deleteTool(id));
    }
  })
)(DeleteToolConfirm);
