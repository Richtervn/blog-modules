import { connect } from 'react-redux';
import BookForm from './BookForm.component';

import { addBook, editBook } from '../Library.module';

export default connect(
  ({ library }) => ({
    book: library.book,
    bookshelf: library.bookshelf
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addBook(formBody));
    },
    onEdit(formBody) {
      dispatch(editBook(formBody));
    }
  })
)(BookForm);
