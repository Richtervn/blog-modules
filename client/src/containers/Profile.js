import Profile from 'components/Home/Profile';
import { connect } from 'react-redux';

import { getMenu, setActiveGroup, setDeactiveGroup, setActiveItem } from 'modules/profile';

export default connect(
  ({ profile }) => ({
    menu: profile.menu,
    activeGroup: profile.activeGroup,
    activeItem: profile.activeItem
  }),
  dispatch => ({
    getMenu() {
      dispatch(getMenu());
    },
    setActiveGroup(name) {
      dispatch(setActiveGroup(name));
    },
    setActiveItem(name) {
      dispatch(setActiveItem(name));
    },
    setDeactiveGroup() {
      dispatch(setDeactiveGroup());
    }
  })
)(Profile);
