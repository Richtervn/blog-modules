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
      <div className="d2-extra-info-board" style={{ marginTop: '10px', height: '162px' }}>
        <div className="row no-row-margin">
          <div className="col-4 no-col-margin">
            <div style={{ marginTop: '15px' }} />
            <div className="form-group row no-row-margin">
              <label className="col-sm-7 col-form-label col-form-label-sm">
                <strong>Skill Ratio :</strong>
              </label>
              <div className="col-sm-5">
                <input
                  className="form-control form-control-sm"
                  type="number"
                  value={this.state.SkillRatio}
                  onChange={this.handleChange}
                  name="SkillRatio"
                />
              </div>
            </div>
            <div className="form-group row no-row-margin">
              <label className="col-sm-7 col-form-label col-form-label-sm">
                <strong>Stats Ratio :</strong>
              </label>
              <div className="col-sm-5">
                <input
                  className="form-control form-control-sm"
                  type="number"
                  value={this.state.LevelRatio}
                  onChange={this.handleChange}
                  name="LevelRatio"
                />
              </div>
            </div>
            <div className="row no-row-margin">
              <div className="col no-col-margin">
                <button
                  className="btn btn-primary btn-block"
                  style={{ margin: '20px 5px 10px 5px', padding: '10px', width: '98%' }}
                  onClick={() => this.props.onEditRatio(this.state)}>
                  Set Ratio
                </button>
              </div>
              <div className="col no-col-margin">
                <button
                  className="btn btn-danger btn-block "
                  style={{ margin: '20px 5px 10px 5px', padding: '10px', width: '98%' }}
                  onClick={() => this.handleCancel()}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="col-8 no-col-margin">
            <ul style={{ marginLeft: '80px', marginTop: '10px' }}>
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
      </div>
    );
  }
}

export default RatioBoard;
