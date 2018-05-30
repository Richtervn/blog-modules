import './Receipt.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

import { openModal } from 'common/Modal';
import { getItemImage, formatNumber } from 'helpers';

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
      <div id="ds9799-lx-receipt">
        <div className="receipts-list">
          {!receipts && <ContainerLoader />}
          {receipts && _.isEmpty(receipts) && <div className="empty-shop">Nothing to sell yet!</div>}
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
                      className="btn btn-danger btn-block"
                      onClick={() => {
                        onSetFocusReceipt(receipt);
                        openModal('BuyDs9799Receipt');
                      }}>
                      Buy : <span>{formatNumber(receipt.price)}</span> Credits
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
