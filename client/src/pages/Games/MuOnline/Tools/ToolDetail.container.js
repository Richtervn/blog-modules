import ToolDetail from './ToolDetail.component';
import { connect } from 'react-redux';

export default connect(({ muOnline }) => ({
	tool: muOnline.toolDetail
}))(ToolDetail);
