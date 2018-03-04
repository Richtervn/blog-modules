import _ from 'underscore';
import './ControlBar.css';
import React, { Component } from 'react';

import { ButtonsNavBar } from 'components/Buttons';

import MangaForm from './MangaForm';
import MangaDetailView from './MangaDetailView.container';
import MangaDeleteView from './MangaDeleteView';

const tools = [
  { name: 'QuickUpdate', icon: 'fa-plus-circle', tooltip: 'Open quick update tool' },
  { name: 'Search', icon: 'fa-search', tooltip: 'Open search tool' },
  { name: 'Sort', icon: 'fa-sort', tooltip: 'Open sort tool' }
];

const views = [
  { name: 'Add', icon: 'fa-plus', tooltip: 'Open insert form' },
  { name: 'Detail', icon: 'fa-file-o', tooltip: 'Open detail view' },
  { name: 'Edit', icon: 'fa-pencil', tooltip: 'Open edit form' },
  { name: 'Delete', icon: 'fa-times', tooltip: 'Open delete box' }
];


class ControlBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickUrl: '',
      sort: {
        option: 'default',
        value: 'ASC'
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuickUpdate = this.handleQuickUpdate.bind(this);
  }

  handleChange(event, prefix) {
    const { name, value } = event.target;
    const { search, onChangeSearchOption, onChangeSearchValue, onSearchManga } = this.props;
    const throttledSearch = _.throttle(onSearchManga, 500);
    switch (prefix) {
      case 'searchOption':
        onChangeSearchOption(value);
        break;
      case 'searchValue':
        onChangeSearchValue(value);
        throttledSearch({ [search.option]: value });
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

  render() {
    const {
      manga,
      onAddManga,
      onEditManga,
      onDeleteManga,
      activeView,
      onSetActiveView,
      onChangeActiveTool,
      activeTool,
      search
    } = this.props;

    return (
      <div className="row">
        <div id="mgr-control-bar">
          <div className="wrapper">
            {activeTool === 'QuickUpdate' && [
              <input
                key="qu_ip"
                type="text"
                className="form-control quick-update"
                value={this.state.quickUrl}
                onChange={this.handleChange}
                name="quickUrl"
              />,
              <button
                key="qu_bt"
                className="btn btn-success"
                disabled={!this.state.quickUrl}
                onClick={() => this.handleQuickUpdate()}>
                <i className="fa fa-plus-circle" />
              </button>
            ]}
            {activeTool === 'Search' && [
              <select
                id="mgr-search-select"
                key="s_sl"
                className="form-control"
                value={search.option}
                onChange={e => this.handleChange(e, 'searchOption')}>
                <option value="Name">Name</option>
                <option value="Author">Author</option>
                <option value="Genre">Genre</option>
              </select>,
              <input
                id="mgr-search-input"
                key="s_ip"
                type="text"
                className="form-control"
                value={search.value}
                onChange={e => this.handleChange(e, 'searchValue')}
              />
            ]}
            {activeTool === 'Sort' && [
              <select
                id="mgr-sort-condition"
                key="c_sl"
                className="form-control"
                value={this.state.sort.option}
                onChange={e => this.handleChange(e, 'sortOption')}>
                <option value="default" hidden>
                  Select field
                </option>
                <option value="Name">Name</option>
                <option value="Rating">Rating</option>
              </select>,
              <select
                id="mgr-sort-option"
                key="d_sl"
                className="form-control"
                value={this.state.sort.value}
                onChange={e => this.handleChange(e, 'sortValue')}>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
            ]}
          </div>
          <div className="card">
            <div className="card-header">
              <ButtonsNavBar
                customClass="pull-left mgr-btn-nav-bar"
                features={tools}
                activeFeature={activeTool}
                onChangeFeature={tool => onChangeActiveTool(tool)}
              />
              <ButtonsNavBar
                customClass="pull-right mgr-btn-nav-bar"
                features={views}
                activeFeature={activeView}
                onChangeFeature={onSetActiveView}
              />
            </div>
            {activeView === 'Detail' && <MangaDetailView />}
            {activeView === 'Delete' && <MangaDeleteView manga={manga} onSubmit={onDeleteManga} />}
            {activeView === 'Add' && <MangaForm onSubmit={onAddManga} />}
            {activeView === 'Edit' && <MangaForm manga={manga} onSubmit={onEditManga} edit />}
          </div>
        </div>
      </div>
    );
  }
}

export default ControlBar;
