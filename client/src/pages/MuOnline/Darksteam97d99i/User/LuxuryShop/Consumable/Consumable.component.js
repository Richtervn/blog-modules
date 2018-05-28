import './Consumable.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';
import { formatNumber } from 'helpers';

class Consumable extends Component {
  componentWillMount() {
    const { consumables, onGetConsumables } = this.props;
    if (!consumables) {
      onGetConsumables();
    }
  }

  render() {
    const { consumables } = this.props;
    return (
      <div id="ds9799-lx-consumable">
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
                  <button className="btn btn-block btn-danger">
                    <div className="slogan">
                      Buy : <span>{formatNumber(consumable.price)}</span> Credits
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

export default Consumable;
