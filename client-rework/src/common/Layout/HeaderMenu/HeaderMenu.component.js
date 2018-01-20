import './HeaderMenu.css';
import React, { Component } from 'react';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        mangaUrl: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const valueState = { ...this.state.value };
    switch (name) {
      default:
        valueState[name] = value;
        break;
    }
    this.setState({ value: valueState });
  }

  handleQuickUpdate() {
    this.props.onQuickUpdateManga({ url: this.state.value.mangaUrl });
    this.setState({ ...this.state, value: { ...this.state.value, mangaUrl: '' } });
  }

  render() {
    const { isShow } = this.props;

    if (!isShow) return null;

    return (
      <div className="header-menu-bar">
        <div className="header-menu-input-wrapper">
          <input
            type="text"
            className="form-control header-menu-input"
            name="mangaUrl"
            value={this.state.value.mangaUrl}
            onChange={this.handleChange}
            placeholder="Quick update manga reading url"
          />
          <button
            className="btn btn-success header-menu-btn"
            disabled={!this.state.value.mangaUrl}
            onClick={() => this.handleQuickUpdate()}>
            <i className="fa fa-plus-circle" />
          </button>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
