import { connect } from 'react-redux';
import SideBar from './SideBar.component';

import { setBook } from './Library.module';

export default connect(
  ({ library }) => ({
    books: library.books,
    book: library.book
  }),
  dispatch => ({
    onSetBook(book) {
      dispatch(setBook(book));
    }
  })
)(SideBar);
