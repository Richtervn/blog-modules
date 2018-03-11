import Tools from './Tools.component';
import { connect } from 'react-redux';

import { getTools, getToolDetail, sortTool, searchTool } from '../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    tools: muOnline.tools,
    toolDetail: muOnline.toolDetail,
    sortKey: muOnline.sortToolKey,
    sortOption: muOnline.sortToolOption
  }),
  dispatch => ({
    onGetTools() {
      dispatch(getTools());
    },
    onGetToolDetail(id) {
      dispatch(getToolDetail(id));
    },
    onSortTool(sortKey, sortOption) {
      dispatch(sortTool(sortKey, sortOption));
    },
    onSearchTool(query) {
      dispatch(searchTool(query));
    }
  })
)(Tools);
