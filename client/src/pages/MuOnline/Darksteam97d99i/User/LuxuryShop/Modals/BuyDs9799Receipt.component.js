import './BuyDs9799Receipt.css';
import React from 'react';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { formatNumber } from 'helpers';

export default ({ receipt, onBuyReceipt }) => [
  <ModalHeader key="br_h" iconUrl="/images/icons/luxury.png" label={`Buy ${receipt.name} receipt`} />,
  <div key="br_b" className="modal-body">
    <div className="ds9799-blr alert alert-info">
      Are you sure you want to buy <span>{receipt.name}</span> ?<br /> This will cost you{' '}
      <span>{formatNumber(receipt.price)}</span> Credits
    </div>
  </div>,
  <ModalFooter key="br_f" onClickSubmit={() => onBuyReceipt(receipt.id)} />
];
