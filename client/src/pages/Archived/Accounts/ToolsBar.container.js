import { connect } from 'react-redux';
import ToolsBar from './ToolsBar.component';

import { search } from './Accounts.module';

export default connect(null, dispatch => ({
  onSearch(query) {
    dispatch(search(query));
  }
}))(ToolsBar);
