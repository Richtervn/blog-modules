import './SellDs9799Receipt.css';
import React, { Component } from 'react';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { formatNumber } from 'helpers';
import { ModalLoader } from 'common/Loaders';

class SellDs9799Receipt extends Component {
  componentWillMount() {
    const { gameSetting, onGetGameSetting } = this.props;
    if (!gameSetting) {
      onGetGameSetting();
    }
  }

  render() {
    const { receipt, onSellReceipt, gameSetting } = this.props;

    return [
      <ModalHeader key="br_h" iconUrl="/images/icons/luxury.png" label={`Sell ${receipt.name}`} />,
      <div key="br_b" className="modal-body">
        {!gameSetting && <ModalLoader />}
        {gameSetting && (
          <div className="ds9799-sr alert alert-info">
            You will receive <span>{formatNumber(receipt.price * gameSetting.SELL_RECEIPT_RATIO)}</span> Credits for
            selling <span>{receipt.name}</span>
          </div>
        )}
      </div>,
      <ModalFooter key="br_f" onClickSubmit={() => onSellReceipt(receipt.id)} />
    ];
  }
}

export default SellDs9799Receipt;
