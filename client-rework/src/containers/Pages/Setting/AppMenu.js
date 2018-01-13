import AppMenu from 'components/Pages/Setting/AppMenu';
import {connect} from 'react-redux';

const mapStateToProps = ({appControl}) => ({
  menuTree: appControl.menuTree
});

export default connect(mapStateToProps)(AppMenu);