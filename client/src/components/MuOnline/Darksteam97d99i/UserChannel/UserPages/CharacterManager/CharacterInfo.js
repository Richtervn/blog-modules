import React, { Component } from 'react';
import decodeMuClass from 'factories/decodeMuClass';
import ErrorModal from 'components/ErrorModal';

const $ = window.$;

export default class CharacterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUseBank: false,
      Strength: 0,
      Vitality: 0,
      Dexterity: 0,
      Energy: 0
    };
    this.addPoint = this.addPoint.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.grandReset = this.grandReset.bind(this);
    this.resetQuest = this.resetQuest.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextState = { ...this.state };
    switch (name) {
      case 'isUseBank':
        nextState.isUseBank = !this.state.isUseBank;
        break;
      default:
        nextState[name] = value;
        break;
    }
    this.setState(nextState);
  }

  addPoint(type) {
    const query = {
      name: this.props.character.Name,
      point: this.state[type],
      isUseBank: this.state.isUseBank,
      type: type
    };
    this.props.onAddPoint(query);
  }

  reset() {
    const query = {
      name: this.props.character.Name,
      isUseBank: this.state.isUseBank
    };
    this.props.onReset(query);
  }

  grandReset() {
    const query = {
      name: this.props.character.Name,
      isUseBank: this.state.isUseBank
    };
    this.props.onGrandReset(query);
  }

  resetQuest() {
    const query = {
      name: this.props.character.Name,
      isUseBank: this.state.isUseBank
    };
    this.props.onResetQuest(query);
  }

  render() {
    const {
      character,
      errorAddPoint,
      onClearAddPointError,
      errorReset,
      onClearResetError,
      errorResetQuest,
      onClearResetQuestError,
      errorGrandReset,
      onClearGrandResetError
    } = this.props;
    const charClass = decodeMuClass(character.Class);

    if (errorAddPoint) {
      $('#darksteam97d99iAddPointErr').modal('show');
      $('#darksteam97d99iAddPointErr').on('hide.bs.modal', onClearAddPointError);
    }

    if (errorReset) {
      $('#darksteam97d99iResetErr').modal('show');
      $('#darksteam97d99iResetErr').on('hide.bs.modal', onClearResetError);
    }

    if (errorGrandReset) {
      $('#darksteam97d99iGrandResetErr').modal('show');
      $('#darksteam97d99iGrandResetErr').on('hide.bs.modal', onClearGrandResetError);
    }

    if (errorResetQuest) {
      $('#darksteam97d99iResetQuestErr').modal('show');
      $('#darksteam97d99iResetQuestErr').on('hide.bs.modal', onClearResetQuestError);
    }

    return (
      <div className="ds9799-character-info">
        <div className="ds9799-user-card-header text-center">
          <h4>{character.Name}</h4>
        </div>
        <div className="ds9799-character-info-content">
          <div className="ds9799-character-info-box text-center">{`Level ${character.cLevel} ${charClass}`}</div>
          <div className="ds9799-character-info-box text-center">{`Level Up Points : ${character.LevelUpPoint}`}</div>

          <div className="row no-row-margin">
            <div className="col-8 no-col-margin">
              <div className="ds9799-character-info-box text-center">Strength : {character.Strength}</div>
            </div>
            <div className="col-4 no-col-margin">
              <div className="ds9799-character-input-group">
                <input
                  type="number"
                  className="form-control"
                  name="Strength"
                  onChange={this.handleChange}
                  value={this.state.Strength}
                />
                <span>
                  <i
                    className="fa fa-plus-square ds9799-character-button"
                    onClick={() => this.addPoint('Strength')}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="row no-row-margin">
            <div className="col-8 no-col-margin">
              <div className="ds9799-character-info-box text-center">Agility : {character.Dexterity}</div>
            </div>
            <div className="col-4 no-col-margin">
              <div className="ds9799-character-input-group">
                <input
                  type="number"
                  className="form-control"
                  name="Dexterity"
                  onChange={this.handleChange}
                  value={this.state.Dexterity}
                />
                <span>
                  <i
                    className="fa fa-plus-square ds9799-character-button"
                    onClick={() => this.addPoint('Dexterity')}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="row no-row-margin">
            <div className="col-8 no-col-margin">
              <div className="ds9799-character-info-box text-center">Vitality : {character.Vitality}</div>
            </div>
            <div className="col-4 no-col-margin">
              <div className="ds9799-character-input-group">
                <input
                  type="number"
                  className="form-control"
                  name="Vitality"
                  onChange={this.handleChange}
                  value={this.state.Vitality}
                />
                <span>
                  <i
                    className="fa fa-plus-square ds9799-character-button"
                    onClick={() => this.addPoint('Vitality')}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="row no-row-margin">
            <div className="col-8 no-col-margin">
              <div className="ds9799-character-info-box text-center">Energy : {character.Energy}</div>
            </div>
            <div className="col-4 no-col-margin">
              <div className="ds9799-character-input-group">
                <input
                  type="number"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.Energy}
                  name="Energy"
                />
                <span>
                  <i
                    className="fa fa-plus-square ds9799-character-button"
                    onClick={() => this.addPoint('Energy')}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="ds9799-character-info-box text-center">{`Zen : ${character.Money}`}</div>
          <div className="ds9799-character-info-box text-center">{`Resets : ${character.Resets}`}</div>
          <div className="ds9799-character-info-box text-center">{`Grand Resets : ${character.GrandResets}`}</div>
          <div className="text-center">
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.handleChange}
                  name="isUseBank"
                  checked={this.state.isUseBank}
                />Pay by bank
              </label>
            </div>
          </div>
          <div className="ds9799-character-command-button">
            <button className="btn btn-danger btn-block" onClick={() => this.reset()}>
              Reset
            </button>
          </div>
          <div className="ds9799-character-command-button">
            <button className="btn btn-danger btn-block" onClick={() => this.grandReset()}>
              Grand Reset
            </button>
          </div>
          <div className="ds9799-character-command-button">
            <button className="btn btn-danger btn-block" onClick={() => this.resetQuest()}>
              Reset Quest
            </button>
          </div>
        </div>

        <ErrorModal id="darksteam97d99iAddPointErr" text={errorAddPoint} />
        <ErrorModal id="darksteam97d99iResetErr" text={errorReset} />
        <ErrorModal id="darksteam97d99iResetQuestErr" text={errorResetQuest} />
        <ErrorModal id="darksteam97d99iGrandResetErr" text={errorGrandReset} />
      </div>
    );
  }
}
