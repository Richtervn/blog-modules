import { connect } from 'react-redux';
import Home from './Home.component';

import { setActiveTab } from 'pages/appControl';

const mapStateToProps = ({ appControl }) => ({
  tabs: appControl.homeTabs,
  activeTab: appControl.activeTab
});

const mapDispatchToProps = dispatch => ({
  onSetActiveTab(tab) {
    dispatch(setActiveTab(tab));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
