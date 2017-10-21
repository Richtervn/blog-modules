import SideNavMenu from 'components/MuOnline/Darksteam97d99i/AdminChannel/SideNavMenu';
import { connect } from 'react-redux';

import { changeAdminPage } from 'modules/MuOnline/darksteam97d99i/navigator';

export default connect(
  ({ ds9799_navigator }) => ({
    items: ds9799_navigator.adminPages,
    activeItem: ds9799_navigator.adminPage
  }),
  dispatch => ({
    onSelectItem(page) {
      dispatch(changeAdminPage(page));
    }
  })
)(SideNavMenu);
