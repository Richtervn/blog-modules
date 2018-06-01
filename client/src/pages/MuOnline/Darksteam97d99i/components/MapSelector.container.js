import { connect } from 'react-redux';
import MapSelector from './MapSelector.component';

import { getData } from '../Server/Server.module';

export default connect(
  ({ ds9799_server }) => ({
    data: ds9799_server.data.Maps
  }),
  dispatch => ({
    onGetData() {
      dispatch(getData('Maps'));
    }
  })
)(MapSelector);
