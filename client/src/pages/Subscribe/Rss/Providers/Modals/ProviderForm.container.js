import _ from 'underscore';
import { connect } from 'react-redux';
import ProviderForm from './ProviderForm.component';

import { addProvider, editProvider } from '../../Rss.module';

export default connect(
  ({ rss }) => ({
    provider: _.findWhere(rss.providers, { _id: rss.focusProvider })
  }),
  dispatch => ({
    onAdd(formBody, callback) {
      dispatch(addProvider(formBody, callback));
    },
    onEdit(formBody) {
      dispatch(editProvider(formBody));
    }
  })
)(ProviderForm);
