import { connect } from 'react-redux';
import SideNavBar from './SideNavBar.component';

const activePageSelector = ({ activeTab, userPage, adminPage, serverPage }) => {
  switch (activeTab) {
    case 'user':
      return userPage;
    case 'admin':
      return adminPage;
    case 'server':
      return serverPage;
    default:
      return userPage;
  }
};

export default connect(({ ds9799_appControl }) => ({
  activeTab: ds9799_appControl.activeTab,
  activePage: activePageSelector(ds9799_appControl)
}))(SideNavBar);
