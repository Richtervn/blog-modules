import { connect } from 'react-redux';
import Maps from './Maps.component';

import { getMaps, setFocusMap } from '../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    maps: starcraft.maps,
    focusMap: starcraft.focusMap
  }),
  dispatch => ({
    onGetMaps() {
      dispatch(getMaps());
    },
    onSetFocusMap(id) {
      dispatch(setFocusMap(id));
    }
  })
)(Maps);
