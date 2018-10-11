import React from 'react';
import classnames from 'classnames';

export default ({ inventory, selectedSlot, onSelectItem }) => {
  return [
    <div className="inventory-row" key="head">
      <div
        className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Pet' })}
        onClick={() => {
          if (inventory.Pet) onSelectItem('Pet', inventory.Pet);
        }}>
        {inventory.Pet && <img src={inventory.Pet.itemImage} alt="Pet" />}
      </div>
      <div
        className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Helm' })}
        style={{ marginLeft: '35px' }}
        onClick={() => {
          if (inventory.Helm) onSelectItem('Helm', inventory.Helm);
        }}>
        {inventory.Helm && <img src={inventory.Helm.itemImage} alt="Helm" />}
      </div>
      <div
        className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Wing' })}
        style={{ marginLeft: '5px', width: '110px' }}
        onClick={() => {
          if (inventory.Wing) onSelectItem('Wing', inventory.Wing);
        }}>
        {inventory.Wing && <img src={inventory.Wing.itemImage} alt="Wing" />}
      </div>
    </div>,
    <div className="inventory-row" key="body">
      <div
        className={classnames('inventory-box', 'large', { selected: selectedSlot === 'RightHand' })}
        onClick={() => {
          if (inventory.RightHand) onSelectItem('RightHand', inventory.RightHand);
        }}>
        {inventory.RightHand && <img src={inventory.RightHand.itemImage} alt="RightHand" />}
      </div>
      <div
        className={classnames('inventory-box', 'small', { selected: selectedSlot === 'Pedant' })}
        onClick={() => {
          if (inventory.Pendant) onSelectItem('Pendant', inventory.Pendant);
        }}>
        {inventory.Pendant && <img src={inventory.Pendant.itemImage} alt="Pendant" />}
      </div>

      <div
        className={classnames('inventory-box', 'large', { selected: selectedSlot === 'Armor' })}
        onClick={() => {
          if (inventory.Armor) onSelectItem('Armor', inventory.Armor);
        }}>
        {inventory.Armor && <img src={inventory.Armor.itemImage} alt="Armor" />}
      </div>
      <div
        className={classnames('inventory-box', 'large', { selected: selectedSlot === 'LeftHand' })}
        style={{ marginLeft: '35px' }}
        onClick={() => {
          if (inventory.LeftHand) onSelectItem('LeftHand', inventory.LeftHand);
        }}>
        {inventory.LeftHand && <img src={inventory.LeftHand.itemImage} alt="LeftHand" />}
      </div>
    </div>,
    <div className="inventory-row" key="foot">
      <div
        className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Gloves' })}
        onClick={() => {
          if (inventory.Gloves) onSelectItem('Gloves', inventory.Gloves);
        }}>
        {inventory.Gloves && <img src={inventory.Gloves.itemImage} alt="Gloves" />}
      </div>
      <div
        className={classnames('inventory-box', 'small', { selected: selectedSlot === 'RightRing' })}
        onClick={() => {
          if (inventory.RightRing) onSelectItem('RightRing', inventory.RightRing);
        }}>
        {inventory.RightRing && <img src={inventory.RightRing.itemImage} alt="RightRing" />}
      </div>
      <div
        className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Pants' })}
        onClick={() => {
          if (inventory.Pants) onSelectItem('Pants', inventory.Pants);
        }}>
        {inventory.Pants && <img src={inventory.Pants.itemImage} alt="Pants" />}
      </div>
      <div
        className={classnames('inventory-box', 'small', { selected: selectedSlot === 'LeftRing' })}
        onClick={() => {
          if (inventory.LeftRing) onSelectItem('LeftRing', inventory.LeftRing);
        }}>
        {inventory.LeftRing && <img src={inventory.LeftRing.itemImage} alt="LeftRing" />}
      </div>
      <div
        className={classnames('inventory-box', 'medium', { selected: selectedSlot === 'Boots' })}
        onClick={() => {
          if (inventory.Boots) onSelectItem('Boots', inventory.Boots);
        }}>
        {inventory.Boots && <img src={inventory.Boots.itemImage} alt="Boots" />}
      </div>
    </div>
  ];
};
