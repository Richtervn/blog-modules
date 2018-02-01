import './HeaderMenu.css';
import React, { Component } from 'react';
import MiniMusicPlayer from './components/MiniMusicPlayer.container';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        mangaUrl: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelfHide = this.handleSelfHide.bind(this);
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

  handleSelfHide(event) {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      event.stopImmediatePropagation();
      this.props.onSelfHide();
    }
  }

  render() {
    const { isShow } = this.props;
    if(isShow){
      document.addEventListener('click', this.handleSelfHide);
    }
    if(this.wrapper && !isShow){
      document.removeEventListener('click', this.handleSelfHide);
    }

    if (!isShow) return null;

    return (
      <div className="header-menu-bar" ref={node => (this.wrapper = node)}>
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
        <div className="header-menu-mini-player">
          <MiniMusicPlayer />
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
