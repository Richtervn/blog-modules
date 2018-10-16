import { connect } from 'react-redux';
import Feeds from './Feeds.component';

import { getFeeds } from '../Rss.module';

export default connect(
  ({ rss }) => ({ feeds: rss.feeds }),
  dispatch => ({
    onGetFeeds() {
      dispatch(getFeeds());
    }
  })
)(Feeds);
