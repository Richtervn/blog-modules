import { connect } from 'react-redux';
import Maps from './Maps.component';

import { getMaps } from '../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    maps: starcraft.maps
  }),
  dispatch => ({
    onGetMaps() {
      dispatch(getMaps());
    }
  })
)(Maps);
