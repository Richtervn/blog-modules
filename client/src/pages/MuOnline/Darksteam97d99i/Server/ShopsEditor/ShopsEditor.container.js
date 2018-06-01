import { connect } from 'react-redux';
import ShopsEditor from './ShopsEditor.component';

export default connect(({ ds9799_server }) => ({
  data: ds9799_server.data
}))(ShopsEditor);
