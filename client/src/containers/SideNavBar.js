import SideNavBar from 'components/SideNavBar';
import { connect } from 'react-redux';

import { setActiveGroup, setDeactiveGroup, setActiveItem, getMenuTree } from 'modules/page';
import {changeId} from 'modules/test';

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
    getMenuTree(){
      dispatch(getMenuTree());
    },
    changeId(id){
      dispatch(changeId(id));
    }
  })
)(SideNavBar);
