import { connect } from 'react-redux';
import ToolsBar from './ToolsBar.component';

import { getProviders } from '../Rss.module';

export default connect(null, dispatch => ({
  onGetProviders(query) {
    dispatch(getProviders(query));
  }
}))(ToolsBar);
