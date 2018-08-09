import { connect } from 'react-redux';
import Guides from './Guides.component';

import { getGuides } from '../Introduction.module';

export default connect(
  ({ ds9799_introduction }) => ({
    guides: ds9799_introduction.guides
  }),
  dispatch => ({
    onGetGuides() {
      dispatch(getGuides());
    }
  })
)(Guides);
