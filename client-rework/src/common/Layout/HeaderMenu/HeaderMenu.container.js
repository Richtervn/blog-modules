import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu.component';

import { quickUpdate } from 'pages/Collections/MangasReading';

const mapStateToProps = ({ appControl }) => ({
  isShow: appControl.isShowHeaderMenu
});

const mapDispatchToProps = dispatch => ({
  onQuickUpdateManga(url) {
    dispatch(quickUpdate(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
