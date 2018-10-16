import { connect } from 'react-redux';
import FeedsList from './FeedsList.component';

import { getFeed } from '../Rss.module';

export default connect(
  ({ rss }) => ({
    feedLoadingId: rss.feedLoadingId
  }),
  dispatch => ({
    onGetFeed(id) {
      dispatch(getFeed(id));
    }
  })
)(FeedsList);
