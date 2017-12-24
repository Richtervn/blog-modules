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
    this.props.onEditRule(this.state);
  }

  handleClear() {
    this.setState(initState(this.props.data));
  }

  render() {
    return (
      <div className="d2-extra-rule-board" style={{ marginTop: '10px' }}>
        <div style={{ marginTop: '10px' }} />
        <div className="form-group row no-row-margin">
          <label className="col-sm-9 col-form-label col-form-label-sm">
            <strong>Character's level to be considered as Slayer :</strong>
          </label>
          <div className="col-sm-3">
            <input
              className="form-control form-control-sm"
              type="number"
              value={this.state.Slayer}
              onChange={this.handleChange}
              name="Slayer"
            />
          </div>
        </div>

        <div className="form-group row no-row-margin">
          <label className="col-sm-9 col-form-label col-form-label-sm">
            <strong>Character's level to be considered as Champion :</strong>
          </label>
          <div className="col-sm-3">
            <input
              className="form-control form-control-sm"
              type="number"
              value={this.state.Champion}
              onChange={this.handleChange}
              name="Champion"
            />
          </div>
        </div>

        <div className="form-group row no-row-margin">
          <label className="col-sm-9 col-form-label col-form-label-sm">
            <strong>Character's level to be considered as Patriarch :</strong>
          </label>
          <div className="col-sm-3">
            <input
              className="form-control form-control-sm"
              type="number"
              name="Patriarch"
              value={this.state.Patriarch}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="form-group row no-row-margin">
          <label className="col-sm-9 col-form-label col-form-label-sm">
            <strong>Character's level to be considered as finish reward stats points quest :</strong>
          </label>
          <div className="col-sm-3">
            <input
              className="form-control form-control-sm"
              type="number"
              name="LevelUpPointsTier"
              value={this.state.LevelUpPointsTier}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="form-group row no-row-margin">
          <label className="col-sm-9 col-form-label col-form-label-sm">
            <strong>Character's level to be considered as received Act I's skill points :</strong>
          </label>
          <div className="col-sm-3">
            <input
              className="form-control form-control-sm"
              type="number"
              name="SkillPointsTier1"
              onChange={this.handleChange}
              value={this.state.SkillPointsTier1}
            />
          </div>
        </div>

        <div className="form-group row no-row-margin">
          <label className="col-sm-9 col-form-label col-form-label-sm">
            <strong>Character's level to be considered as received Act II's skill points :</strong>
          </label>
          <div className="col-sm-3">
            <input
              className="form-control form-control-sm"
              type="number"
              name="SkillPointsTier2"
              onChange={this.handleChange}
              value={this.state.SkillPointsTier2}
            />
          </div>
        </div>

        <div className="form-group row no-row-margin">
          <label className="col-sm-9 col-form-label col-form-label-sm">
            <strong>Character's level to be considered as received Act IV's skill points :</strong>
          </label>
          <div className="col-sm-3">
            <input
              className="form-control form-control-sm"
              type="number"
              name="SkillPointsTier3"
              onChange={this.handleChange}
              value={this.state.SkillPointsTier3}
            />
          </div>
        </div>

        <div className="row no-row-margin">
          <div className="col-6 no-col-margin">
            <button
              className="btn btn-primary"
              style={{ margin: '20px 5px 10px 5px', padding: '10px', width: '98%' }}
              onClick={() => this.handleSubmit()}>
              Submit
            </button>
          </div>
          <div className="col-6 no-col-margin">
            <button
              className="btn btn-danger"
              style={{ margin: '20px 5px 10px 5px', padding: '10px', width: '98%' }}
              onClick={() => this.handleClear()}>
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RuleEditBoard;
