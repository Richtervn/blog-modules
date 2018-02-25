import { connect } from 'react-redux';
import ModDetail from './ModDetail.component';

export default connect(({ diabloII }) => ({
  mod: diabloII.modDetail
}))(ModDetail);
