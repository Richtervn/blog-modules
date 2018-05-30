import './Exchange.css';
import React, { Component } from 'react';
import { formatNumber } from 'helpers';
import { openModal } from 'common/Modal';

import { PureAddCardButton } from 'components/Buttons';
import { ContainerLoader } from 'common/Loaders';

class Exchange extends Component {
  componentWillMount() {
    const { exchanges, onGetExchanges } = this.props;
    if (!exchanges) {
      onGetExchanges();
    }
  }

  render() {
    const { exchanges, onSetFocusExchange } = this.props;
    return (
      <div id="ds9799-lxm-exchange">
        <div className="exchanges-list">
          {!exchanges && <ContainerLoader />}
          {exchanges && (
            <div className="add-exchange-btn">
              <PureAddCardButton onClick={() => openModal('AddDs9799Exchange')} />
            </div>
          )}
          {exchanges &&
            exchanges.map(exchange => (
              <div className="wrapper" key={exchange.id}>
                <div className="exchange-card">
                  <div className="label">{exchange.name}</div>
                  <div className="image">
                    <img src={exchange.image_url} alt={exchange.name} />
                  </div>
                  <div className="price">
                    Price : <span>{formatNumber(exchange.price)}</span> Credits
                  </div>
                  <div className="feature">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        onSetFocusExchange(exchange);
                        openModal('EditDs9799Exchange');
                      }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        onSetFocusExchange(exchange);
                        openModal('DeleteDs9799Exchange');
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

export default Exchange;
