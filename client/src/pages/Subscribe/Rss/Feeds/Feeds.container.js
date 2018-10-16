import { connect } from 'react-redux';
import Feeds from './Feeds.component';

import { getFeeds, getProviders } from '../Rss.module';

export default connect(
  ({ rss }) => ({ feeds: rss.feeds, providers: rss.providers }),
  dispatch => ({
    onGetFeeds() {
      dispatch(getFeeds());
    },
    onGetProviders() {
      dispatch(getProviders());
    }
  })
)(Feeds);
