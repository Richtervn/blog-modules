import { connect } from 'react-redux';
import ToolForm from './ToolForm.component';

import { addTool, editTool } from '../../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    tool: diabloII.toolDetail
  }),
  dispatch => ({
    onAddTool(formBody) {
      dispatch(addTool(formBody));
    },
    onEditTool(formBody) {
      dispatch(editTool(formBody));
    }
  })
)(ToolForm);
