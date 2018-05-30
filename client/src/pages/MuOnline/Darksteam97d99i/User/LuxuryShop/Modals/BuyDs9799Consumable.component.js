import './BuyDs9799Consumable.css';
import React, { Component } from 'react';

import { ModalHeader } from 'components/Modal';
import { CharacterCard } from '../../../components';
import { ModalLoader } from 'common/Loaders';

class BuyDs9799Consumable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacter: ''
    };
  }

  componentWillMount() {
    const { characters, onGetCharacters, userId } = this.props;
    if (!characters) {
      onGetCharacters(userId);
    }
  }

  render() {
    const { consumable, characters, onBuyPackage, userId } = this.props;

    return [
      <ModalHeader iconUrl="/images/icons/mulogo.png" label={consumable.name} key="bws_h" />,
      <div key="bws_b" className="modal-body">
        {!characters && <ModalLoader />}
        <div className="ds9799-blc alert alert-info">
          <span>
            <i className="fa fa-info-circle fa-2x" />
          </span>&nbsp;&nbsp;{`Select character to take ${consumable.name}`}
        </div>
        {characters && (
          <div className="ds9799-blc character-list">
            {characters.map(character => (
              <CharacterCard
                key={character.Name}
                character={character}
                isActive={character.Name === this.state.selectedCharacter}
                onClick={() => this.setState({ selectedCharacter: character.Name })}
              />
            ))}
          </div>
        )}
        <div className="ds9799-blc alert alert-warning">
          <span>
            <i className="fa fa-exclamation-triangle fa-2x" />
          </span>&nbsp;&nbsp;Clean your Inventory before buying any package!
        </div>
      </div>,
      <div key="bws_f" className="modal-footer">
        <div className="ds9799-blc-mf">
          <button
            className="btn btn-primary"
            onClick={() =>
              onBuyPackage({
                consumableId: consumable.id,
                memb___id: userId,
                characterName: this.state.selectedCharacter
              })
            }>
            Buy
          </button>
          <button className="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
        </div>
      </div>
    ];
  }
}

export default BuyDs9799Consumable;
