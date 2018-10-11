import './CharactersManager.css';
import React, { Component } from 'react';

import { ColLoader } from 'common/Loaders';

import CharacterForm from './CharacterForm.container';
import CharactersList from './CharactersList.component';

class CharactersManager extends Component {
  componentWillMount() {
    this.props.onGetCharacters();
  }

  render() {
    const { characters, focusCharacter, onGetCharacterDetail, onClearCharacterDetail } = this.props;
    if (!characters) {
      return <ColLoader />;
    }
    return (
      <div id="ds9799-characters-manager">
        <div className="side-bar">
          <CharactersList
            characters={characters}
            focusCharacter={focusCharacter}
            onCharacterSelect={charName => onGetCharacterDetail(charName)}
            onAddClick={() => onClearCharacterDetail()}
          />
        </div>
        <div className="main-view">
          <CharacterForm />
        </div>
      </div>
    );
  }
}

export default CharactersManager;
