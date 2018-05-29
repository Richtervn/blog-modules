import './PriceCard.css';
import React, { Component } from 'react';
import { getItemOptions, getExcText } from 'helpers/mu';
import { ContainerLoader } from 'common/Loaders';

class PriceCard extends Component {
  componentWillMount() {
    const { gameSetting, onGetGameSetting } = this.props;
    if (!gameSetting) {
      onGetGameSetting();
    }
  }

  render() {
    const { gameSetting, item } = this.props;
    if (!gameSetting) {
      return <ContainerLoader />;
    }

    if (!item)
      return (
        <div id="ds9799-price-card" className="notice">
          <h5 className="text-center" style={{ width: '50%' }}>
            <i>Price will be listed according to your item</i>
          </h5>
        </div>
      );

    const basePrice = gameSetting.UPGRADE_ITEM_BASE_PRICE[item.category];
    const charge = gameSetting.UPGRADE_ITEM_PRICE;
    const { isHaveLuck, isHaveSkill } = getItemOptions(item.category, item.itemId);
    const { excOpt1, excOpt2, excOpt3, excOpt4, excOpt5, excOpt6 } = getExcText(item.category, item.itemId, true);

    return (
      <div id="ds9799-price-card">
        <div>
          <div>
            <strong>Base Price : </strong>
            {`${basePrice.BASE + basePrice.STEP * item.itemId} credits`}
          </div>
          {isHaveLuck && (
            <div>
              <strong>Luck : </strong>
              {`${charge.LUCK * basePrice.MULTIPLE} credits`}
            </div>
          )}
          {isHaveSkill && (
            <div>
              <strong>Skill : </strong>
              {`${charge.SKILL * basePrice.MULTIPLE} credits`}
            </div>
          )}
          <div>
            <strong>Option : </strong>
            {`${charge.OPTION * basePrice.MULTIPLE} credits / 1 level`}
          </div>
          <div>
            <strong>Level below 9 : </strong>
            {`${charge.LEVEL_BELOW_9 * basePrice.MULTIPLE} credits / 1 level`}
          </div>
          <div>
            <strong>+9 to +10 : </strong>
            {`${charge.LEVEL_10 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>+10 to +11 : </strong>
            {`${charge.LEVEL_11 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>+11 to +12 : </strong>
            {`${charge.LEVEL_12 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>+12 to +13 : </strong>
            {`${charge.LEVEL_13 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>+13 to +14 : </strong>
            {`${charge.LEVEL_14 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>+14 to +15 : </strong>
            {`${charge.LEVEL_15 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>{`${excOpt1} : `} </strong>
            {`${charge.EXC1 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>{`${excOpt2} : `} </strong>
            {`${charge.EXC2 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>{`${excOpt3} : `} </strong>
            {`${charge.EXC3 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>{`${excOpt4} : `} </strong>
            {`${charge.EXC4 * basePrice.MULTIPLE} credits`}
          </div>
          <div>
            <strong>{`${excOpt5} : `} </strong>
            {`${charge.EXC5 * basePrice.MULTIPLE} credits`}
          </div>
          {excOpt6 && (
            <div>
              <strong>{`${excOpt6} : `} </strong>
              {`${charge.EXC6 * basePrice.MULTIPLE} credits`}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PriceCard;
