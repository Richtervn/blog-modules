import React, { useState } from 'react';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow } from 'components/FormTools';
import { hideModal } from 'common/Modal';

export default ({ edit, bookshelf, onAdd, onEdit }) => {
  const [title, setTitle] = useState('');
  useState(() => {
    if (edit) {
      setTitle(bookshelf.Title);
    }
  }, [bookshelf]);

  return [
    <ModalHeader
      key="bs_h"
      iconUrl="/images/icons/bookshelf.png"
      label={edit ? `Edit ${bookshelf.Title}` : 'Add Bookshelf'}
    />,
    <div key="bs_b" className="modal-body">
      <form className="text-right">
        <FormGroupRow type="text" label="Title" value={title} onChange={e => setTitle(e.target.value)} error={!title} />
      </form>
    </div>,
    <ModalFooter
      key="bs_f"
      onClickSubmit={() => {
        edit ? onEdit({ ...bookshelf, Title: title }) : onAdd({ Title: title });
        hideModal();
      }}
    />
  ];
};
