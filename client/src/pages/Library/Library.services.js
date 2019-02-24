import { serviceCaller } from 'helpers';

const { commonGet, commonPost, commonPut, commonDelete, commonPostMultiplePart, commonPutMultiplePart } = serviceCaller;

export default {
  getBookshelf(title) {
    const data = commonGet('book_shelves/book_shelf', [title]);
    return data;
  },
  addBookshelf(formBody) {
    const data = commonPost('book_shelves/book_shelf', formBody);
    return data;
  },
  editBookshelf(formBody) {
    const data = commonPut('book_shelves/book_shelf', formBody);
    return data;
  },
  deleteBookshelf(id) {
    const data = commonDelete('book_shelves/book_shelf/' + id);
    return data;
  },
  addBook(formBody) {
    const data = commonPostMultiplePart('book_shelves/book', formBody);
    return data;
  },
  editBook(formBody) {
    const data = commonPutMultiplePart('book_shelves/book', formBody);
    return data;
  },
  deleteBook(id) {
    const data = commonDelete('book_shelves/book/' + id);
    return data;
  }
};
