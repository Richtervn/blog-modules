import React, { Component } from 'react';
import CharacterCard from '../CharacterManager/CharacterCard';

class BuyConsumableModal extends Component {
  constructor(props) {
    super(props);
    this.state = { focusCharacter: {} };
    this.handleSelectCharacter = this.handleSelectCharacter.bind(this);
  }

  handleSelectCharacter(character) {
    this.stateState({ focusCharacter: character });
  }

  handleBuy() {
    const { consumable, onBuyConsumable, memb___id } = this.props;
    onBuyConsumable({
      consumableId: consumable.id,
      memb___id: memb___id,
      characterName: this.state.focusCharacter.Name
    });
  }

  render() {
    const { consumable, characters, onBuyConsumable } = this.props;

    return (
      <div className="modal fade" id="buyDs9799LuxuryConsumableModal" style={{ color: 'black' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img
                className="ds9799-modal-lx-icon"
                src={consumable.image_url.replace('./public', 'http://localhost:3000')}
              />
              <strong>{`Buy ${consumable.name}`}</strong>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container center-flex flex-center-both">
                <div className="alert alert-info">
                  <span>
                    <i className="fa fa-info-circle fa-2x" />
                  </span>&nbsp;&nbsp;{`Select character to buy ${consumable.name}`}
                </div>
                <div style={{ width: '330px' }}>
                  {characters.map((character, i) => (
                    <CharacterCard
                      key={i}
                      character={character}
                      isFocus={character.Name == this.state.focusCharacter.Name}
                      onSelect={this.handleSelectCharacter}
                    />
                  ))}
                </div>
                <div className="alert alert-warning flex-center-both">
                  <span>
                    <i className="fa fa-exclamation-triangle fa-2x" />
                  </span>&nbsp;&nbsp;Clean your Inventory before buying any package!
                </div>
              </div>
              <div />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleBuy}
                data-dismiss="modal">
                Submit
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyConsumableModal;
