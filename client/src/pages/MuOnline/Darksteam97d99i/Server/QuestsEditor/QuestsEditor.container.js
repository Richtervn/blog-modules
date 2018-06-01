import { connect } from 'react-redux';
import QuestsEditor from './QuestsEditor.component';

export default connect(({ ds9799_server }) => ({
  data: ds9799_server.data
}))(QuestsEditor);
