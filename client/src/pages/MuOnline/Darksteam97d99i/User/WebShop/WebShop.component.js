import _ from 'underscore';
import './WebShop.css';
import React, { Component } from 'react';
import classnames from 'classnames';

import { ContainerLoader } from 'common/Loaders';
import { formatNumber } from 'helpers';

const VipIcon = ({ isVip }) => {
  if (!isVip && isVip.toString() !== '1') {
    return null;
  }

  return (
    <div className="vip-icon">
      <img src="/images/icons/vip.png" alt="vip" />
    </div>
  );
};

class WebShop extends Component {
  componentWillMount() {
    const { focusCategory, packages, onGetPackages } = this.props;
    if (!packages[focusCategory]) {
      onGetPackages(focusCategory);
    }
  }

  render() {
    const { packages, categories, focusCategory, onSelectCategory } = this.props;
    return (
      <div id="ds9799-web-shop">
        <div className="category-list">
          {categories.map(category => (
            <div
              className={classnames('category', { active: focusCategory === category._id })}
              key={category._id}
              onClick={() => onSelectCategory(category._id)}>
              <img src={`/images/icons/${category.Icon}.png`} alt={category.Name} />
              <div className="label">{category.Name}</div>
            </div>
          ))}
        </div>
        <div className="category-detail">
          {!packages[focusCategory] && (
            <div className="loader-bg">
              <ContainerLoader />
            </div>
          )}
          {packages[focusCategory] &&
            _.isEmpty(packages[focusCategory]) && (
              <div className="shop-empty">
                <h1>This category doesn't have anything to sell yet</h1>
              </div>
            )}
          {packages[focusCategory] &&
            packages[focusCategory].map(pack => (
              <div key={pack.id} className="wrapper">
                <div className="package-card">
                  <VipIcon isVip={pack.is_vip_require} />
                  <div className="label">{pack.name}</div>
                  <div className="image-wrapper">
                    <img src={pack.image_url} alt={pack.name} />
                  </div>
                  <div className="buy-btn">
                    <button className="btn btn-danger btn-block">
                      <div className="slogan">Buy :</div>
                      <div className="price">&nbsp;{formatNumber(pack.price)}</div>
                      <div className="unit">&nbsp;Credits</div>
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

export default WebShop;
