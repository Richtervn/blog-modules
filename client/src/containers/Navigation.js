import Navigation from 'components/Navigation';
import {connect} from 'react-redux';

export default connect(({page}) => ({
  activeGroup: page.activeGroup,
  activeItem: page.activeItem,
  menuTree: page.menuTree
}))(Navigation);