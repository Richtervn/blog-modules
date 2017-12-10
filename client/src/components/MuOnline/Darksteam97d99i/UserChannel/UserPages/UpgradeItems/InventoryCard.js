import React from 'react';
import { defineItemImage } from 'utilities';

export default ({ inventories, onGetInventory, focusCharacter, onSelectItem, selectedSlot }) => {
  if (!inventories[focusCharacter.Name]) {
    onGetInventory(focusCharacter.Name);
    return null;
  }

  const inventory = {};

  for (let slot in inventories[focusCharacter.Name]) {
    const item = inventories[focusCharacter.Name][slot];
    inventory[slot] = item;
    if (item) {
      inventory[slot].itemImage = defineItemImage(item.category, item.itemId, item.level);
    }
  }

  return (
    <div className="ds9799-inventory">
      <div className="ds9799-inventory-row">
        <div
          className={`ds9799-inventory-md-box ${selectedSlot == 'Pet'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.Pet) onSelectItem(inventory.Pet, 'Pet');
          }}>
          {inventory.Pet && <img src={inventory.Pet.itemImage} />}
        </div>
        <div
          className={`ds9799-inventory-md-box ${selectedSlot == 'Helm'
            ? 'ds9799-selected-item'
            : ''}`}
          style={{ marginLeft: '60px' }}
          onClick={() => {
            if (inventory.Helm) onSelectItem(inventory.Helm, 'Helm');
          }}>
          {inventory.Helm && <img src={inventory.Helm.itemImage} />}
        </div>
        <div
          className={`ds9799-inventory-md-box ${selectedSlot == 'Wing'
            ? 'ds9799-selected-item'
            : ''}`}
          style={{ marginLeft: '10px', width: '150px' }}
          onClick={() => {
            if (inventory.Wing) onSelectItem(inventory.Wing, 'Wing');
          }}>
          {inventory.Wing && <img src={inventory.Wing.itemImage} />}
        </div>
      </div>
      <div className="ds9799-inventory-row">
        <div
          className={`ds9799-inventory-lg-box ${selectedSlot == 'RightHand'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.RightHand) onSelectItem(inventory.RightHand, 'RightHand');
          }}>
          {inventory.RightHand && <img src={inventory.RightHand.itemImage} />}
        </div>
        <div
          className={`ds9799-inventory-sm-box ${selectedSlot == 'Pendant'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.Pendant) onSelectItem(inventory.Pendant, 'Pendant');
          }}>
          {inventory.Pendant && <img src={inventory.Pendant.itemImage} />}
        </div>

        <div
          className={`ds9799-inventory-lg-box ${selectedSlot == 'Armor'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.Armor) onSelectItem(inventory.Armor, 'Armor');
          }}>
          {inventory.Armor && <img src={inventory.Armor.itemImage} />}
        </div>
        <div
          className={`ds9799-inventory-lg-box ${selectedSlot == 'LeftHand'
            ? 'ds9799-selected-item'
            : ''}`}
          style={{ marginLeft: '60px' }}
          onClick={() => {
            if (inventory.LeftHand) onSelectItem(inventory.LeftHand, 'LeftHand');
          }}>
          {inventory.LeftHand && <img src={inventory.LeftHand.itemImage} />}
        </div>
      </div>
      <div className="ds9799-inventory-row">
        <div
          className={`ds9799-inventory-md-box ${selectedSlot == 'Gloves'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.Gloves) onSelectItem(inventory.Gloves, 'Gloves');
          }}>
          {inventory.Gloves && <img src={inventory.Gloves.itemImage} />}
        </div>
        <div
          className={`ds9799-inventory-sm-box ${selectedSlot == 'RightRing'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.RightRing) onSelectItem(inventory.RightRing, 'RightRing');
          }}>
          {inventory.RightRing && <img src={inventory.RightRing.itemImage} />}
        </div>
        <div
          className={`ds9799-inventory-md-box ${selectedSlot == 'Pants'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.Pants) onSelectItem(inventory.Pants, 'Pants');
          }}>
          {inventory.Pants && <img src={inventory.Pants.itemImage} />}
        </div>
        <div
          className={`ds9799-inventory-sm-box ${selectedSlot == 'LeftRing'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.LeftRing) onSelectItem(inventory.LeftRing, 'LeftRing');
          }}>
          {inventory.LeftRing && <img src={inventory.LeftRing.itemImage} />}
        </div>
        <div
          className={`ds9799-inventory-md-box ${selectedSlot == 'Boots'
            ? 'ds9799-selected-item'
            : ''}`}
          onClick={() => {
            if (inventory.Boots) onSelectItem(inventory.Boots, 'Boots');
          }}>
          {inventory.Boots && <img src={inventory.Boots.itemImage} />}
        </div>
      </div>
    </div>
  );
};
