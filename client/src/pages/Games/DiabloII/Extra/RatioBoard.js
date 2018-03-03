import React, { Component } from 'react';

const initState = data => ({
  LevelRatio: data.LevelRatio,
  SkillRatio: data.SkillRatio
});

const pages = [
  { href: 'https://diablo2.diablowiki.net', name: 'Diablo Wiki - diablo2.diablowiki.net' },
  { href: 'http://www.moddb.com/games/diablo-2-lod/mods', name: 'Diablo II Moddb - www.moddb.com' },
  { href: 'http://d2mods.info', name: 'The Phrozen Keep - d2mods.info' },
  { href: 'http://snej.org/forum/index.php', name: 'D2SE Forum - www.snej.org' },
  { href: 'http://www.d2tomb.com', name: 'Tomb of Knowledge - www.d2tomb.com' }
];

class RatioBoard extends Component {
  constructor(props) {
    super(props);
    this.state = initState(this.props.data);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleCancel() {
    this.setState(initState(this.props.data));
  }

  render() {
    return (
      <div className="d2-extra-board" id="d2e-ratio">
        <div className="ratio">
          <div className="ratio-input">
            <label>Skill Ratio :</label>
            <input
              className="form-control"
              type="number"
              value={this.state.SkillRatio}
              onChange={this.handleChange}
              name="SkillRatio"
            />
          </div>
          <div className="ratio-input">
            <label>Stats Ratio :</label>
            <input
              className="form-control"
              type="number"
              value={this.state.LevelRatio}
              onChange={this.handleChange}
              name="LevelRatio"
            />
          </div>
          <div className="feature">
            <button className="btn btn-primary" onClick={() => this.props.onEditData(this.state)}>
              Set Ratio
            </button>
            <button className="btn btn-danger" onClick={() => this.handleCancel()}>
              Cancel
            </button>
          </div>
        </div>
        <div className="links">
          <ul>
            {pages.map((page, i) => (
              <li key={i}>
                <a href={page.href} target="_blank">
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default RatioBoard;
