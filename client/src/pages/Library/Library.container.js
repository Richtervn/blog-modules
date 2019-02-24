import { connect } from 'react-redux';
import Library from './Library.component';

import { getBookshelf } from './Library.module';

export default connect(
  null,
  dispatch => ({
    onGetBookshelf(title) {
      dispatch(getBookshelf(title));
    }
  })
)(Library);
