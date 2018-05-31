import './CraftDs9799Item.css';
import React, { Component } from 'react';

import { getItemImage } from 'helpers/mu';
import { formatNumber } from 'helpers';

import { ModalHeader } from 'components/Modal';
import { CharacterCard } from '../../../components';
import { ModalLoader } from 'common/Loaders';

class CraftDs9799Item extends Component {
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

  renderMaterials(characterName) {
    const { countMaterials, receipt } = this.props;
    if (!countMaterials[receipt.id]) {
      return null;
    }
    return (
      <div className="materials">
        {receipt.materials.map(material => (
          <div className="material" key={material.id}>
            {countMaterials[receipt.id][characterName][material.name]} x&nbsp;
            <img src={getItemImage(material.category, material.itemId, material.level)} alt={material.name} />&nbsp;
            {material.name}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { receipt, characters, onCraftItem } = this.props;

    return [
      <ModalHeader iconUrl="/images/icons/mulogo.png" label={receipt.name} key="bws_h" />,
      <div key="bws_b" className="modal-body">
        {!characters && <ModalLoader />}
        <div className="ds9799-ci alert alert-info">
          <span>
            <i className="fa fa-info-circle fa-2x" />
          </span>
          <div>
            Craft will cost you <strong>{formatNumber(receipt.charge_price)}</strong> Credits. Select character to take{' '}
            <strong>{receipt.name}</strong>
          </div>
        </div>
        {characters && (
          <div className="ds9799-ci character-list">
            {characters.map(character => (
              <CharacterCard
                key={character.Name}
                character={character}
                isActive={character.Name === this.state.selectedCharacter}
                onClick={() => this.setState({ selectedCharacter: character.Name })}
                nameOnly>
                {this.renderMaterials(character.Name)}
              </CharacterCard>
            ))}
          </div>
        )}
        <div className="ds9799-ci alert alert-warning">
          <span>
            <i className="fa fa-exclamation-triangle fa-2x" />
          </span>&nbsp;&nbsp;Clean your Inventory before buying any package!
        </div>
      </div>,
      <div key="bws_f" className="modal-footer">
        <div className="ds9799-ci-mf">
          <button className="btn btn-success" onClick={() => onCraftItem(this.state.selectedCharacter, receipt.id)}>
            Craft : {formatNumber(receipt.charge_price)} Credits
          </button>
          <button className="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
        </div>
      </div>
    ];
  }
}

export default CraftDs9799Item;
