import { connect } from 'react-redux';
import ItemsList from './ItemsList.component';

import { getItems } from '../Server.module';

export default connect(
  ({ ds9799_server }) => ({
    data: ds9799_server.data
  }),
  dispatch => ({
    onGetItems(query) {
      dispatch(getItems(query));
    }
  })
)(ItemsList);
