import { connect } from 'react-redux';
import GameOverviewDetail from './GameOverviewDetail.component';

import { getOverview, editOverviewDetail } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    overview: gamingHistory.overviewDetail
  }),
  dispatch => ({
    onGetOverview(id) {
      dispatch(getOverview(id));
    },
    onEditOverviewDetail(formBody) {
      dispatch(editOverviewDetail(formBody));
    }
  })
)(GameOverviewDetail);
