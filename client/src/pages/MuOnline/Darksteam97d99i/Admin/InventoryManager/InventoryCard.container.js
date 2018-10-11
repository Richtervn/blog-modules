import { connect } from 'react-redux';
import InventoryCard from './InventoryCard.component';
import { getItems } from '../../Server/Server.module';

export default connect(
  ({ ds9799_admin, ds9799_server }) => ({
    data: ds9799_server.data,
    characterInventory: ds9799_admin.inventory
  }),
  dispatch => ({
    onGetItems(query) {
      dispatch(getItems(query));
    }
  })
)(InventoryCard);
