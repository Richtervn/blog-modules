import './InventoryCard.css';
import React, { Component } from 'react';
import classnames from 'classnames';
import { getItemImage } from 'helpers/mu';

class InventoryCard extends Component {
  render() {
    const { inventories, focusCharacter, onSelectItem, selectedSlot } = this.props;
    const inventory = {};

    for (let slot in inventories[focusCharacter]) {
      const item = inventories[focusCharacter][slot];
      inventory[slot] = item;
      if (item) {
        inventory[slot].itemImage = getItemImage(item.category, item.itemId, item.level);
      }
    }

    return (
      <div id="ds9799-inventory">
        <div className="inventory-row">
          <div
            className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Pet' })}
            onClick={() => {
              if (inventory.Pet) onSelectItem('Pet');
            }}>
            {inventory.Pet && <img src={inventory.Pet.itemImage} alt="Pet" />}
          </div>
          <div
            className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Helm' })}
            style={{ marginLeft: '60px' }}
            onClick={() => {
              if (inventory.Helm) onSelectItem('Helm');
            }}>
            {inventory.Helm && <img src={inventory.Helm.itemImage} alt="Helm" />}
          </div>
          <div
            className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Wing' })}
            style={{ marginLeft: '10px', width: '150px' }}
            onClick={() => {
              if (inventory.Wing) onSelectItem('Wing');
            }}>
            {inventory.Wing && <img src={inventory.Wing.itemImage} alt="Wing" />}
          </div>
        </div>
        <div className="inventory-row">
          <div
            className={classnames('inventory-box', 'large', { selected: selectedSlot === 'RightHand' })}
            onClick={() => {
              if (inventory.RightHand) onSelectItem('RightHand');
            }}>
            {inventory.RightHand && <img src={inventory.RightHand.itemImage} alt="RightHand" />}
          </div>
          <div
            className={classnames('inventory-box', 'small', { selected: selectedSlot === 'Pedant' })}
            onClick={() => {
              if (inventory.Pendant) onSelectItem('Pendant');
            }}>
            {inventory.Pendant && <img src={inventory.Pendant.itemImage} alt="Pendant" />}
          </div>

          <div
            className={classnames('inventory-box', 'large', { selected: selectedSlot === 'Armor' })}
            onClick={() => {
              if (inventory.Armor) onSelectItem('Armor');
            }}>
            {inventory.Armor && <img src={inventory.Armor.itemImage} alt="Armor" />}
          </div>
          <div
            className={classnames('inventory-box', 'large', { selected: selectedSlot === 'LeftHand' })}
            style={{ marginLeft: '60px' }}
            onClick={() => {
              if (inventory.LeftHand) onSelectItem('LeftHand');
            }}>
            {inventory.LeftHand && <img src={inventory.LeftHand.itemImage} alt="LeftHand" />}
          </div>
        </div>
        <div className="inventory-row">
          <div
            className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Gloves' })}
            onClick={() => {
              if (inventory.Gloves) onSelectItem('Gloves');
            }}>
            {inventory.Gloves && <img src={inventory.Gloves.itemImage} alt="Gloves" />}
          </div>
          <div
            className={classnames('inventory-box', 'small', { selected: selectedSlot === 'RightRing' })}
            onClick={() => {
              if (inventory.RightRing) onSelectItem('RightRing');
            }}>
            {inventory.RightRing && <img src={inventory.RightRing.itemImage} alt="RightRing" />}
          </div>
          <div
            className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Pants' })}
            onClick={() => {
              if (inventory.Pants) onSelectItem('Pants');
            }}>
            {inventory.Pants && <img src={inventory.Pants.itemImage} alt="Pants" />}
          </div>
          <div
            className={classnames('inventory-box', 'small', { selected: selectedSlot === 'LeftRing' })}
            onClick={() => {
              if (inventory.LeftRing) onSelectItem('LeftRing');
            }}>
            {inventory.LeftRing && <img src={inventory.LeftRing.itemImage} alt="LeftRing" />}
          </div>
          <div
            className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Boots' })}
            onClick={() => {
              if (inventory.Boots) onSelectItem('Boots');
            }}>
            {inventory.Boots && <img src={inventory.Boots.itemImage} alt="Boots" />}
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryCard;
