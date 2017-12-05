import React, { Component } from 'react';
import { defineItemImage } from 'utilities';

const initState = (countMaterials, characters, receipt) => {};

class ModalCraftItem extends Component {
  constructor(props) {
    super(props);
    this.state = { focusCharacter: { Name: '' }, error: null };
    this.handleSelectCharacter = this.handleSelectCharacter.bind(this);
    this.handleCraft = this.handleCraft.bind(this);
  }

  handleSelectCharacter(character) {
    const { countMaterials, receipt } = this.props;
    const checked = [];
    receipt.materials.map(material => {
      if (material.count == countMaterials[character.Name][material.name]) {
        checked.push('check');
      }
    });
    if (checked.length == receipt.materials.length) {
      this.setState({ focusCharacter: character, error: null });
    } else {
      this.setState({
        error: `${character.Name} doesn't have enough materials`,
        focusCharacter: null
      });
    }
  }

  handleCraft(e) {
    e.preventDefault();
    if (this.state.focusCharacter.Name) {
      this.props.onCraft(this.state.focusCharacter.Name, this.props.receipt.id);
    } else {
      this.setState({ error: 'Select a character with enough materials' });
    }
  }

  render() {
    const { receipt, countMaterials, characters } = this.props;

    return (
      <div className="modal fade" id="craftDs9799BlacksmithModal" style={{ color: 'black' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img
                className="ds9799-modal-lx-icon"
                src={receipt.image_url.replace('./public', 'http://localhost:3000')}
              />
              <strong>{`Craft ${receipt.name}`}</strong>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container center-flex flex-center-both">
                {this.state.error && (
                  <div className="alert alert-danger flex-center-both">
                    <span>
                      <i className="fa fa-exclamation-circle fa-2x" />
                    </span>&nbsp;&nbsp;{`${this.state.error}`}
                  </div>
                )}
                {characters.map(character => (
                  <div
                    className="ds9799-character-bs-card"
                    style={
                      this.state.focusCharacter.Name == character.Name
                        ? { backgroundColor: '#366d4e' }
                        : {}
                    }
                    key={character.Name}
                    onClick={() => this.handleSelectCharacter(character)}>
                    <div className="row no-row-margin">
                      <div className="col-4 no-col-margin">
                        <img
                          src={`/app_modules/images/muonline/character/${character.Class}.png`}
                          className="ds9799-character-card-icon"
                        />
                      </div>
                      <div className="col-8 no-col-margin">
                        <h5>
                          {character.Name}
                          {character.IsVip == 1 && (
                            <span>
                              <img
                                src={`/app_modules/images/icons/vip.png`}
                                className="pull-right"
                                style={{ width: '20px', height: '20px' }}
                              />
                            </span>
                          )}
                        </h5>
                        {receipt.materials.map(material => (
                          <div key={material.id}>
                            {`${countMaterials[character.Name]
                              ? countMaterials[character.Name][material.name]
                              : 0} x `}
                            <img
                              src={defineItemImage(
                                material.category,
                                material.itemId,
                                material.level
                              )}
                            />&nbsp;
                            {material.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={e => this.handleCraft(e)}>
                Craft
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

export default ModalCraftItem;
