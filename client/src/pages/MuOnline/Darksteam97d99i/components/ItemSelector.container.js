import { connect } from 'react-redux';
import ItemSelector from './ItemSelector.component';

import { getData } from '../Server/Server.module';

export default connect(
  ({ ds9799_server }) => ({
    data: ds9799_server.data
  }),
  dispatch => ({
    onGetData(fileName) {
      dispatch(getData(fileName));
    }
  })
)(ItemSelector);
