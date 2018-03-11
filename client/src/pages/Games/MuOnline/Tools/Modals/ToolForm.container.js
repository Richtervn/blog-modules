import { connect } from 'react-redux';
import ToolForm from './ToolForm.component';

import { addTool, editTool } from '../../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    tool: muOnline.toolDetail
  }),
  dispatch => ({
    onEditTool(formBody) {
      dispatch(editTool(formBody));
    },
    onAddTool(formBody) {
      dispatch(addTool(formBody));
    }
  })
)(ToolForm);
