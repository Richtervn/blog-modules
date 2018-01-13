import { Page } from 'components/Layout';
import { connect } from 'react-redux';

import { setActiveGroup, setActiveItem } from 'modules/appControl';

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
