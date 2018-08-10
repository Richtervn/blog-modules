import './HeaderMenu.css';
import React, { Component } from 'react';
import MiniMusicPlayer from './components/MiniMusicPlayer.container';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        mangaUrl: '',
        crawlMangaUrl: '',
        newChapterUrl: '',
        appDiary: ''
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

  handleQuickUpdateManga() {
    this.props.onQuickUpdateManga({ url: this.state.value.mangaUrl });
    this.setState({ ...this.state, value: { ...this.state.value, mangaUrl: '' } });
  }

  handleAddAppDiary() {
    this.props.onAddAppDiary({ text: this.state.value.appDiary });
    this.setState({ ...this.state, value: { ...this.state.value, appDiary: '' } });
  }

  handleSaveNewMangaChapter() {
    this.props.onSaveNewMangaChapter({ url: this.state.value.newChapterUrl });
    this.setState({ ...this.state, value: { ...this.state.value, newChapterUrl: '' } });
  }

  handleCrawlManga() {
    this.props.onCrawlManga({ url: this.state.value.crawlMangaUrl });
    this.setState({ ...this.state, value: { ...this.state.value, crawlMangaUrl: '' } });
  }

  handleSelfHide(event) {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      event.stopImmediatePropagation();
      this.props.onSelfHide();
    }
  }

  render() {
    const { isShow } = this.props;
    if (isShow) {
      document.addEventListener('click', this.handleSelfHide);
    }
    if (this.wrapper && !isShow) {
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
            onClick={() => this.handleQuickUpdateManga()}>
            <i className="fa fa-plus-circle" />
          </button>
        </div>

        <div className="header-menu-input-wrapper-next">
          <input
            type="text"
            className="form-control header-menu-input"
            name="crawlMangaUrl"
            value={this.state.value.crawlMangaUrl}
            onChange={this.handleChange}
            placeholder="Crawl manga reading url"
          />
          <button
            className="btn btn-info header-menu-btn"
            disabled={!this.state.value.crawlMangaUrl}
            onClick={() => this.handleCrawlManga()}>
            <i className="fa fa-plus-circle" />
          </button>
        </div>

        <div className="header-menu-input-wrapper-next">
          <input
            type="text"
            className="form-control header-menu-input"
            name="newChapterUrl"
            value={this.state.value.newChapterUrl}
            onChange={this.handleChange}
            placeholder="Quick update manga reading url"
          />
          <button
            className="btn btn-warning header-menu-btn"
            disabled={!this.state.value.newChapterUrl}
            onClick={() => this.handleSaveNewMangaChapter()}>
            <i className="fa fa-plus-circle" />
          </button>
        </div>

        <div className="header-menu-input-wrapper-next">
          <input
            type="text"
            className="form-control header-menu-input"
            name="appDiary"
            value={this.state.value.appDiary}
            onChange={this.handleChange}
            placeholder="Add App Diary"
          />
          <button
            className="btn btn-primary header-menu-btn"
            disabled={!this.state.value.appDiary}
            onClick={() => this.handleAddAppDiary()}>
            <i className="fa fa-send-o" />
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
