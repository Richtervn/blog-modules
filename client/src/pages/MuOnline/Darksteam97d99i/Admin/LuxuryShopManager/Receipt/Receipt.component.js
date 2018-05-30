import './Receipt.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';
import { getItemImage } from 'helpers/mu';

import { openModal } from 'common/Modal';
import { PureAddCardButton } from 'components/Buttons';

class Receipt extends Component {
  componentWillMount() {
    const { receipts, onGetReceipts } = this.props;
    if (!receipts) {
      onGetReceipts();
    }
  }

  render() {
    const { receipts, onSetFocusReceipt } = this.props;
    return (
      <div id="ds9799-lxm-receipt">
        <div className="receipts-list">
          {!receipts && <ContainerLoader />}
          {receipts && (
            <div className="add-receipt-btn">
              <PureAddCardButton onClick={() => openModal('AddDs9799Receipt')} />
            </div>
          )}
          {receipts &&
            receipts.map(receipt => (
              <div key={receipt.id} className="wrapper">
                <div className="receipt-card">
                  <div className="label">{receipt.name}</div>
                  <div className="image">
                    <img src={receipt.image_url} alt={receipt.name} />
                  </div>
                  <div className="description">{receipt.description}</div>
                  <div className="materials">
                    <div className="label">Materials</div>
                    {receipt.materials.map(material => (
                      <div className="material" key={material.id}>
                        {material.count} x&nbsp;
                        <img
                          src={getItemImage(material.category, material.itemId, material.level)}
                          alt={material.name}
                        />&nbsp;
                        {material.name}
                      </div>
                    ))}
                  </div>
                  <div className="feature">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        onSetFocusReceipt(receipt);
                        openModal('EditDs9799Receipt');
                      }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        onSetFocusReceipt(receipt);
                        openModal('DeleteDs9799Receipt');
                      }}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Receipt;
