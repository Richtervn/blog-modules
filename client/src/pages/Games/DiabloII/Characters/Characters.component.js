import './Characters.css';
import _ from 'underscore';
import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';

import { PageLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';
import { sortList } from 'helpers';

<<<<<<< HEAD
import { LeftPngCardTrans } from 'components/Cards';
=======
import { LeftImageCardTrans } from 'components/Cards';
>>>>>>> 752683a55f60625610abd7a6842170bf47787fd4

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        name: '',
        mod: 'default',
        title: 'default',
        class: 'default'
      },
      sortKey: '',
      sortOption: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { mods, characters, onGetCharacters, onGetMods } = this.props;
    if (!characters) {
      onGetCharacters();
    }
    if (!mods) {
      onGetMods();
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { search } = this.state;
    const query = {};
    search[name] = value;
    if (search.name) query.Name = search.name;
    if (search.mod !== 'default') query.ModId = search.mod;
    if (search.title !== 'default') query.Title = search.title;
    if (search.class !== 'default') query.Class = search.class;
    this.props.onSearchCharacters(query);

    this.setState({ search: { ...this.state.search, [name]: value } });
  }

  handleSort(sKey) {
    const { sortKey, sortOption } = this.state;
    const nextState = { ...this.state };
    if (sortKey !== sKey) {
      nextState.sortKey = sKey;
      nextState.sortOption = 'ASC';
    } else {
      if (sortOption === '') {
        nextState.sortOption = 'ASC';
      }
      if (sortOption === 'ASC') {
        nextState.sortOption = 'DESC';
      }
      if (sortOption === 'DESC') {
        nextState.sortOption = '';
      }
    }

    this.setState(nextState);
  }

  getCharacterMod(id) {
    let mod = {};
    mod = _.findWhere(this.props.mods, { _id: parseInt(id, 10) });
    return `${mod.Name} v${mod.ModVersion}`;
  }

  render() {
    const { characters, mods, onSetFocusCharacter } = this.props;
    const { sortKey, sortOption } = this.state;
    if (!characters || !mods) {
      return (
        <div className="row">
          <PageLoader opacity={2} />
        </div>
      );
    }
    let sortedCharacters = characters;
    if (sortKey && sortKey === 'Mod') {
      let refineCharacters = characters.map(character => {
        character.ModName = _.findWhere(mods, { _id: parseInt(character.ModId, 10) }).Name;
        return character;
      });
      sortedCharacters = sortList(refineCharacters, 'ModName', sortOption);
    } else {
      sortedCharacters = sortList(characters, sortKey, sortOption);
    }

    return (
      <div>
        <div className="row">
          <div className="d2-character-feature-bar">
            <button className="btn" onClick={() => openModal('AddDiabloIICharacter')}>
              <i className="fa fa-plus-circle" />
            </button>
            <div className="search">
              <input
                type="text"
                className="form-control name"
                name="name"
                placeholder="Search ..."
                onChange={this.handleChange}
                value={this.state.search.name}
              />
              <select
                className="form-control mod"
                value={this.state.search.mod}
                onChange={this.handleChange}
                name="mod">
                <option className="default" value="default" hidden>
                  Select mod
                </option>
                {mods.map(mod => <option key={mod._id} value={mod._id}>{`${mod.Name} v${mod.ModVersion}`}</option>)}
              </select>
              <select
                className="form-control title"
                value={this.state.search.title}
                onChange={this.handleChange}
                name="title">
                <option className="default" value="default" hidden>
                  Select title
                </option>
                {['Slayer', 'Champion', 'Patriarch'].map((title, i) => (
                  <option key={i} value={title}>
                    {title}
                  </option>
                ))}
              </select>
              <select
                className="form-control class"
                value={this.state.search.class}
                onChange={this.handleChange}
                name="class">
                <option className="default" value="default" hidden>
                  Select class
                </option>
                {['Assassin', 'Amazon', 'Druid', 'Barbarian', 'Sorceress', 'Paladin', 'Necromancer'].map((race, i) => (
                  <option key={i} value={race}>
                    {race}
                  </option>
                ))}
              </select>
            </div>

            <div className="sort">
              {['Name', 'Level', 'Title', 'Mod', 'Rating'].map((sKey, i) => (
                <button
                  key={i}
                  className={`btn ${sortOption && sortKey === sKey && 'active'}`}
                  onClick={() => this.handleSort(sKey)}>
                  {sKey}
                  {sortOption &&
                    sortKey === sKey && (
                      <span>
                        &nbsp;<i className={`fa fa-sort-${sortOption.toLowerCase()}`} />
                      </span>
                    )}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row d2-character-list">
          {sortedCharacters.map(character => (
<<<<<<< HEAD
            <LeftPngCardTrans
=======
            <LeftImageCardTrans
>>>>>>> 752683a55f60625610abd7a6842170bf47787fd4
              key={character._id}
              col={4}
              imgUrl={`/images/icons/d2${character.Class.toLowerCase()}.gif`}>
              <div className="d2-character-card">
                <div className="name">
                  <span className="title">{character.Title}</span>&nbsp;{character.Name}
                </div>
                <div className="rating">
                  <StarRating name={character.Name} value={character.Rating} />
                </div>
                <div className="level">Level : {character.Level}</div>
                <ul className="overview">{character.Overview.map((text, i) => <li key={i}>{text}</li>)}</ul>
                <div className="mod">Mod : {this.getCharacterMod(character.ModId)}</div>
                <div className="feature">
                  <a
                    className="btn"
<<<<<<< HEAD
                    href={`${character.FileUrl}`}
=======
                    href={`${character.FileUrl.replace('./public', window.appConfig.API_HOST)}`}
>>>>>>> 752683a55f60625610abd7a6842170bf47787fd4
                    download>
                    <i className="fa fa-download" />
                  </a>
                  <button
                    className="btn"
                    onClick={() => {
                      onSetFocusCharacter(character._id);
                      openModal('EditDiabloIICharacter');
                    }}>
                    <i className="fa fa-pencil" />
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      onSetFocusCharacter(character._id);
                      openModal('DeleteDiabloIICharacter');
                    }}>
                    <i className="fa fa-times" />
                  </button>
                </div>
              </div>
<<<<<<< HEAD
            </LeftPngCardTrans>
=======
            </LeftImageCardTrans>
>>>>>>> 752683a55f60625610abd7a6842170bf47787fd4
          ))}
        </div>
      </div>
    );
  }
}

export default Characters;
