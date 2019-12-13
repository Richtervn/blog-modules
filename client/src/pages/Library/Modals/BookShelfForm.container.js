import { connect } from 'react-redux';
import BookshelfForm from './BookShelfForm.component';

import { addBookshelf, editBookshelf } from '../Library.module';

export default connect(
  ({ library }) => ({
    bookshelf: library.bookshelf
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addBookshelf(formBody));
    },
    onEdit(formBody) {
      dispatch(editBookshelf(formBody));
    }
  })
)(BookshelfForm);
