import SideNavMenu from 'components/MuOnline/Darksteam97d99i/AdminChannel/SideNavMenu';
import { connect } from 'react-redux';

import { changeServerPage } from 'modules/MuOnline/darksteam97d99i/navigator';

export default connect(
  ({ ds9799_navigator }) => ({
    items: ds9799_navigator.serverPages,
    activeItem: ds9799_navigator.serverPage
  }),
  dispatch => ({
    onSelectItem(page) {
      dispatch(changeServerPage(page));
    }
  })
)(SideNavMenu);
