import { connect } from 'react-redux';
import { HeaderBar } from 'components/Layout';

import { getMenuTree } from 'modules/appControl';

const mapStateToProps = ({ appControl }) => ({
  menuTree: appControl.menuTree
});

const mapDispatchToProps = dispatch => ({
  onGetMenuTree() {
    dispatch(getMenuTree());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
