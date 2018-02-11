import Page from './Page.component';
import { connect } from 'react-redux';

import { setActiveGroup, setActiveItem, setDefaultShowGroup } from 'pages/appControl';

const mapStateToProps = ({ appControl }) => ({
  menuTree: appControl.menuTree,
  activeItem: appControl.activeItem,
  activeGroup: appControl.activeGroup
});

const mapDispatchToProps = dispatch => ({
  onSetActiveGroup(group) {
    dispatch(setActiveGroup(group));
  },
  onSetActiveItem(item) {
    dispatch(setActiveItem(item));
  },
  onSetDefaultShowGroup(group) {
    dispatch(setDefaultShowGroup(group));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
