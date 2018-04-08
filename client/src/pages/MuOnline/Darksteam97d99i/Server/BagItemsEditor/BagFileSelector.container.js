import { connect } from 'react-redux';
import BagFileSelector from './BagFileSelector.component';

import { getData } from '../Server.module';

export default connect(
  ({ ds9799_server }) => ({
    data: ds9799_server.data.EventItemBagList
  }),
  dispatch => ({
    onGetData() {
      dispatch(getData('EventItemBagList'));
    }
  })
)(BagFileSelector);
