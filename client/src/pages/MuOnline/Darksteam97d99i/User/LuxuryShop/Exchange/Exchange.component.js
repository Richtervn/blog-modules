import './Exchange.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';
import { formatNumber } from 'helpers';
import { openModal } from 'common/Modal';

class Exchange extends Component {
  componentWillMount() {
    const { exchanges, onGetExchanges } = this.props;
    if (!exchanges) {
      onGetExchanges();
    }
  }

  render() {
    const { exchanges, onGetExchangeCount, onSetFocusExchange } = this.props;
    return (
      <div id="ds9799-lx-exchange">
        <div className="exchanges-list">
          {!exchanges && <ContainerLoader />}
          {exchanges &&
            exchanges.map(exchange => (
              <div className="wrapper" key={exchange.id}>
                <div className="exchange-card">
                  <div className="label">{exchange.name}</div>
                  <div className="image">
                    <img src={exchange.image_url} alt={exchange.name} />
                  </div>
                  <button
                    className="btn btn-block btn-danger"
                    onClick={() => {
                      onSetFocusExchange(exchange);
                      onGetExchangeCount(exchange.id);
                      openModal('TradeDs9799Exchange');
                    }}>
                    <div className="slogan">
                      Exchange : <span>{formatNumber(exchange.price)}</span> Credits
                    </div>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Exchange;
