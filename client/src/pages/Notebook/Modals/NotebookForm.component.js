import React, { useState } from 'react';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow } from 'components/FormTools';
import { hideModal } from 'common/Modal';

export default ({ edit, notebook, onAdd, onEdit }) => {
  const [label, setLabel] = useState('');
  useState(() => {
    if (edit) {
      setTitle(notebook.Title);
    }
  }, [notebook]);

  return [
    <ModalHeader
      key="bs_h"
      iconUrl="/images/icons/bookshelf.png"
      label={edit ? `Edit ${notebook.Label}` : 'Add Notebook'}
    />,
    <div key="bs_b" className="modal-body">
      <form className="text-right">
        <FormGroupRow type="text" label="Label" value={label} onChange={e => setLabel(e.target.value)} error={!label} />
      </form>
    </div>,
    <ModalFooter
      key="bs_f"
      onClickSubmit={() => {
        edit ? onEdit({ ...notebook, Label: label }) : onAdd({ Label: label });
        hideModal();
      }}
    />
  ];
};
