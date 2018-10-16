import { connect } from 'react-redux';
import Providers from './Providers.component';

import { getProviders } from '../Rss.module';

export default connect(
  ({ rss }) => ({
    providers: rss.providers
  }),
  dispatch => ({
    onGetProviders() {
      dispatch(getProviders());
    }
  })
)(Providers);
