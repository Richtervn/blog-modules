import './WebShopManager.css';
import React, { Component } from 'react';
import classnames from 'classnames';
import { formatNumber } from 'helpers';

import { ContainerLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';
import { PureAddCardButton } from 'components/Buttons';

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

class WebShopManager extends Component {
  componentWillMount() {
    const { packages, onGetPackages, focusCategory } = this.props;
    if (!packages[focusCategory]) {
      onGetPackages(focusCategory);
    }
  }

  onSelectCategory(categoryId) {
    this.props.onGetPackages(categoryId);
    this.props.onSetFocusCategory(categoryId);
  }

  render() {
    const { categories, packages, onSetFocusPackage, focusCategory } = this.props;

    return (
      <div id="ds9799-web-shop-manager">
        <div className="category-list">
          {categories.map(category => (
            <div
              className={classnames('category', { active: focusCategory === category._id })}
              key={category._id}
              onClick={() => this.onSelectCategory(category._id)}>
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
            packages[focusCategory].map(pack => (
              <div key={pack.id} className="wrapper">
                <div className="package-card">
                  <VipIcon isVip={pack.is_vip_require} />
                  <div className="label">{pack.name}</div>
                  <div className="image-wrapper">
                    <img src={pack.image_url} alt={pack.name} />
                  </div>
                  <div className="price">
                    Price : <span>{formatNumber(pack.price)}</span> Credits
                  </div>
                  <div className="feature">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        onSetFocusPackage(pack);
                        openModal('EditDs9799WebShopPackage');
                      }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        onSetFocusPackage(pack);
                        openModal('DeleteDs9799WebShopPackage');
                      }}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {packages[focusCategory] && (
            <div className="add-web-shop-btn">
              <PureAddCardButton iconClass="fa-2x" onClick={() => openModal('AddDs9799WebShopPackage')} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default WebShopManager;

// onGetPackages
// onAddPackage
// onEditPackage
// onDeletePackage
