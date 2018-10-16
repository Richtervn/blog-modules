import { connect } from 'react-redux';
import ProviderCard from './ProviderCard.component';

import { setFocusProvider } from '../Rss.module';

export default connect(null, dispatch => ({
  onSetFocusProvider(id) {
    dispatch(setFocusProvider(id));
  }
}))(ProviderCard);
