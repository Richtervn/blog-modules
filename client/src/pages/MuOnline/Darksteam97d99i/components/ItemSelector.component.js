import './ItemSelector.css';
import React, { Component } from 'react';
import { getMuItemName, getMuItemImage } from 'helpers';

class ItemSelector extends Component {
  componentWillMount() {
    const { data, onGetData } = this.props;
    if (!data.Categories) {
      onGetData('Categories');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category && !this.props.data[nextProps.category]) {
      this.props.onGetData(nextProps.category);
    }
  }

  render() {
    const { data, onSelectCategory, category, onSelectItem, itemId, itemLvl } = this.props;
    if (!data.Categories) {
      return null;
    }
    if (category && !data[category]) {
      return null;
    }
    return (
      <div className="ds9799-item-selector">
        <select className="form-control" onChange={onSelectCategory} defaultValue={category}>
          {data.Categories.map((category, i) => (
            <option key={i} value={category.Name}>
              {category.Name}
            </option>
          ))}
        </select>
        {category && (
          <div className="item-preview">
            <select className="form-control" onChange={onSelectItem} defaultValue={itemId}>
              {data[category].map((item, i) => (
                <option key={i} value={item._id}>
                  {getMuItemName(category, item, itemLvl)}
                </option>
              ))}
            </select>
            <img src={getMuItemImage(category, itemId, itemLvl)} alt="MU Item" />
          </div>
        )}
      </div>
    );
  }
}

export default ItemSelector;
