import './Consumable.css';
import React, { Component } from 'react';
import { formatNumber } from 'helpers';
import { openModal } from 'common/Modal';

import { ContainerLoader } from 'common/Loaders';
import { PureAddCardButton } from 'components/Buttons';

class Consumable extends Component {
  componentWillMount() {
    const { consumables, onGetConsumables } = this.props;
    if (!consumables) {
      onGetConsumables();
    }
  }

  render() {
    const { consumables, onSetFocusConsumable } = this.props;
    return (
      <div id="ds9799-lxm-consumable">
        <div className="consumables-list">
          {!consumables && <ContainerLoader />}
          {consumables &&
            consumables.map(consumable => (
              <div className="wrapper" key={consumable.id}>
                <div className="consumable-card">
                  <div className="label">{consumable.name}</div>
                  <div className="image">
                    <img src={consumable.image_url} alt={consumable.name} />
                  </div>
                  <div className="price">
                    Price : <span>{formatNumber(consumable.price)}</span> Credits
                  </div>
                  <div className="feature">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        onSetFocusConsumable(consumable);
                        openModal('EditDs9799Consumable');
                      }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        onSetFocusConsumable(consumable);
                        openModal('DeleteDs9799Consumable');
                      }}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {consumables && (
            <div className="add-consumable-btn">
              <PureAddCardButton onClick={() => openModal('AddDs9799Consumable')} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Consumable;
