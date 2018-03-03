import React, { Component } from 'react';

const initState = data => ({
  SkillPointsTier1: data.SkillPointsTier1,
  SkillPointsTier2: data.SkillPointsTier2,
  SkillPointsTier3: data.SkillPointsTier3,
  Slayer: data.Slayer,
  Champion: data.Champion,
  Patriarch: data.Patriarch,
  LevelUpPointsTier: data.LevelUpPointsTier
});

class RuleEditBoard extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = initState(data);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.props.onEditData(this.state);
  }

  handleClear() {
    this.setState(initState(this.props.data));
  }

  render() {
    return (
      <div className="d2-extra-board" id="d2e-rule-edit">
        <div className="input-rule">
          <label>Character's level to be considered as Slayer :</label>
          <input
            className="form-control"
            type="number"
            value={this.state.Slayer}
            onChange={this.handleChange}
            name="Slayer"
          />
        </div>
        <div className="input-rule">
          <label>Character's level to be considered as Champion :</label>
          <input
            className="form-control"
            type="number"
            value={this.state.Champion}
            onChange={this.handleChange}
            name="Champion"
          />
        </div>
        <div className="input-rule">
          <label>Character's level to be considered as Patriarch :</label>
          <input
            className="form-control"
            type="number"
            name="Patriarch"
            value={this.state.Patriarch}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-rule">
          <label>Character's level to be considered as finish reward stats points quest :</label>
          <input
            className="form-control"
            type="number"
            name="LevelUpPointsTier"
            value={this.state.LevelUpPointsTier}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-rule">
          <label>Character's level to be considered as received Act I's skill points :</label>
          <input
            className="form-control"
            type="number"
            name="SkillPointsTier1"
            onChange={this.handleChange}
            value={this.state.SkillPointsTier1}
          />
        </div>
        <div className="input-rule">
          <label>Character's level to be considered as received Act II's skill points :</label>
          <input
            className="form-control"
            type="number"
            name="SkillPointsTier2"
            onChange={this.handleChange}
            value={this.state.SkillPointsTier2}
          />
        </div>
        <div className="input-rule">
          <label>Character's level to be considered as received Act IV's skill points :</label>
          <input
            className="form-control"
            type="number"
            name="SkillPointsTier3"
            onChange={this.handleChange}
            value={this.state.SkillPointsTier3}
          />
        </div>

        <div className="feature">
          <button className="btn btn-primary" onClick={() => this.handleSubmit()}>
            Submit
          </button>
          <button className="btn btn-danger" onClick={() => this.handleClear()}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default RuleEditBoard;
