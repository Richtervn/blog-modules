import React, { useState, useEffect } from 'react';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow } from 'components/FormTools';
import { hideModal } from 'common/Modal';

export default ({ edit, bookshelf, book, onAdd, onEdit }) => {
  const [value, setValue] = useState({
    Label: '',
    Author: '',
    PublishDate: '',
    file: null
  });
  const [error, setError] = useState({});
  useEffect(() => {
    if (edit) {
      setError({});
      setValue({ file: null, Label: bookshelf.Label, Author: bookshelf.Author, PublishDate: bookshelf.PublishDate });
    }
  }, [bookshelf]);

  return [
    <ModalHeader
      key="bs_h"
      iconUrl="/images/icons/bookshelf.png"
      label={edit ? `Edit ${book.Label}` : `Add a ${bookshelf.Title} book`}
    />,
    <div key="bs_b" className="modal-body">
      <form className="text-right">
        <FormGroupRow
          type="file"
          label="PDF File"
          onChange={e => setValue({ ...value, file: e.target.files[0] })}
          error={error.File}
        />
        <FormGroupRow
          type="text"
          label="Label"
          value={value.Label}
          onChange={e => setValue({ ...value, Label: e.target.value })}
          error={error.Label}
        />
        <FormGroupRow
          type="text"
          label="Author"
          value={value.Author}
          onChange={e => setValue({ ...value, Author: e.target.value })}
        />
        <FormGroupRow
          type="date"
          label="Publish Date"
          value={value.PublishDate}
          onChange={e => setValue({ ...value, PublishDate: e.target.value })}
        />
      </form>
    </div>,
    <ModalFooter
      key="bs_f"
      onClickSubmit={() => {
        const err = { Label: !value.Label, File: !edit && !value.file };
        setError(err);
        const isHaveError = Object.values(err).filter(v => v).length > 0;
        if (!isHaveError) {
          console.log(bookshelf._id);
          edit
            ? onEdit({ ...value, shelfId: bookshelf._id, _id: book._id })
            : onAdd({ ...value, shelfId: bookshelf._id });
          hideModal();
        }
      }}
    />
  ];
};
