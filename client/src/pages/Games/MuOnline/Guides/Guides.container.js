import Guides from './Guides.component';
import { connect } from 'react-redux';

import { getGuides, setFocusGuide } from '../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    guides: muOnline.guides
  }),
  dispatch => ({
    onGetGuides() {
      dispatch(getGuides());
    },
    onSetFocusGuide(id) {
      dispatch(setFocusGuide(id));
    }
  })
)(Guides);
