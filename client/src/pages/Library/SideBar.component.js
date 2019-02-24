import './SideBar.css';
import React, { useEffect } from 'react';
import classnames from 'classnames';

import { openModal } from 'common/Modal';

export default ({ books, book, onSetBook }) => {
  useEffect(() => {
    if (books) {
      onSetBook(books[0]);
    }
  }, [books]);

  return (
    <div className="library-side-bar">
      <div className="overlay">
        {books.map(pdfBook => (
          <div
            className={classnames('book-item', { active: parseInt(pdfBook._id, 10) === parseInt(book._id, 10) })}
            key={pdfBook._id}
            onClick={() => onSetBook(pdfBook)}>
            <div className="label">{pdfBook.Label}</div>
            <div className="author">{pdfBook.Author}</div>
          </div>
        ))}
        <div className="add-book-btn" onClick={() => openModal('AddBook')}>
          <i className="fa fa-plus-circle" />
        </div>
      </div>
    </div>
  );
};
