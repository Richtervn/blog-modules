import './GameSetting.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

const characterDisplay = {
  DK: 'Dark Knight',
  ELF: 'Elf',
  MG: 'Magic Gladiator',
  DW: 'Dark Wizard'
};

class GameSetting extends Component {
  constructor(props) {
    super(props);
    this.state = this.initState(this.props.gameSetting);
    this.handleChange = this.handleChange.bind(this);
  }

  initState(gameSetting) {
    if (gameSetting) {
      return { ...gameSetting };
    } else {
      return {};
    }
  }

  componentWillMount() {
    this.props.onGetGameSetting();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.gameSetting && nextProps.gameSetting) {
      this.setState(this.initState(nextProps.gameSetting));
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { gameSetting, onEditGameSetting } = this.props;
    if (!gameSetting) {
      return <ContainerLoader />;
    }

    return (
      <div id="ds9799-game-setting">
        <section id="register-gift">
          <h2>Register gift</h2>
          <div className="content">
            <div className="input-wrapper">
              <label>Zen reward :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.NEW_REGISTER_ZEN}
                onChange={this.handleChange}
                name="NEW_REGISTER_ZEN"
              />
            </div>
            <div className="input-wrapper">
              <label>Credits reward :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.NEW_REGISTER_CREDIT}
                onChange={this.handleChange}
                name="NEW_REGISTER_CREDIT"
              />
            </div>
          </div>
        </section>
        <section id="character-services">
          <h2>Price of character services</h2>
          <div className="content">
            <div className="input-wrapper">
              <label>Add point fee :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.ADD_POINT_FEE}
                onChange={this.handleChange}
                name="ADD_POINT_FEE"
              />
            </div>
            <div className="input-wrapper">
              <label>Reset fee :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.RESET_FEE}
                onChange={this.handleChange}
                name="RESET_FEE"
              />
            </div>
            <div className="input-wrapper">
              <label>Grand reset fee :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.GRAND_RESET_FEE}
                onChange={this.handleChange}
                name="GRAND_RESET_FEE"
              />
            </div>
            <div className="input-wrapper">
              <label>Quest reset fee :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.QUEST_RESET_FEE}
                onChange={this.handleChange}
                name="QUEST_RESET_FEE"
              />
            </div>
            <div className="input-wrapper">
              <label>Change name fee :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.CHANGE_NAME_FEE}
                onChange={this.handleChange}
                name="CHANGE_NAME_FEE"
              />
            </div>
          </div>
        </section>
        <section id="reset-settings">
          <h2>Reset settings</h2>
          <div className="content">
            <div className="input-wrapper checkbox-field">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.RESET_KEEP_POINTS}
                  onChange={() => this.setState({ RESET_KEEP_POINTS: !this.state.RESET_KEEP_POINTS })}
                />
                &nbsp;Reset keep character points ?
              </label>
            </div>
            <div className="input-wrapper">
              <label>Min level required :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.RESET_MIN_LEVEL}
                onChange={this.handleChange}
                name="RESET_MIN_LEVEL"
              />
            </div>
            <div className="input-wrapper">
              <label>Max level required :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.RESET_MAX_LEVEL}
                onChange={this.handleChange}
                name="RESET_MAX_LEVEL"
              />
            </div>
            <div className="input-wrapper">
              <label>Require level increase per reset :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.RESET_LEVEL_GAP}
                onChange={this.handleChange}
                name="RESET_LEVEL_GAP"
              />
            </div>
            <div className="input-wrapper">
              <label>First reset reward points :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.FIRST_RESET_POINT}
                onChange={this.handleChange}
                name="FIRST_RESET_POINT"
                disabled={this.state.RESET_KEEP_POINTS}
              />
            </div>
            <div className="input-wrapper">
              <label>Next 4 resets reward points :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.NEXT_4_RESET_POINT}
                onChange={this.handleChange}
                name="NEXT_4_RESET_POINT"
                disabled={this.state.RESET_KEEP_POINTS}
              />
            </div>
            <div className="input-wrapper">
              <label>Rest resets reward points :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.RESET_POINTS}
                onChange={this.handleChange}
                name="RESET_POINTS"
                disabled={this.state.RESET_KEEP_POINTS}
              />
            </div>
            <div className="input-wrapper">
              <label>Credit reward per reset :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.RESET_AWARD_CREDITS}
                onChange={this.handleChange}
                name="RESET_AWARD_CREDITS"
              />
            </div>
          </div>
        </section>
        <section id="grand-reset-settings">
          <h2>Grand reset settings</h2>
          <div className="content">
            <div className="input-wrapper">
              <label>Required level :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.GRAND_RESET_REQUIRED.Level}
                onChange={e =>
                  this.setState({ GRAND_RESET_REQUIRED: { ...this.state.GRAND_RESET_REQUIRED, Level: e.target.value } })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Required resets :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.GRAND_RESET_REQUIRED.Resets}
                onChange={e =>
                  this.setState({
                    GRAND_RESET_REQUIRED: { ...this.state.GRAND_RESET_REQUIRED, Resets: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Reward points :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.GRAND_RESET_POINTS}
                onChange={this.handleChange}
                name="GRAND_RESET_POINTS"
              />
            </div>
            <div className="input-wrapper">
              <label>Reward credits :</label>
              <input
                className="form-control"
                type="number"
                value={this.state.GRAND_RESET_AWARD_CREDITS}
                onChange={this.handleChange}
                name="GRAND_RESET_AWARD_CREDITS"
              />
            </div>
          </div>
        </section>
        <section id="banking-settings">
          <h2>Banking settings</h2>
          <div className="content">
            <div className="input-wrapper">
              <div className="title">Deposit</div>
              <div className="input-frag checkbox-field">
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.BANKING_DEPOSIT_FEE.isPercentage}
                    onChange={() =>
                      this.setState({
                        BANKING_DEPOSIT_FEE: {
                          ...this.state.BANKING_DEPOSIT_FEE,
                          isPercentage: !this.state.BANKING_DEPOSIT_FEE.isPercentage
                        }
                      })
                    }
                  />&nbsp;Use percentage ?
                </label>
              </div>
              <div className="input-frag">
                <label>Charge :</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.BANKING_DEPOSIT_FEE.charge}
                  onChange={e =>
                    this.setState({
                      BANKING_DEPOSIT_FEE: { ...this.state.BANKING_DEPOSIT_FEE, charge: e.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="input-wrapper">
              <div className="title">Withdraw</div>
              <div className="input-frag checkbox-field">
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.BANKING_WITHDRAW_FEE.isPercentage}
                    onChange={() =>
                      this.setState({
                        BANKING_WITHDRAW_FEE: {
                          ...this.state.BANKING_WITHDRAW_FEE,
                          isPercentage: !this.state.BANKING_WITHDRAW_FEE.isPercentage
                        }
                      })
                    }
                  />&nbsp;Use percentage ?
                </label>
              </div>
              <div className="input-frag">
                <label>Charge :</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.BANKING_WITHDRAW_FEE.charge}
                  onChange={e =>
                    this.setState({
                      BANKING_WITHDRAW_FEE: { ...this.state.BANKING_WITHDRAW_FEE, charge: e.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="input-wrapper">
              <div className="title">Loan</div>
              <div className="input-frag checkbox-field">
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.BANKING_LOAN_SETTING.isPercentage}
                    onChange={() =>
                      this.setState({
                        BANKING_LOAN_SETTING: {
                          ...this.state.BANKING_LOAN_SETTING,
                          isPercentage: !this.state.BANKING_LOAN_SETTING.isPercentage
                        }
                      })
                    }
                  />&nbsp;Use percentage ?
                </label>
              </div>
              <div className="input-frag">
                <label>Charge :</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.BANKING_LOAN_SETTING.charge}
                  onChange={e =>
                    this.setState({
                      BANKING_LOAN_SETTING: { ...this.state.BANKING_LOAN_SETTING, charge: e.target.value }
                    })
                  }
                />
              </div>
              <div className="input-frag">
                <label>Max value :</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.BANKING_LOAN_SETTING.maxValue}
                  onChange={e =>
                    this.setState({
                      BANKING_LOAN_SETTING: { ...this.state.BANKING_LOAN_SETTING, maxValue: e.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="input-wrapper">
              <div className="title">Transfer</div>
              <div className="input-frag checkbox-field">
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.BANKING_TRANSFER_FEE.isPercentage}
                    onChange={() =>
                      this.setState({
                        BANKING_TRANSFER_FEE: {
                          ...this.state.BANKING_TRANSFER_FEE,
                          isPercentage: !this.state.BANKING_TRANSFER_FEE.isPercentage
                        }
                      })
                    }
                  />&nbsp;Use percentage ?
                </label>
              </div>
              <div className="input-frag">
                <label>Charge :</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.BANKING_TRANSFER_FEE.charge}
                  onChange={e =>
                    this.setState({
                      BANKING_TRANSFER_FEE: { ...this.state.BANKING_TRANSFER_FEE, charge: e.target.value }
                    })
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section id="credit-price">
          <h2>Credit price</h2>
          <div className="content">
            <div className="input-wrapper">
              <label>Buy price :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.CREDIT_PRICE.buy}
                onChange={e => this.state({ CREDIT_PRICE: { ...this.state.CREDIT_PRICE, buy: e.target.value } })}
              />
            </div>
            <div className="input-wrapper">
              <label>Sell price :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.CREDIT_PRICE.sell}
                onChange={e => this.state({ CREDIT_PRICE: { ...this.state.CREDIT_PRICE, sell: e.target.value } })}
              />
            </div>
          </div>
        </section>
        <section id="blacksmith-setting">
          <h2>Blacksmith Setting</h2>
          <div className="content">
            <div className="input-wrapper">
              <label>Sell receipt ratio :</label>
              <input
                type="number"
                className="form-control"
                value={this.state.SELL_RECEIPT_RATIO}
                onChange={this.handleChange}
                name="SELL_RECEIPT_RATIO"
              />
            </div>
          </div>
        </section>
        <section id="upgrade-item">
          <h2>Upgrade item price</h2>
          <div className="content">
            <div className="input-wrapper">
              <label>Each level below 9 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.LEVEL_BELOW_9}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, LEVEL_BELOW_9: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Level 9 -> 10 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.LEVEL_10}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, LEVEL_10: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Level 10 -> 11 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.LEVEL_11}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, LEVEL_11: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Level 11 -> 12 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.LEVEL_12}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, LEVEL_12: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Level 12 -> 13 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.LEVEL_13}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, LEVEL_13: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Level 13 -> 14 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.LEVEL_14}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, LEVEL_14: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Level 14 -> 15 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.LEVEL_14}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, LEVEL_15: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Each option level :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.OPTION}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, OPTION: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Enable luck :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.LUCK}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, LUCK: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Enable skill :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.SKILL}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, SKILL: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Enable excellent option 1 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.EXC1}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, EXC1: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Enable excellent option 2 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.EXC2}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, EXC2: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Enable excellent option 3 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.EXC3}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, EXC3: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Enable excellent option 4 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.EXC4}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, EXC4: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Enable excellent option 5 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.EXC5}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, EXC5: e.target.value }
                  })
                }
              />
            </div>
            <div className="input-wrapper">
              <label>Enable excellent option 6 :</label>
              <input
                type="number"
                value={this.state.UPGRADE_ITEM_PRICE.EXC6}
                className="form-control"
                onChange={e =>
                  this.setState({
                    UPGRADE_ITEM_PRICE: { ...this.state.UPGRADE_ITEM_PRICE, EXC6: e.target.value }
                  })
                }
              />
            </div>
            {Object.keys(this.state.UPGRADE_ITEM_BASE_PRICE).map(key => (
              <div className="input-wrapper" key={key}>
                <div className="title">{key}</div>
                <div className="input-frag">
                  <label>Base price :</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.UPGRADE_ITEM_BASE_PRICE[key].BASE}
                    onChange={e =>
                      this.setState({
                        UPGRADE_ITEM_BASE_PRICE: {
                          ...this.state.UPGRADE_ITEM_BASE_PRICE,
                          [key]: { ...this.state.UPGRADE_ITEM_BASE_PRICE[key], BASE: e.target.value }
                        }
                      })
                    }
                  />
                </div>
                <div className="input-frag">
                  <label>Step price :</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.UPGRADE_ITEM_BASE_PRICE[key].STEP}
                    onChange={e =>
                      this.setState({
                        UPGRADE_ITEM_BASE_PRICE: {
                          ...this.state.UPGRADE_ITEM_BASE_PRICE,
                          [key]: { ...this.state.UPGRADE_ITEM_BASE_PRICE[key], STEP: e.target.value }
                        }
                      })
                    }
                  />
                </div>
                <div className="input-frag">
                  <label>Multiple :</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.UPGRADE_ITEM_BASE_PRICE[key].MULTIPLE}
                    onChange={e =>
                      this.setState({
                        UPGRADE_ITEM_BASE_PRICE: {
                          ...this.state.UPGRADE_ITEM_BASE_PRICE,
                          [key]: { ...this.state.UPGRADE_ITEM_BASE_PRICE[key], MULTIPLE: e.target.value }
                        }
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="base-stats">
          <h2>Characters base stats</h2>
          <div className="content">
            {Object.keys(this.state.BASE_STATS).map(key => (
              <div className="input-wrapper" key={key}>
                <div className="title">{characterDisplay[key]}</div>
                {['Strength', 'Dexterity', 'Vitality', 'Energy'].map(type => (
                  <div className="input-frag" key={type}>
                    <label>{type}</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.BASE_STATS[key][type]}
                      onChange={e =>
                        this.setState({
                          BASE_STATS: {
                            ...this.state.BASE_STATS,
                            [key]: { ...this.state.BASE_STATS[key], [type]: e.target.value }
                          }
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
        <div className="feature">
          <button className="btn btn-primary" onClick={() => onEditGameSetting(this.state)}>
            Save
          </button>
          <button className="btn btn-danger" onClick={() => this.setState(this.initState(gameSetting))}>
            Undo
          </button>
        </div>
      </div>
    );
  }
}

export default GameSetting;
