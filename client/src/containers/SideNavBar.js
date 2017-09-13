import SideNavBar from 'components/SideNavBar';
import { connect } from 'react-redux';

import { setActiveGroup, setDeactiveGroup, setActiveItem, getMenuTree } from 'modules/page';

export default connect(
  ({ page }) => ({
    menuTree: page.menuTree,
    activeGroup: page.activeGroup,
    activeItem: page.activeItem
  }),
  dispatch => ({
    setActiveGroup(name) {
      dispatch(setActiveGroup(name));
    },
    setDeactiveGroup() {
      dispatch(setDeactiveGroup());
    },
    setActiveItem(name) {
      dispatch(setActiveItem(name));
    },
    getMenuTree() {
      dispatch(getMenuTree());
    }
  })
)(SideNavBar);
