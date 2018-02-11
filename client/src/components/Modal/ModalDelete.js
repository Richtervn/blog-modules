import React from 'react';
import { hideModal } from 'common/Modal';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

export default ({ iconUrl, label, onClickSubmit, text, children }) => [
  <ModalHeader key="cd_h" iconUrl={iconUrl} label={label} />,
  <div key="cd_b" className="modal-body">
    {text && <div className="alert alert-danger">{text}</div>}
    {children}
  </div>,
  <ModalFooter
    key="cd_f"
    onClickSubmit={() => {
      onClickSubmit();
      hideModal();
    }}
  />
];
