import { connect } from 'react-redux';
import ShopSelector from './ShopSelector.component';

import { getData } from '../Server.module';

export default connect(
  ({ ds9799_server }) => ({
    data: ds9799_server.data.ShopList
  }),
  dispatch => ({
    onGetData(fileName) {
      dispatch(getData('ShopList'));
    }
  })
)(ShopSelector);
