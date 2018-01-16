import NavigationBar from './NavigationBar.component';
import { connect } from 'react-redux';

import { getMenuTree, setActiveGroup, setActiveItem } from 'pages/appControl';

const mapStateToProps = ({ appControl }) => ({
  menuTree: appControl.menuTree,
  activeGroup: appControl.activeGroup,
  activeItem: appControl.activeItem,
  defaultShowGroup: appControl.defaultShowGroup
});

const mapDispatchToProps = dispatch => ({
  onGetMenuTree() {
    dispatch(getMenuTree());
  },
  onSetActiveGroup(group) {
    dispatch(setActiveGroup(group));
  },
  onSetActiveItem(item){
    dispatch(setActiveItem(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
