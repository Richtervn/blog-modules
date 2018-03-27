import './CharacterForm.css';
import React, { Component } from 'react';
import { unixTime } from 'helpers';
import { characterList, mapList } from '../../Darksteam97d99i.module';

const initialValue = {
  AccountID: '',
  Name: '',
  cLevel: 1,
  LevelUpPoint: 0,
  Class: '0',
  Strength: 0,
  Dexterity: 0,
  Vitality: 0,
  Energy: 0,
  Money: 0,
  MapNumber: 0,
  MapPosX: 0,
  MapPosY: 0,
  CtlCode: 0,
  Resets: 0,
  GrandResets: 0,
  IsMarried: false,
  MarryName: '',
  QuestNumber: 0,
  QuestMonsters: 0,
  SkyEventWins: 0,
  IsVip: false,
  VipExpirationTime: ''
};

class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: initialValue };
    this.handleChange = this.handleChange.bind(this);
    this.initStateValue = this.initStateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initStateValue(character) {
    return {
      AccountID: character.AccountID || '',
      Name: character.Name || '',
      cLevel: character.cLevel || 1,
      LevelUpPoint: character.LevelUpPoint || 0,
      Class: character.Class || '0',
      Strength: character.Strength || 0,
      Dexterity: character.Dexterity || 0,
      Vitality: character.Vitality || 0,
      Energy: character.Energy || 0,
      Money: character.Money || 0,
      MapNumber: character.MapNumber || 0,
      MapPosX: character.MapPosX || 0,
      MapPosY: character.MapPosY || 0,
      CtlCode: character.CtlCode || 0,
      Resets: character.Resets || 0,
      GrandResets: character.GrandResets || 0,
      IsMarried: character.IsMarried === '1' ? true : false,
      MarryName: character.MarryName || '',
      QuestNumber: character.QuestNumber || 0,
      QuestMonsters: character.QuestMonsters || 0,
      SkyEventWins: character.SkyEventWins || 0,
      IsVip: character.IsVip === '1' ? true : false,
      VipExpirationTime: character.VipExpirationTime ? unixTime.toInputDate(character.VipExpirationTime) : ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.character.Name !== this.props.character.Name) {
      this.setState({ value: this.initStateValue(nextProps.character) });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextStateValue = { ...this.state.value };
    switch (name) {
      case 'IsMarried':
        nextStateValue[name] = !this.state.value[name];
        break;
      case 'IsVip':
        nextStateValue[name] = !this.state.value[name];
        break;
      default:
        nextStateValue[name] = value;
        break;
    }
    this.setState({ value: nextStateValue });
  }

  handleSubmit() {
    const { character, onEdit, onAdd } = this.props;
    const formBody = { ...this.state.value };
    if (this.state.value.VipExpirationTime) {
      formBody.VipExpirationTime = unixTime.toOutputDate(formBody.VipExpirationTime);
    }
    if (character.Name) {
      onEdit(formBody);
    } else {
      onAdd(formBody);
      this.setState({ value: this.initStateValue({}) });
    }
  }

  render() {
    const { character, onDelete } = this.props;

    return (
      <div id="ds9799-character-form">
        <div className="input-wrapper">
          <b>Account :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.AccountID}
            disabled
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Name :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.Name}
            name="Name"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Class :</b>
          <select className="form-control" onChange={this.handleChange} value={this.state.value.Class} name="Class">
            {Object.keys(characterList).map(charClass => (
              <option key={charClass} value={characterList[charClass]}>
                {charClass}
              </option>
            ))}
          </select>
        </div>
        <div className="input-wrapper">
          <b>Level :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.cLevel}
            name="cLevel"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Level Up Points :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.LevelUpPoint}
            name="LevelUpPoint"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Strength :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.Strength}
            name="Strength"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Agility :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.Dexterity}
            name="Dexterity"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Vitality :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.Vitality}
            name="Vitality"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Energy :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.Energy}
            name="Energy"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Map :</b>
          <select
            className="form-control"
            onChange={this.handleChange}
            value={this.state.value.MapNumber}
            name="MapNumber">
            {Object.keys(mapList).map(mapName => (
              <option key={mapName} value={mapList[mapName]}>
                {mapName}
              </option>
            ))}
          </select>
        </div>
        <div className="input-wrapper">
          <b>Map Position X :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.MapPosX}
            name="MapPosX"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Map Position Y :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.MapPosY}
            name="MapPosY"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Resets :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.Resets}
            name="Resets"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Grand Resets :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.GrandResets}
            name="GrandResets"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Control Code :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.CtlCode}
            name="CtlCode"
            onChange={this.handleChange}
          />
        </div>

        <div className="input-wrapper">
          <div className="form-inline">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={this.state.value.IsMarried === 1 || this.state.value.IsMarried === true}
                  name="IsMarried"
                  onChange={this.handleChange}
                />
                <b>Is Married</b>
              </label>
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <b>Marry Name :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.MarryName}
            name="MarryName"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Money :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.Money}
            name="Money"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Quest Number :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.QuestNumber}
            name="QuestNumber"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Quest Monsters :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.QuestMonsters}
            name="QuestMonsters"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Sky Event Wins :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.SkyEventWins}
            name="SkyEventWins"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="form-inline">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={this.state.value.IsVip === 1 || this.state.value.IsVip === true}
                  name="IsVip"
                  onChange={this.handleChange}
                />
                <b>Is Vip</b>
              </label>
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <b>Vip Expiration Time :</b>
          <input
            className="form-control"
            type="date"
            value={this.state.value.VipExpirationTime}
            name="VipExpirationTime"
            onChange={this.handleChange}
          />
        </div>

        <div className="feature">
          <div className="btn btn-primary" onClick={() => this.handleSubmit()}>
            Submit
          </div>
          {this.state.value.Name && (
            <div className="btn btn-warning" onClick={() => this.setState({ value: this.initStateValue(character) })}>
              Undo
            </div>
          )}
          <div
            className="btn btn-danger"
            onClick={() => {
              if (this.state.value.Name) {
                onDelete(this.state.value.Name);
              } else {
                this.setState({ value: this.initStateValue(initialValue) });
              }
            }}>
            {this.state.value.Name ? 'Delete' : 'Clear'}
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterForm;
