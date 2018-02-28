import { connect } from 'react-redux';
import Tools from './Tools.component';

import { getTools, getToolDetail, sortTool, searchTools } from '../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    tools: diabloII.tools,
    toolDetail: diabloII.toolDetail,
    sortKey: diabloII.sortToolKey,
    sortOption: diabloII.sortToolOption
  }),
  dispatch => ({
    onGetTools() {
      dispatch(getTools());
    },
    onGetToolDetail(id) {
      dispatch(getToolDetail(id));
    },
    onSort(sortKey, sortOption) {
      dispatch(sortTool(sortKey, sortOption));
    },
    onSearch(query) {
      dispatch(searchTools(query));
    }
  })
)(Tools);
