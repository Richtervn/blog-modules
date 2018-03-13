import HallofFame from './HallofFame.component';
import { connect } from 'react-redux';

import { getTopPoints, getTopResets, getTopZen, getTopCredits } from '../Introduction.module';

export default connect(
  ({ ds9799_introduction: { topPoints, topResets, topZen, topCredits } }) => ({
    topPoints,
    topResets,
    topZen,
    topCredits
  }),
  dispatch => ({
    onGetTopPoints(query) {
      dispatch(getTopPoints(query));
    },
    onGetTopResets(query) {
      dispatch(getTopResets(query));
    },
    onGetTopZen() {
      dispatch(getTopZen());
    },
    onGetTopCredits() {
      dispatch(getTopCredits());
    }
  })
)(HallofFame);
