import { connect } from 'react-redux';
import MonstersSetBase from './MonstersSetBase.component';

export default connect(({ ds9799_server }) => ({
  data: ds9799_server.data
}))(MonstersSetBase);
