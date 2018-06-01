import _ from 'underscore';
import './QuestsEditor.css';
import React, { Component } from 'react';

import { MonsterSelector, ItemSelector, BasicItemOptions, ExcItemOptions, MapSelector } from '../../components';

const optLevel = [0, 1, 2, 3, 4, 5, 6, 7];
const itemLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

class QuestEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPlvl: 1,
      minPrs: 0,
      minPgrs: 0,
      monId: 0,
      mapId: 0,
      monAmount: 0,
      questInfo: '',
      questRequire: '-',
      questReward: '',
      isRequireItem: false,
      reqCategory: 'Swords',
      reqItemId: 0,
      reqItemLvl: 0,
      reqItemOptLvl: 0,
      reqItemAmount: 0,
      rewCategory: 'Swords',
      rewItemId: 0,
      rewItemLuck: false,
      rewItemSkill: false,
      rewItemLvl: 0,
      rewItemOptLvl: 0,
      rewItemExc: {
        exc1: false,
        exc2: false,
        exc3: false,
        exc4: false,
        exc5: false,
        exc6: false
      },
      rewZen: 0,
      rewPoints: 0,
      rewExp: 0,
      rewLevels: 0,
      rewCredits: 0,
      rewItemAmount: 0,
      quest: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeCheck = this.changeCheck.bind(this);

    this.changeRewCheck = this.changeRewCheck.bind(this);
    this.changeRewLevel = this.changeRewLevel.bind(this);
    this.changeRewExc = this.changeRewExc.bind(this);
    this.generate = this.generate.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  changeCheck(name) {
    this.setState({ [name]: !this.state[name] });
  }

  changeRewCheck(type) {
    if (type === 'luck') this.setState({ rewItemLuck: !this.state.rewItemLuck });
    if (type === 'skill') this.setState({ rewItemSkill: !this.state.rewItemSkill });
  }

  changeRewLevel(e) {
    const { name, value } = e.target;
    if (name === 'option') this.setState({ rewItemOptLvl: value });
    if (name === 'level') this.setState({ rewItemLvl: value });
  }

  changeRewExc(type) {
    const nextState = { ...this.state };
    nextState.rewItemExc[type] = !this.state.rewItemExc[type];
    this.setState(nextState);
  }

  generate() {
    const { data } = this.props;
    const {
      minPlvl,
      minPrs,
      minPgrs,
      monId,
      mapId,
      monAmount,
      questInfo,
      questRequire,
      questReward,
      isRequireItem,
      reqCategory,
      reqItemId,
      reqItemLvl,
      reqItemAmount,
      rewCategory,
      rewItemId,
      rewItemLvl,
      rewItemSkill,
      rewItemLuck,
      rewItemOptLvl,
      rewItemExc,
      rewItemAmount,
      rewZen,
      rewPoints,
      rewExp,
      rewLevels,
      rewCredits
    } = this.state;
    let questStr = `${minPlvl}  ${minPrs}  ${minPgrs}  ${monId}  ${mapId}  `;
    questStr += `${monAmount}  "${questInfo}"  "${questRequire}"  "${questReward}"  `;
    questStr += isRequireItem ? '1  ' : '0  ';
    const reqItemGroup = _.findWhere(data.Categories, { Name: reqCategory });
    questStr += `${reqItemGroup._id}  ${reqItemId}  ${reqItemLvl}  ${reqItemAmount}  `;
    const rewItemGroup = _.findWhere(data.Categories, { Name: rewCategory });
    questStr += `${rewItemGroup._id}  ${rewItemId} ${rewItemLvl}  `;
    questStr += rewItemSkill ? '1  ' : '0  ';
    questStr += rewItemLuck ? '1  ' : '0  ';
    questStr += `${rewItemOptLvl}  `;
    let excOpt = 0;
    const { exc1, exc2, exc3, exc4, exc5, exc6 } = rewItemExc;
    if (exc1) excOpt += 1;
    if (exc2) excOpt += 2;
    if (exc3) excOpt += 4;
    if (exc4) excOpt += 8;
    if (exc5) excOpt += 16;
    if (exc6) excOpt += 32;
    questStr += `${excOpt}  ${rewItemAmount}  ${rewZen}  ${rewPoints}  ${rewExp}  ${rewLevels}  ${rewCredits}`;

    const nextState = { ...this.state };
    nextState.quest.push(questStr);
    this.setState(nextState);
  }

  render() {
    const {
      monId,
      isRequireItem,
      reqCategory,
      reqItemId,
      reqItemLvl,
      reqItemOptLvl,
      rewCategory,
      rewItemId,
      rewItemLuck,
      rewItemSkill,
      rewItemLvl,
      rewItemOptLvl,
      rewItemExc,
      quest
    } = this.state;

    return (
      <div id="ds9799-quests-editor">
        <div className="quest-col-I">
          <input
            className="form-control"
            type="number"
            onChange={this.handleChange}
            name="minPlvl"
            placeholder="Min player level"
          />
          <input
            className="form-control"
            type="number"
            onChange={this.handleChange}
            name="minPrs"
            placeholder="Min player resets"
          />
          <input
            className="form-control"
            type="number"
            onChange={this.handleChange}
            name="minPgrs"
            placeholder="Min player grand resets"
          />
          <MonsterSelector monId={monId} onSelect={e => this.setState({ monId: e.target.value })} />
          <MapSelector simple onSelect={e => this.setState({ mapId: e.target.value })} />
          <input
            className="form-control"
            type="number"
            onChange={this.handleChange}
            name="monAmount"
            placeholder="Monsters to be killed"
          />
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            name="questInfo"
            placeholder="Quest's information"
          />
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            name="questRequire"
            placeholder="Quest's requirement description"
          />
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            name="questReward"
            placeholder="Quest's reward description"
          />
          <button className="btn btn-block btn-danger " onClick={() => this.generate()}>
            Generate
          </button>
        </div>
        <div className="quest-col-II">
          <label className="check-label">
            <input
              type="checkbox"
              className="check-input"
              onChange={() => this.changeCheck('isRequireItem')}
              checked={isRequireItem}
            />
            &nbsp;Required Item ?&nbsp;
          </label>
          <ItemSelector
            category={reqCategory}
            itemId={reqItemId}
            onSelectCategory={e => this.setState({ reqCategory: e.target.value })}
            onSelectItem={e => this.setState({ reqItemId: e.target.value })}
            itemLvl={reqItemLvl}
          />
          <div className="item-lvl-opt">
            <div className="form-select">
              <label>Item Level :</label>
              <select
                className="form-control"
                name="level"
                onChange={e => this.setState({ reqItemLvl: e.target.value })}
                defaultValue={reqItemLvl}>
                {itemLevel.map((lvl, i) => (
                  <option value={lvl} key={i}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-select" style={{ marginLeft: '10px' }}>
              <label>Opt Level :</label>
              <select
                className="form-control"
                name="option"
                onChange={e => this.setState({ reqItemOptLvl: e.target.value })}
                defaultValue={reqItemOptLvl}>
                {optLevel.map((lvl, i) => (
                  <option value={lvl} key={i}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-wrapper">
            <input
              className="form-control"
              type="number"
              onChange={this.handleChange}
              name="reqItemAmount"
              placeholder="Required Item Amount"
            />
            <input
              className="form-control"
              type="number"
              onChange={this.handleChange}
              name="rewZen"
              placeholder="Reward Zen Amount"
            />
            <input
              className="form-control"
              type="number"
              onChange={this.handleChange}
              name="rewPoints"
              placeholder="Reward Points"
            />
            <input
              className="form-control"
              type="number"
              onChange={this.handleChange}
              name="rewExp"
              placeholder="Reward Experience"
            />
            <input
              className="form-control"
              type="number"
              onChange={this.handleChange}
              name="rewLevels"
              placeholder="Reward Levels"
            />
            <input
              className="form-control"
              type="number"
              onChange={this.handleChange}
              name="rewCredits"
              placeholder="Reward Credits"
            />
            <input
              className="form-control"
              type="number"
              onChange={this.handleChange}
              name="rewItemAmount"
              placeholder="Reward Item Count"
            />
          </div>
          <button className="btn btn-block btn-warning " onClick={() => this.setState({ quest: [] })}>
            Clear generated quests
          </button>
        </div>
        <div className="quest-col-III">
          <ItemSelector
            category={rewCategory}
            itemId={rewItemId}
            onSelectCategory={e => this.setState({ rewCategory: e.target.value })}
            onSelectItem={e => this.setState({ rewItemId: e.target.value })}
            itemLvl={rewItemLvl}
          />
          <BasicItemOptions
            luck={rewItemLuck}
            skill={rewItemSkill}
            onChangeCheck={type => this.changeRewCheck(type)}
            option={rewItemOptLvl}
            level={rewItemLvl}
            onChangeLevel={this.changeRewLevel}
          />
          <ExcItemOptions
            category={rewCategory}
            exc={rewItemExc}
            itemId={rewItemExc}
            onChangeCheck={this.changeRewExc}
          />
          <div className="ds9799-quest-box">{quest.map((q, i) => <div key={i}>{q}</div>)}</div>
        </div>
      </div>
    );
  }
}

export default QuestEditor;
