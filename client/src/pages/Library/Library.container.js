import { connect } from 'react-redux';
import Library from './Library.component';

import { getBookshelf } from './Library.module';

export default connect(
  ({ library, appControl }) => ({ bookshelf: library.bookshelf, bookshelfName: appControl.activeItem }),
  dispatch => ({
    onGetBookshelf(title) {
      dispatch(getBookshelf(title));
    }
  })
)(Library);
