import _ from 'underscore';
import React, { Component } from 'react';
import getMuItemOptions from 'factories/getMuItemOptions';
import getMuExcText from 'factories/getMuExcText';

const defineConsistentOption = item => {
  const consistentOption = [];
  for (let i = 1; i <= 6; i++) {
    if (item[`exc${i}`] == 1) {
      consistentOption.push(`exc${i}`);
    }
  }
  if (item.skill == 1) consistentOption.push('skill');
  if (item.luck == 1) consistentOption.push('luck');
  return consistentOption;
};

const defineRemainItemLevel = item => {
  const remainItemLevel = [];
  for (let i = 0; i <= 15 - item.level; i++) {
    remainItemLevel.push(item.level + i);
  }
  return remainItemLevel;
};

const defineRemainItemOption = item => {
  const remainItemOption = [];
  for (let i = 0; i <= 7 - item.option; i++) {
    remainItemOption.push(item.option + i);
  }
  return remainItemOption;
};

const initState = item => {
  console.log(item);
  if (!item) return {};
  const state = {
    value: {
      exc1: item.exc1 == 1,
      exc2: item.exc2 == 1,
      exc3: item.exc3 == 1,
      exc4: item.exc4 == 1,
      exc5: item.exc5 == 1,
      exc6: item.exc6 == 1,
      skill: item.skill == 1,
      luck: item.luck == 1,
      option: item.option,
      level: item.level
    },
    output: {},
    price: 0
  };

  return state;
};

class OptionCard extends Component {
  constructor(props) {
    super(props);
    this.state = initState(this.props.item);
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpgrade = this.handleUpgrade.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(initState(nextProps.item));
  }

  onChangeCheck(name) {
    const nextState = { ...this.state };
    if (this.state.value[name] == true) {
      if (nextState.output[name] == 1) {
        delete nextState.output[name];
      }
    } else {
      nextState.output[name] = 1;
    }
    nextState.value[name] = !nextState.value[name];
    nextState.price = this.calculatePrice(nextState);
    this.setState(nextState);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextState = { ...this.state };
    nextState.value[name] = value;
    nextState.output[name] = value;
    nextState.price = this.calculatePrice(nextState);
    this.setState(nextState);
  }

  calculatePrice(nextState) {
    const { gameSetting, item } = this.props;
    const basePrice = gameSetting.UPGRADE_ITEM_BASE_PRICE[item.category];
    const charge = gameSetting.UPGRADE_ITEM_PRICE;

    let price = 0;
    let orders = Object.keys(nextState.output);
    if (orders.length > 0) price = basePrice.BASE + basePrice.STEP * item.itemId;
    if (nextState.output.skill) price += charge.SKILL * basePrice.MULTIPLE;
    if (nextState.output.luck) price += charge.LUCK * basePrice.MULTIPLE;
    for (let i = 1; i <= 6; i++) {
      if (nextState.output[`exc${i}`]) {
        price += charge[`EXC${i}`] * basePrice.MULTIPLE;
      }
    }
    if (nextState.output.option) {
      price += charge.OPTION * (nextState.output.option - item.option) * basePrice.MULTIPLE;
    }
    if (nextState.output.level) {
      let upLevel = nextState.output.level - item.level;
      let i = 1;
      while (i <= upLevel) {
        if (item.level + i <= 9) price += charge.LEVEL_BELOW_9 * basePrice.MULTIPLE;
        if (item.level + i == 10) price += charge.LEVEL_10 * basePrice.MULTIPLE;
        if (item.level + i == 11) price += charge.LEVEL_11 * basePrice.MULTIPLE;
        if (item.level + i == 12) price += charge.LEVEL_12 * basePrice.MULTIPLE;
        if (item.level + i == 13) price += charge.LEVEL_13 * basePrice.MULTIPLE;
        if (item.level + i == 14) price += charge.LEVEL_14 * basePrice.MULTIPLE;
        if (item.level + i == 15) price += charge.LEVEL_15 * basePrice.MULTIPLE;
        i++;
      }
    }
    return price;
  }

  handleUpgrade() {
    const { onUpgradeItem, user, character, slot } = this.props;
    onUpgradeItem({
      memb___id: user.memb___id,
      output: { ...this.state.output },
      price: this.state.price,
      characterName: character.Name,
      slot: slot
    });
  }

  render() {
    const { item } = this.props;

    if (!item)
      return (
        <div className="ds9799-item-option-card flex-center-both">
          <h5>
            <i>Select the item you want to upgrade</i>
          </h5>
        </div>
      );
    const consistentOption = defineConsistentOption(item);
    const remainItemOption = defineRemainItemOption(item);
    const remainItemLevel = defineRemainItemLevel(item);
    const { isHaveLuck, isHaveSkill } = getMuItemOptions(item.category, item.itemId);
    const { excOpt1, excOpt2, excOpt3, excOpt4, excOpt5, excOpt6 } = getMuExcText(
      item.category,
      item.itemId
    );
    const { exc1, exc2, exc3, exc4, exc5, exc6, luck, skill } = this.state.value;

    return (
      <div className="ds9799-item-option-card">
        <div className="row no-row-margin flex-center-both">
          {isHaveLuck && (
            <div className="col no-col-margin">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={() => this.onChangeCheck('luck')}
                  checked={luck}
                  disabled={_.contains(consistentOption, 'luck')}
                />
                &nbsp;Luck&nbsp;
              </label>
            </div>
          )}
          {isHaveSkill && (
            <div className="col no-col-margin">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={() => this.onChangeCheck('skill')}
                  checked={skill}
                  disabled={_.contains(consistentOption, 'skill')}
                />
                &nbsp;Skill&nbsp;
              </label>
            </div>
          )}
          <div className="col no-col-margin">
            <form className="form-inline flex-center">
              <label className="mr-sm-2">Item Level :</label>
              <select
                className="ds9799-sm-selector"
                name="level"
                value={this.state.value.level}
                onChange={this.handleChange}>
                {remainItemLevel.map((lvl, i) => (
                  <option value={lvl} key={i}>
                    {lvl}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="col no-col-margin">
            <form className="form-inline flex-center">
              <label className="mr-sm-2">Option Level :</label>
              <select
                className="ds9799-sm-selector"
                name="option"
                value={this.state.value.option}
                onChange={this.handleChange}>
                {remainItemOption.map((lvl, i) => (
                  <option value={lvl} key={i}>
                    {lvl}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        <br />
        <div className="row no-row-margin">
          <div className="col no-col-margin">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => this.onChangeCheck('exc1')}
                checked={exc1}
                disabled={_.contains(consistentOption, 'exc1')}
              />
              &nbsp;{excOpt1}&nbsp;
            </label>
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => this.onChangeCheck('exc2')}
                checked={exc2}
                disabled={_.contains(consistentOption, 'exc2')}
              />
              &nbsp;{excOpt2}&nbsp;
            </label>
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => this.onChangeCheck('exc3')}
                checked={exc3}
                disabled={_.contains(consistentOption, 'exc3')}
              />
              &nbsp;{excOpt3}&nbsp;
            </label>
          </div>
          <div className="col no-col-margin">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => this.onChangeCheck('exc4')}
                checked={exc4}
                disabled={_.contains(consistentOption, 'exc4')}
              />
              &nbsp;{excOpt4}&nbsp;
            </label>
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => this.onChangeCheck('exc5')}
                checked={exc5}
                disabled={_.contains(consistentOption, 'exc5')}
              />
              &nbsp;{excOpt5}&nbsp;
            </label>
            {excOpt6 && (
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={() => this.onChangeCheck('exc6')}
                  checked={exc6}
                  disabled={_.contains(consistentOption, 'exc6')}
                />
                &nbsp;{excOpt6}&nbsp;
              </label>
            )}
          </div>
        </div>
        <div className="flex-center-both" style={{ paddingTop: '20px' }}>
          <button
            className="btn btn-danger"
            style={{ padding: '10px 50px 10px 50px' }}
            onClick={this.handleUpgrade}>{`Upgrade : ${this.state.price} credits`}</button>
        </div>
      </div>
    );
  }
}

export default OptionCard;
