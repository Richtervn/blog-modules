import { connect } from 'react-redux';
import ToolDetail from './ToolDetail.component';

export default connect(({ diabloII }) => ({
  tool: diabloII.toolDetail
}))(ToolDetail);
