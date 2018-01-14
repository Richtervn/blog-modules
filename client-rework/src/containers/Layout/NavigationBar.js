import { NavigationBar } from 'components/Layout';
import { connect } from 'react-redux';

import { getMenuTree, setActiveGroup, setActiveItem } from 'modules/appControl';

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
