import './ControlBar.css';
import React, { Component } from 'react';

import MangaForm from './MangaForm';
import MangaDetailView from './MangaDetailView';
import MangaDeleteView from './MangaDeleteView';

class ControlBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTool: 'QuickUpdate',
      activeView: 'Add',
      quickUrl: '',
      search: {
        option: 'Name',
        value: ''
      },
      sort: {
        option: 'default',
        value: 'ASC'
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, prefix) {
    const { name, value } = event.target;
    switch (prefix) {
      case 'searchOption':
        this.setState({ search: { ...this.state.search, option: value } });
        break;
      case 'searchValue':
        this.props.onSearchManga({ [this.state.search.option]: value });
        this.setState({ search: { ...this.state.search, value } });
        break;
      case 'sortOption':
        this.props.onSortManga({ option: [value], type: this.state.sort.value });
        this.setState({ sort: { ...this.state.sort, option: value } });
        break;
      case 'sortValue':
        if (this.state.sort.option !== 'default') {
          this.props.onSortManga({ option: this.state.sort.option, type: value });
        }
        this.setState({ sort: { ...this.state.sort, value } });
        break;
      default:
        this.setState({ [name]: value });
        break;
    }
  }

  handleQuickUpdate() {
    this.props.onQuickUpdate({ url: this.state.quickUrl });
    this.setState({ quickUrl: '' });
  }

  changeActiveTool(tool) {
    this.setState({ activeTool: tool });
  }

  changeActiveView(view) {
    this.setState({ activeView: view });
  }

  render() {
    const { activeTool, activeView } = this.state;
    const { manga, onAddManga, onEditManga, onDeleteManga } = this.props;

    return (
      <div className="row">
        <div className="manga-control-bar">
          <div className="manga-feature-line-container">
            {activeTool === 'QuickUpdate' && [
              <input
                key="qu_ip"
                type="text"
                className="form-control manga-feature-input"
                value={this.state.quickUrl}
                onChange={this.handleChange}
                name="quickUrl"
              />,
              <button
                key="qu_bt"
                className="btn btn-primary manga-feature-button"
                disabled={!this.state.quickUrl}
                onClick={() => this.handleQuickUpdate()}>
                <i className="fa fa-plus-circle" />
              </button>
            ]}
            {activeTool === 'Search' && [
              <select
                key="s_sl"
                className="form-control manga-select-search-option"
                value={this.state.search.option}
                onChange={e => this.handleChange(e, 'searchOption')}>
                <option value="Name">Name</option>
                <option value="Author">Author</option>
                <option value="Genre">Genre</option>
              </select>,
              <input
                key="s_ip"
                type="text"
                className="form-control manga-search-input"
                value={this.state.search.value}
                onChange={e => this.handleChange(e, 'searchValue')}
              />
            ]}
            {activeTool === 'Sort' && [
              <select
                key="c_sl"
                className="form-control manga-select-sort-condition"
                value={this.state.sort.option}
                onChange={e => this.handleChange(e, 'sortOption')}>
                <option value="default" hidden>
                  Select field
                </option>
                <option value="Name">Name</option>
                <option value="Rating">Rating</option>
              </select>,
              <select
                key="d_sl"
                className="form-control manga-select-sort-direction"
                value={this.state.sort.value}
                onChange={e => this.handleChange(e, 'sortValue')}>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
            ]}
          </div>
          <div className="card" style={{ margin: '0px 5px 0px 5px' }}>
            <div className="card-header" style={{ padding: '5px' }}>
              <span className="pull-left">
                <button
                  className={`manga-control-feature-button ${activeTool === 'QuickUpdate' ? 'active' : ''}`}
                  onClick={() => this.changeActiveTool('QuickUpdate')}
                  style={{ marginRight: '2px' }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Open quick update tool">
                  <i className="fa fa-plus-circle fa-fw" />
                </button>
                <button
                  className={`manga-control-feature-button ${activeTool === 'Search' ? 'active' : ''}`}
                  onClick={() => this.changeActiveTool('Search')}
                  style={{ marginRight: '2px' }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Open search tool">
                  <i className="fa fa-search fa-fw" />
                </button>
                <button
                  className={`manga-control-feature-button ${activeTool === 'Sort' ? 'active' : ''}`}
                  onClick={() => this.changeActiveTool('Sort')}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Open sort tool">
                  <i className="fa fa-sort fa-fw" />
                </button>
              </span>
              <span className="pull-right">
                <button
                  className={`manga-control-feature-button ${activeView === 'Add' ? 'active' : ''}`}
                  onClick={() => this.changeActiveView('Add')}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Open insert form">
                  <i className="fa fa-plus fa-fw" />
                </button>
                <button
                  className={`manga-control-feature-button ${activeView === 'Detail' ? 'active' : ''}`}
                  style={{ marginLeft: '2px' }}
                  onClick={() => this.changeActiveView('Detail')}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Open detail view">
                  <i className="fa fa-file-o fa-fw" />
                </button>
                <button
                  className={`manga-control-feature-button ${activeView === 'Edit' ? 'active' : ''}`}
                  style={{ marginLeft: '2px' }}
                  onClick={() => this.changeActiveView('Edit')}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Open edit form">
                  <i className="fa fa-pencil fa-fw" />
                </button>
                <button
                  className={`manga-control-feature-button ${activeView === 'Delete' ? 'active' : ''}`}
                  style={{ marginLeft: '2px' }}
                  onClick={() => this.changeActiveView('Delete')}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Open delete box">
                  <i className="fa fa-times fa-fw" />
                </button>
              </span>
            </div>
            {activeView === 'Detail' && <MangaDetailView manga={manga} />}
            {activeView === 'Delete' && <MangaDeleteView manga={manga} onSubmit={onDeleteManga}/>}
            {activeView === 'Add' && <MangaForm onSubmit={onAddManga}/>}
            {activeView === 'Edit' && <MangaForm manga={manga} onSubmit={onEditManga}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default ControlBar;
