import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteMapConfirm from './DeleteMapConfirm.component';

import { deleteMap } from '../../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    map: _.findWhere(starcraft.maps, { _id: starcraft.focusMap })
  }),
  dispatch => ({
    onDeleteMap(id) {
      dispatch(deleteMap(id));
    }
  })
)(DeleteMapConfirm);
