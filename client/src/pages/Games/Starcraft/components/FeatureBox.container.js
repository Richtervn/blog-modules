import FeatureBox from './FeatureBox.component';
import { connect } from 'react-redux';

import { changeCurrentFeature } from '../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    currentFeature: starcraft.currentFeature
  }),
  dispatch => ({
    onChangeCurrentFeature(feature) {
      dispatch(changeCurrentFeature(feature));
    }
  })
)(FeatureBox);
