import { connect } from 'react-redux';
import MapFileSelector from './MapFileSelector.component';

import { getData } from '../Server.module';

export default connect(
  ({ ds9799_server }) => ({
    data: ds9799_server.data.Maps
  }),
  dispatch => ({
    onGetData() {
      dispatch(getData('Maps'));
    }
  })
)(MapFileSelector);
