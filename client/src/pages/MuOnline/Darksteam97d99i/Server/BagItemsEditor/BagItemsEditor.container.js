import BagItemsEditor from './BagItemsEditor.component';
import { connect } from 'react-redux';

export default connect(({ ds9799_server }) => ({
  data: ds9799_server.data
}))(BagItemsEditor);
