import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteProviderConfirm from './DeleteProviderConfirm.component';

import { deleteProvider } from '../../Rss.module';

export default connect(
  ({ rss }) => ({
    provider: _.findWhere(rss.providers, { _id: rss.focusProvider })
  }),
  dispatch => ({
    onDeleteProvider(id) {
      dispatch(deleteProvider(id));
    }
  })
)(DeleteProviderConfirm);
