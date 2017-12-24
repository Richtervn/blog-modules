import React, { Component } from 'react';

class ExtraBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      gold: 0,
      skill: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onExtraLevel, onExtraGold, onExtraSkill } = this.props;
    return (
      <div className="d2-extra-info-board" style={{ marginTop: '10px', paddingBottom: '30px' }}>
        <h5 style={{ paddingTop: '20px' }}>Non-saved character's level :</h5>
        <div className="row no-row-margin">
          <div className="col-9 no-col-margin">
            <input
              className="form-control"
              type="number"
              value={this.state.level}
              name="level"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-3 no-col-margin">
            <button
              className="btn btn-primary btn-block"
              style={{ padding: '12px' }}
              onClick={() => onExtraLevel(this.state.level)}>
              ADD LEVEL
            </button>
          </div>
        </div>
        <h5 style={{ paddingTop: '20px' }}>Deposit or withdraw your saved gold :</h5>
        <div className="row no-row-margin">
          <div className="col-1 no-col-margin">
            <button
              className="btn btn-danger btn-block"
              style={{ padding: '10px' }}
              onClick={() => onExtraGold(this.state.gold, 'minus')}>
              <i className="fa fa-minus" />
            </button>
          </div>
          <div className="col-10 no-col-margin">
            <input
              className="form-control"
              type="number"
              value={this.state.gold}
              name="gold"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-1 no-col-margin">
            <button
              className="btn btn-danger btn-block"
              style={{ padding: '10px' }}
              onClick={() => onExtraGold(this.state.gold, 'add')}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
        <h5 style={{ paddingTop: '20px' }}>Alternate next character's skill points :</h5>
        <div className="row no-row-margin">
          <div className="col-1 no-col-margin">
            <button
              className="btn btn-danger btn-block"
              style={{ padding: '10px' }}
              onClick={() => onExtraSkill(this.state.skill, 'minus')}>
              <i className="fa fa-minus" />
            </button>
          </div>
          <div className="col-10 no-col-margin">
            <input
              className="form-control"
              type="number"
              value={this.state.skill}
              name="skill"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-1 no-col-margin">
            <button
              className="btn btn-danger btn-block"
              style={{ padding: '10px' }}
              onClick={() => onExtraSkill(this.state.skill, 'add')}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraBoard;
