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
      <div className="d2-extra-board" id="d2e-extra">
        <h5>Non-saved character's level :</h5>
        <div className="input-level">
          <input
            className="form-control"
            type="number"
            value={this.state.level}
            name="level"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary" onClick={() => onExtraLevel(this.state.level)}>
            Add level
          </button>
        </div>

        <h5 className="input-label">Deposit or withdraw your saved gold :</h5>
        <div className="input-number">
          <button className="btn btn-danger" onClick={() => onExtraGold(this.state.gold, 'minus')}>
            <i className="fa fa-minus" />
          </button>
          <input
            className="form-control"
            type="number"
            value={this.state.gold}
            name="gold"
            onChange={this.handleChange}
          />
          <button className="btn btn-danger" onClick={() => onExtraGold(this.state.gold, 'add')}>
            <i className="fa fa-plus" />
          </button>
        </div>

        <h5 className="input-label">Alternate next character's skill points :</h5>
        <div className="input-number">
          <button className="btn btn-danger" onClick={() => onExtraSkill(this.state.skill, 'minus')}>
            <i className="fa fa-minus" />
          </button>
          <input
            className="form-control"
            type="number"
            value={this.state.skill}
            name="skill"
            onChange={this.handleChange}
          />
          <button className="btn btn-danger" onClick={() => onExtraSkill(this.state.skill, 'add')}>
            <i className="fa fa-plus" />
          </button>
        </div>
        
      </div>
    );
  }
}

export default ExtraBoard;
