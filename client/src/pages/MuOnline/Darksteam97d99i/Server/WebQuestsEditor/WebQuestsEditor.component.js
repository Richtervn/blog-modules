import './WebQuestsEditor.css';
import React, { Component } from 'react';

import { ContainerLoader } from 'common/Loaders';

class WebQuestsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quests: this.initQuestsState(this.props.webQuests),
      editing: false,
      editingIndex: null,
      editKey: ''
    };
  }

  initQuestsState(webQuests) {
    if (!webQuests) return null;
    return webQuests.slice(0);
  }

  add() {
    const quests = this.state.quests;
    quests.push({
      _id: `WQ${quests.length + 1}`,
      description: '',
      reward: 0,
      reward_unit: 'Credits',
      rules: '',
      isRepeatable: false,
      isJumpStep: false,
      type: 'Account',
      step: {
        reward: 0,
        requirement: 0
      }
    });
    this.setState({ quests });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.webQuests && nextProps.webQuests) {
      this.setState({ quests: this.initQuestsState(nextProps.webQuests) });
    }
  }

  componentWillMount() {
    const { webQuests, onGetWebQuests } = this.props;
    if (!webQuests) {
      onGetWebQuests();
    }
  }

  handleChangeCheck(e, i, key) {
    const quests = this.state.quests;
    quests[i][key] = !quests[i][key];
    this.setState({ quests });
  }

  handleChange(e, i, key) {
    const quests = this.state.quests;
    if (key === 'stepReward') {
      if (!quests[i].step) {
        quests[i].step = {};
      }
      quests[i].step.reward = e.target.value;
    } else if (key === 'stepRequirement') {
      if (!quests[i].step) {
        quests[i].step = {};
      }
      quests[i].step.requirement = e.target.value;
    } else {
      quests[i][key] = e.target.value;
    }
    this.setState({ quests });
  }

  renderSelectField(key, i, options) {
    const { editing, editingIndex, editKey, quests } = this.state;
    if (editing && editingIndex === i && editKey === key) {
      return (
        <select className="form-control" value={quests[i][key]} onChange={e => this.handleChange(e, i, key)}>
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    } else {
      return <div>{quests[i][key]}</div>;
    }
  }

  renderInputField(key, i, option = {}) {
    const { editing, editingIndex, editKey, quests } = this.state;
    if (editing && editingIndex === i && editKey === key) {
      let value = quests[i][key];
      if (key === 'stepReward') {
        value = quests[i].step ? quests[i].step.reward : '';
      }
      if (key === 'stepRequirement') {
        value = quests[i].step ? quests[i].step.requirement : '';
      }

      return (
        <input
          className="form-control"
          type={option.type || 'text'}
          value={value}
          onChange={e => this.handleChange(e, i, key)}
          name={key}
        />
      );
    } else {
      let displayText;
      if (key === 'stepReward') {
        displayText = quests[i].step ? quests[i].step.reward : '';
      } else if (key === 'stepRequirement') {
        displayText = quests[i].step ? quests[i].step.requirement : '';
      } else {
        displayText = quests[i][key];
      }
      return <div>{displayText}</div>;
    }
  }

  render() {
    const { webQuests, onEditWebQuests } = this.props;
    if (!webQuests) {
      return <ContainerLoader />;
    }

    const { quests } = this.state;

    return (
      <div id="ds9799-web-quests-editor">
        <div className="quest-table">
          <div className="quest-table-row header">
            <div className="id-col">ID</div>
            <div className="description-col">Description</div>
            <div className="type-col">Type</div>
            <div className="reward-col">Reward</div>
            <div className="reward-unit-col">Unit</div>
            <div className="requirement-col">Requirement</div>
            <div className="rules-col">Rules</div>
            <div className="repeatable-col">Repeatable</div>
            <div className="jump-col">Jump</div>
            <div className="step-reward-col">Step reward</div>
            <div className="step-requirement-col">Step requirement</div>
          </div>
          {quests.map((quest, i) => (
            <div className="quest-table-row" key={quest._id}>
              <div className="id-col">{quest._id}</div>
              <div
                className="description-col"
                onClick={() => this.setState({ editing: true, editingIndex: i, editKey: 'description' })}>
                {this.renderInputField('description', i, { type: 'text' })}
              </div>
              <div
                className="type-col"
                onClick={() => this.setState({ editing: true, editingIndex: i, editKey: 'type' })}>
                {this.renderSelectField('type', i, ['Account', 'Character'])}
              </div>
              <div
                className="reward-col"
                onClick={() => this.setState({ editing: true, editingIndex: i, editKey: 'reward' })}>
                {this.renderInputField('reward', i, { type: 'number' })}
              </div>
              <div
                className="reward-unit-col"
                onClick={() => this.setState({ editing: true, editingIndex: i, editKey: 'reward_unit' })}>
                {this.renderSelectField('reward_unit', i, ['Credits', 'Zen'])}
              </div>
              <div
                className="requirement-col"
                onClick={() => this.setState({ editing: true, editingIndex: i, editKey: 'requirement' })}>
                {this.renderInputField('requirement', i, { type: 'number' })}
              </div>
              <div
                className="rules-col"
                onClick={() => this.setState({ editing: true, editingIndex: i, editKey: 'rules' })}>
                {this.renderInputField('rules', i, { type: 'text' })}
              </div>
              <div className="repeatable-col">
                <input
                  type="checkbox"
                  checked={quest.isRepeatable}
                  onChange={e => this.handleChangeCheck(e, i, 'isRepeatable')}
                />
              </div>
              <div className="jump-col">
                <input
                  type="checkbox"
                  checked={quest.isJumpStep}
                  onChange={e => this.handleChangeCheck(e, i, 'isJumpStep')}
                />
              </div>
              <div
                className="step-reward-col"
                onClick={() => this.setState({ editing: true, editingIndex: i, editKey: 'stepReward' })}>
                {this.renderInputField('stepReward', i)}
              </div>
              <div
                className="step-requirement-col"
                onClick={() => this.setState({ editing: true, editingIndex: i, editKey: 'stepRequirement' })}>
                {this.renderInputField('stepRequirement', i, { type: 'number' })}
              </div>
            </div>
          ))}
        </div>
        <div className="feature">
          <button className="btn btn-success" onClick={() => this.add()}>
            Add
          </button>
          <button className="btn btn-primary" onClick={() => onEditWebQuests(this.state.quests)}>
            Save
          </button>
          <button className="btn btn-danger" onClick={() => this.setState({ quests: this.initQuestsState(webQuests) })}>
            Undo
          </button>
        </div>
      </div>
    );
  }
}

export default WebQuestsEditor;
