import './LuxuryShopManager.css';
import React, { Component } from 'react';
import classnames from 'classnames';

import { Receipt } from './Receipt';
import { Consumable } from './Consumable';
import { Exchange } from './Exchange';

const menu = [
  {
    name: 'Receipt',
    icon: 'lx-receipt'
  },
  {
    name: 'Consumable',
    icon: 'lx-consumable'
  },
  {
    name: 'Exchange',
    icon: 'lx-exchange'
  }
];

class LuxuryShopManager extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 'Receipt' };
  }

  render() {
    const { activePage } = this.state;
    return (
      <div id="ds9799-lx-manager">
        <div className="menu-bar">
          {menu.map((item, i) => (
            <div
              key={i}
              className={classnames('menu-tab', { active: activePage === item.name })}
              onClick={() => this.setState({ activePage: item.name })}>
              <img src={`/images/icons/${item.icon}.png`} alt={item.name} />
              <div className="label">{item.name}</div>
            </div>
          ))}
        </div>
        {activePage === 'Receipt' && <Receipt />}
        {activePage === 'Consumable' && <Consumable />}
        {activePage === 'Exchange' && <Exchange />}
      </div>
    );
  }
}

export default LuxuryShopManager;
