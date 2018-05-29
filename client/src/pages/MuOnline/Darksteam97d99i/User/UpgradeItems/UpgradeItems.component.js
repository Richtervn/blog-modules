import './UpgradeItems.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

import CharacterCard from '../../components/CharacterCard';
import InventoryCard from './InventoryCard.container';
import OptionCard from './OptionCard.container';
import PriceCard from './PriceCard.container';

class UpgradeItems extends Component {
  componentWillMount() {
    const { onGetCharacters, userId, characters } = this.props;
    if (!characters) {
      onGetCharacters(userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { characters, inventories, focusCharacter } = nextProps;
    if (characters && !inventories[focusCharacter]) {
      this.props.onGetInventory(focusCharacter);
    }
  }

  render() {
    const { characters, onSetFocusCharacter, focusCharacter, inventories } = this.props;

    if (!characters || !inventories[focusCharacter]) {
      return <ContainerLoader />;
    }

    return (
      <div id="ds9799-upgrade-items">
        <div className="character-list">
          {characters.map((character, i) => (
            <CharacterCard
              key={character.Name}
              character={character}
              onClick={() => onSetFocusCharacter(character.Name)}
              isActive={character.Name === focusCharacter}
            />
          ))}
        </div>
        <div className="inventory-detail">
          <div className="row-wrapper">
            <InventoryCard />
            <PriceCard />
          </div>
          <div className="option-card">
            <OptionCard />
          </div>
        </div>
      </div>
    );
  }
}

export default UpgradeItems;
