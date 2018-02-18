import NavigationBar from './NavigationBar.component';
import { connect } from 'react-redux';

import { getMenuTree, setActiveGroup, setActiveItem, toggleMenuGroup } from 'pages/appControl';

const mapStateToProps = ({ appControl }) => ({
  menuTree: appControl.menuTree,
  activeGroup: appControl.activeGroup,
  activeItem: appControl.activeItem,
  defaultShowGroup: appControl.defaultShowGroup,
  openedGroups: appControl.openedGroups
});

const mapDispatchToProps = dispatch => ({
  onGetMenuTree() {
    dispatch(getMenuTree());
  },
  onSetActiveGroup(group) {
    dispatch(setActiveGroup(group));
  },
  onSetActiveItem(item) {
    dispatch(setActiveItem(item));
  },
  onToggleMenuGroup(group) {
    dispatch(toggleMenuGroup(group));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
