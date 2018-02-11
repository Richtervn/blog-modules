import { connect } from 'react-redux';
import HeaderBar from './HeaderBar.component';

import { showHeaderMenu, hideHeaderMenu } from 'pages/appControl';

const mapStateToProps = ({ appControl }) => {
  const { menuTree, activeGroup } = appControl;

  if (!menuTree || !activeGroup) {
    return {
      name: 'Home',
      quote: "There's no place like home. There's no place like HOME!!!",
      author: 'Breaking Benjamin - Home',
      isShowHeaderMenu: appControl.isShowHeaderMenu
    };
  }

  return {
    name: activeGroup,
    quote: menuTree[activeGroup].quote,
    author: menuTree[activeGroup].author,
    isShowHeaderMenu: appControl.isShowHeaderMenu
  };
};

const mapDispatchToProps = dispatch => ({
  onShowHeaderMenu() {
    dispatch(showHeaderMenu());
  },
  onHideHeaderMenu() {
    dispatch(hideHeaderMenu());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
