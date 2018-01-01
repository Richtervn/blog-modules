import React, { Component } from 'react';
import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';
import StarRating from 'react-star-rating-component';

const $ = window.$;

const getIcon = charClass => {
  switch (charClass) {
    case 'Assassin':
      return '/app_modules/images/icons/d2assassin.gif';
    case 'Amazon':
      return '/app_modules/images/icons/d2amazon.gif';
    case 'Druid':
      return '/app_modules/images/icons/d2druid.jpg';
    case 'Barbarian':
      return '/app_modules/images/icons/d2barbarian.gif';
    case 'Sorceress':
      return '/app_modules/images/icons/d2sorceress.gif';
    case 'Paladin':
      return '/app_modules/images/icons/d2paladin.gif';
    case 'Necromancer':
      return '/app_modules/images/icons/d2necromancer.gif';
    default:
      return '/app_modules/images/icons/d2druid.jpg';
  }
};

class CharactersScreen extends Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentWillMount() {
    const { characters, onGetCharacters, onGetMods } = this.props;
    if (!characters) {
      onGetCharacters();
    }
    onGetMods();
  }

  handleEditClick(character) {
    this.props.onSetFocusCharacter(character);
    $('#editD2CharacterModal').modal('show');
  }

  handleDeleteClick(character) {
    this.props.onSetFocusCharacter(character);
    $('#deleteD2CharacterModal').modal('show');
  }

  render() {
    const {
      mods,
      characters,
      addFormState,
      editFormState,
      onAddCharacter,
      onEditCharacter,
      onDeleteCharacter,
      focusCharacter
    } = this.props;

    if (!characters) {
      return null;
    }

    return (
      <div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
        {characters.map(character => (
          <div key={character._id} className="col-4 no-col-margin">
            <div className="d2-ss-card" style={{ padding: '5px', height: '215px', marginBottom: '10px' }}>
              <div>
                <img src={getIcon(character.Class)} style={{ width: '100px', height: '205px' }} />
              </div>
              <div className="text-center" style={{ width: '100%' }}>
                <b>
                  <span style={{ color: '#856404' }}>{character.Title}</span>&nbsp;{character.Name}
                </b>
                <div className="ygo-mod-card-rating">
                  <StarRating
                    name={`d2char-${character._id}-rating`}
                    editing={false}
                    value={parseInt(character.Rating)}
                  />
                </div>
                <b>Level : {character.Level}</b>
                <div className="text-left" style={{ padding: '5px' }}>
                  {character.Overview.map((text, i) => <div key={i}>{text}</div>)}
                </div>
                <div style={{ paddingTop: '5px' }}>
                  <b>Mod : {mods.filter(mod => mod._id == character.ModId)[0].Name}</b>
                </div>
              </div>
              <div className="d2-ss-card-feature">
                <div className="d2-ss-feature-btn" onClick={() => this.handleEditClick(character)}>
                  <i className="fa fa-pencil" />
                </div>
                <div className="d2-ss-feature-btn" onClick={() => this.handleDeleteClick(character)}>
                  <i className="fa fa-times" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-4 no-col-margin">
          <div
            className="d2-ss-add-card"
            data-toggle="modal"
            data-target="#addD2CharacterModal"
            style={{ height: '215px' }}>
            <i className="fa fa-plus-circle" />
          </div>
        </div>
        <FormModal id="addD2CharacterModal" formBody={addFormState} onSubmit={(id, body) => onAddCharacter(body)} />
        <FormModal id="editD2CharacterModal" formBody={editFormState} onSubmit={(id, body) => onEditCharacter(body)} />
        <DeleteModal
          id="deleteD2CharacterModal"
          onSubmit={() => onDeleteCharacter(focusCharacter._id)}
          text={`Are you sure want to delete ${focusCharacter.Name} ?`}
        />
      </div>
    );
  }
}

export default CharactersScreen;
