import './Receipt.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

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
      <div id="ds9799-lx-receipt">
        <div className="receipts-list">
          {!receipts && <ContainerLoader />}
          {receipts && _.isEmpty(receipts) && <div className="empty-shop">Nothing to sell yet!</div>}
        </div>
      </div>
    );
  }
}

export default Receipt;
