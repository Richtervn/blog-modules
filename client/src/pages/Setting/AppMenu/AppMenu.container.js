import { connect } from 'react-redux';
import AppMenu from './AppMenu.component';

import { saveMenuTree } from 'pages/appControl';

export default connect(
  ({ appControl }) => ({ menuTree: appControl.menuTree }),
  dispatch => ({
    onSave(formBody) {
      dispatch(saveMenuTree(formBody));
    }
  })
)(AppMenu);
