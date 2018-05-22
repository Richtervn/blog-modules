import './CharacterDetail.css';
import React, { Component } from 'react';
import { getMuClass } from 'helpers';

class CharacterDetail extends Component {
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
    const { character } = this.props;

    if (!character) {
      return <div>No Character</div>;
    }

    const charClass = getMuClass(character.Class);

    return (
      <div id="ds9799-character-detail">
        <div id="ds9799-character-detail-card">
          <div className="header">
            <div className="name">{character.Name}</div>
          </div>
          <div className="content">
            <div className="level">{`Level ${character.cLevel} ${charClass}`}</div>
            <div className="level-up-points">{`Level Up Points : ${character.LevelUpPoint}`}</div>

            <div className="stats">
              <div className="stat">Strength : {character.Strength}</div>
              <div className="stat-input">
                <input
                  type="number"
                  className="form-control"
                  name="Strength"
                  onChange={this.handleChange}
                  value={this.state.Strength}
                />
                <i className="fa fa-plus-square" onClick={() => this.addPoint('Strength')} />
              </div>
            </div>

            <div className="stats">
              <div className="stat">Agility : {character.Dexterity}</div>
              <div className="stat-input">
                <input
                  type="number"
                  className="form-control"
                  name="Dexterity"
                  onChange={this.handleChange}
                  value={this.state.Dexterity}
                />
                <i className="fa fa-plus-square ds9799-character-button" onClick={() => this.addPoint('Dexterity')} />
              </div>
            </div>

            <div className="stats">
              <div className="stat">Vitality : {character.Vitality}</div>

              <div className="stat-input">
                <input
                  type="number"
                  className="form-control"
                  name="Vitality"
                  onChange={this.handleChange}
                  value={this.state.Vitality}
                />
                <i className="fa fa-plus-square" onClick={() => this.addPoint('Vitality')} />
              </div>
            </div>

            <div className="stats">
              <div className="stat">Energy : {character.Energy}</div>
              <div className="stat-input">
                <input
                  type="number"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.Energy}
                  name="Energy"
                />
                <i className="fa fa-plus-square" onClick={() => this.addPoint('Energy')} />
              </div>
            </div>

            <div className="zen">{`Zen : ${character.Money.toLocaleString()}`}</div>
            <div className="resets">{`Resets : ${character.Resets}`}</div>
            <div className="grand-resets">{`Grand Resets : ${character.GrandResets}`}</div>

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

            <div className="command-btns">
              <button className="btn btn-danger btn-block" onClick={() => this.reset()}>
                Reset
              </button>
              <button className="btn btn-danger btn-block" onClick={() => this.grandReset()}>
                Grand Reset
              </button>
              <button className="btn btn-danger btn-block" onClick={() => this.resetQuest()}>
                Reset Quest
              </button>
              <button className="btn btn-danger btn-block" onClick={() => this.reset()}>
                Change Name
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
