import './Characters.css';
import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';

import { PageLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import { AddCardButton, AdminButtons } from 'components/Buttons';

class Characters extends Component {
  componentWillMount() {
    const { characters, onGetCharacters } = this.props;
    if (!characters) {
      onGetCharacters();
    }
  }

  render() {
    const { characters, onSetFocusCharacter } = this.props;
    if (!characters) {
      return (
        <div className="row">
          <PageLoader />
        </div>
      );
    }
    return (
      <div className="row mu-list-row">
        {characters.map(character => (
          <div className="col-3" key={character._id}>
            <div className="row">
              <div className="mu-character-card">
                <div className="overlay">
                  <AdminButtons
                    customClass="mu-character-card-feature"
                    onClickEdit={() => {
                      onSetFocusCharacter(character._id);
                      openModal('EditMuOnlineCharacter');
                    }}
                    onClickDelete={() => {
                      onSetFocusCharacter(character._id);
                      openModal('DeleteMuOnlineCharacter');
                    }}
                  />
                  <div className="name">{character.Name}</div>
                  <div className="class">({character.Class})</div>
                  <div className="rating">
                    <StarRating value={character.Rating} name={character.Name} />
                  </div>
                  <div className="resets">
                    <div className="reset">
                      <b>Resets: </b>
                      {character.Reset}
                    </div>
                    <div className="reset">
                      <b>Grand Resets: </b>
                      {character.GrandReset}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="stat">
                      <b>STR: </b>
                      {character.Strength}
                    </div>
                    <div className="stat">
                      <b>AGI: </b>
                      {character.Agility}
                    </div>
                    <div className="stat">
                      <b>VIT: </b>
                      {character.Vitality}
                    </div>
                    <div className="stat">
                      <b>ENE: </b>
                      {character.Energy}
                    </div>
                    <div className="stat">
                      <b>CMD: </b>
                      {character.Command || 0}
                    </div>
                  </div>
                  <div className="rs-btn">
                    <button className="btn btn-danger">Restore</button>
                  </div>
                  <div className="version">
                    <b>Version: </b>
                    {character.Version}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <AddCardButton col={3} minHeight={188} onClick={() => openModal('AddMuOnlineCharacter')} />
      </div>
    );
  }
}

export default Characters;
