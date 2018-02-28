import { connect } from 'react-redux';
import DeleteToolConfirm from './DeleteToolConfirm.component';

import { deleteTool } from '../../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    tool: diabloII.toolDetail
  }),
  dispatch => ({
    onDeleteTool(id) {
      dispatch(deleteTool(id));
    }
  })
)(DeleteToolConfirm);
