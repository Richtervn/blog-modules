import './CharactersManager.css';
import React, { Component } from 'react';
import classNames from 'classnames';

import { ColLoader } from 'common/Loaders';
import { SearchInput } from 'components/Inputs';

import CharacterForm from './CharacterForm.container';

class CharactersManager extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', didLoaded: false };
  }

  componentWillMount() {
    this.props.onGetCharacters();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.characters && nextProps.characters) {
      this.props.onGetCharacterDetail(nextProps.characters[0].Name);
      this.setState({ didLoaded: true });
    }
  }

  render() {
    const { characters, focusCharacter, onSearch, onGetCharacterDetail, onClearCharacterDetail } = this.props;
    if (!characters) {
      return <ColLoader />;
    }

    return (
      <div id="ds9799-characters-manager">
        <div className="side-bar">
          <div className="search-wrapper">
            <SearchInput
              customClass="ds9799-search-box"
              value={this.state.value}
              onChange={e => {
                this.setState({ value: e.target.value });
                onSearch(e.target.value);
              }}
            />
          </div>
          <div className="list-characters">
            {characters.map(char => (
              <div
                className={classNames('character-card', { active: char.Name === focusCharacter })}
                key={char.Name}
                onClick={() => onGetCharacterDetail(char.Name)}>
                <div className="img-wrapper">
                  <img src={`/images/muonline/character/${char.Class}.png`} alt={char.Class} />
                </div>
                <div className="content">
                  <div className="name">{char.Name}</div>
                  <div className="info">
                    <div>Resets: {char.Resets}</div>
                    <div>Grand Resets: {char.GrandResets}</div>
                  </div>
                  <div className="acc">Account: {char.AccountID}</div>
                </div>
              </div>
            ))}
            <div className="add-character-btn" onClick={() => onClearCharacterDetail()}>
              <i className="fa fa-plus-circle" />
            </div>
          </div>
        </div>
        <div className="main-view">
          <CharacterForm />
        </div>
      </div>
    );
  }
}

export default CharactersManager;
