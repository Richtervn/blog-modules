import GuideDetail from './GuideDetail.component';
import { connect } from 'react-redux';

import { getGuideDetail } from '../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    guide: muOnline.guideDetail
  }),
  dispatch => ({
    onGetGuideDetail(id) {
      dispatch(getGuideDetail(id));
    }
  })
)(GuideDetail);
