import './InventoryCard.css';
import _ from 'underscore';
import React, { Component } from 'react';
import classnames from 'classnames';
import { getItemImage } from 'helpers/mu';

import { ContainerLoader } from 'common/Loaders';
import EquipmentCard from './EquipmentCard.component';

const inventoryBox = [1, 2, 3, 4, 5, 6, 7, 8];

class InventoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { didFullLoaded: this.isFullData(this.props.data) };
  }

  isFullData(data) {
    const categories = _.pluck(data.Categories, 'Name');
    const fileNames = _.difference(categories, Object.keys(data));
    return _.isEmpty(fileNames);
  }

  getInventory() {
    const inventory = {};
    const { characterInventory } = this.props;

    for (let slot in characterInventory) {
      const item = characterInventory[slot];
      inventory[slot] = item;
      if (item) {
        inventory[slot].itemImage = getItemImage(item.category, item.itemId, item.level);
      }
    }
    return inventory;
  }

  componentWillMount() {
    const { data, onGetItems } = this.props;
    if (!data.Categories) {
      onGetItems();
    } else {
      const categories = _.pluck(data.Categories, 'Name');
      const fileNames = _.difference(categories, Object.keys(data));
      onGetItems({ fileNames });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (!this.state.didFullLoaded) {
      this.setState({ didFullLoaded: this.isFullData(data) });
    }
  }

  renderItem(item, row, col) {
    const { data, selectedSlot, onSelectItem } = this.props;
    const slot = `Inventory${row}${col}`;
    const srcItem = _.findWhere(data[item.category], { _id: item.itemId.toString() });
    let is2x2Item = false;
    let style = {};
    let containerStyle = {};
    if (srcItem) {
      containerStyle.width = `${parseInt(srcItem.X, 10) * 38.5}px`;
      containerStyle.height = `${parseInt(srcItem.Y, 10) * 38.5}px`;
    }

    if (srcItem.X === '1' && srcItem.Y === '1') {
      const container = document.getElementById(slot);
      if (container) {
        container.classList.remove('hoverable');
      }
      style.maxWidth = '25px';
      style.maxHeight = '25px';
    } else if (srcItem.X === '2' && srcItem.Y === '2') {
      is2x2Item = true;
      const container1 = document.getElementById(`Inventory${row}${col}`);
      const container2 = document.getElementById(`Inventory${row + 1}${col}`);
      const container3 = document.getElementById(`Inventory${row + 1}${col + 1}`);
      const container4 = document.getElementById(`Inventory${row}${col + 1}`);
      [container1, container2, container3, container4].forEach(container => {
        if (container) {
          container.classList.remove('hoverable');
        }
      });
      style.maxWidth = `${parseInt(srcItem.X, 10) * 25}px`;
      style.maxHeight = `${parseInt(srcItem.Y, 10) * 25}px`;
    }

    return (
      <div
        className={classnames('img-item-wrapper', { 'item-2x2': is2x2Item, selected: slot === selectedSlot })}
        style={containerStyle}
        onClick={e => {
          e.stopPropagation();
          onSelectItem(slot, item);
        }}>
        <div className="img-item-container">
          <img src={item.itemImage} alt="Item" style={style} />
        </div>
      </div>
    );
  }

  render() {
    const { didFullLoaded } = this.state;
    const { selectedSlot, onSelectItem } = this.props;
    if (!didFullLoaded) {
      return (
        <div className="ds9799-admin-inventory-card-loader">
          <ContainerLoader />
        </div>
      );
    }
    const inventory = this.getInventory();
    return (
      <div id="ds9799-admin-inventory">
        <EquipmentCard
          inventory={inventory}
          selectedSlot={selectedSlot}
          onSelectItem={(slot, item) => onSelectItem(slot, item)}
        />
        <div className="inv">
          {inventoryBox.map(row => (
            <div className="inv-row" key={`row${row}`}>
              {inventoryBox.map(col => {
                const slot = `Inventory${row}${col}`;

                return (
                  <div
                    className={classnames('inv-col hoverable', { selected: slot === selectedSlot })}
                    key={`col${col}`}
                    id={`Inventory${row}${col}`}
                    onClick={() => onSelectItem(`Inventory${row}${col}`)}>
                    {inventory[slot] && inventory[slot].itemImage && this.renderItem(inventory[slot], row, col)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default InventoryCard;
