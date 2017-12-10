import React from 'react';
import CharacterCard from '../CharacterManager/CharacterCard';
import InventoryCard from './InventoryCard';
import PriceCard from './PriceCard';
import OptionCard from './OptionCard';

export default ({
  characters,
  user,
  inventories,
  gameSetting,
  focusCharacter,
  selectedSlot,
  focusItem,
  onGetCharacters,
  onGetInventory,
  onSelectCharacter,
  onSelectItem,
  onUpgradeItem
}) => {
  if (!characters) {
    onGetCharacters(user.memb___id);
    return null;
  }
  return (
    <div className="row no-row-margin">
      <div className="col-3 no-col-margin">
        {characters.map((character, i) => (
          <CharacterCard
            key={i}
            character={character}
            onSelect={onSelectCharacter}
            isFocus={focusCharacter.Name == character.Name}
          />
        ))}
      </div>
      <div className="col-9 no-col-margin">
        <div className="row no-row-margin">
          <InventoryCard
            inventories={inventories}
            onGetInventory={onGetInventory}
            focusCharacter={focusCharacter}
            onSelectItem={onSelectItem}
            selectedSlot={selectedSlot}
          />
          <PriceCard gameSetting={gameSetting} item={focusItem} />
        </div>
        <div className="row no-row-margin">
          <OptionCard
            user={user}
            item={focusItem}
            gameSetting={gameSetting}
            slot={selectedSlot}
            character={focusCharacter}
            onUpgradeItem={onUpgradeItem}
          />
        </div>
      </div>
    </div>
  );
};
