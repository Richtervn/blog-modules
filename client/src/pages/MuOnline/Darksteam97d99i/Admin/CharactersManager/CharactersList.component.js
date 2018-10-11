import './CharactersList.css';
import React, { Component } from 'react';
import classNames from 'classnames';

import { SearchInput } from 'components/Inputs';

class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    const { characters, onCharacterSelect, focusCharacter } = this.props;
    if (focusCharacter) {
      onCharacterSelect(focusCharacter);
    } else {
      onCharacterSelect(characters[0].Name);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.characters && nextProps.characters) {
      this.props.onCharacterSelect(nextProps.characters[0]);
    }
  }

  render() {
    const { characters, focusCharacter, onCharacterSelect, onAddClick, hideAddBtn } = this.props;

    return [
      <div className="ds9799-characters-list-search-wrapper" key="search">
        <SearchInput
          customClass="ds9799-search-box"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
      </div>,
      <div className="ds9799-characters-list" key="list">
        {characters.filter(char => char.Name.indexOf(this.state.value) !== -1).map(char => (
          <div
            className={classNames('character-card', { active: char.Name === focusCharacter })}
            key={char.Name}
            onClick={() => onCharacterSelect(char.Name)}>
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
        {!hideAddBtn && (
          <div className="add-character-btn" onClick={() => onAddClick()}>
            <i className="fa fa-plus-circle" />
          </div>
        )}
      </div>
    ];
  }
}

export default CharactersList;
