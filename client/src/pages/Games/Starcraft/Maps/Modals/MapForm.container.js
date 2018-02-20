import _ from 'underscore';
import { connect } from 'react-redux';
import MapForm from './MapForm.component';

import { editMap, addMap } from '../../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    map: _.findWhere(starcraft.maps, { _id: starcraft.focusMap })
  }),
  dispatch => ({
    onEditMap(formBody) {
      dispatch(editMap(formBody));
    },
    onAddMap(formBody) {
      dispatch(addMap(formBody));
    }
  })
)(MapForm);
