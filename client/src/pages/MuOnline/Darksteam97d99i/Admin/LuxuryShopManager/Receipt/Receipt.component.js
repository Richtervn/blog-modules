import './Receipt.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

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
    const { receipts } = this.props;
    return (
      <div id="ds9799-lxm-receipt">
        <div className="receipts-list">
          {!receipts && <ContainerLoader />}
          {receipts && (
            <div className="add-receipt-btn">
              <PureAddCardButton onClick={() => openModal('AddDs9799Receipt')} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Receipt;
