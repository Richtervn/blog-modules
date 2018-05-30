import './Blacksmith.css';
import _ from 'underscore';
import React, { Component } from 'react';

import { getItemImage } from 'helpers/mu';
import { openModal } from 'common/Modal';

import { ContainerLoader } from 'common/Loaders';

class Blacksmith extends Component {
  componentWillMount() {
    const { onGetReceipts } = this.props;
    onGetReceipts();
  }

  render() {
    const { receipts, onSetFocusReceipt } = this.props;
    if (!receipts) {
      return <ContainerLoader />;
    }

    return (
      <div id="ds9799-blacksmith">
        <div className="receipts-list-wrapper">
          <div className="receipts-list">
            {_.isEmpty(receipts) && (
              <div className="empty-receipt">
                <h2>Go to luxury shop and get some receipts</h2>
              </div>
            )}
            {receipts.map(receipt => (
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
                        openModal('CraftDs9799Receipt');
                      }}>
                      Craft
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        onSetFocusReceipt(receipt);
                        openModal('SellDs9799Receipt');
                      }}>
                      Sell
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Blacksmith;
