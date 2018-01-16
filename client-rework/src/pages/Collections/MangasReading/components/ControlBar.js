import './ControlBar.css';
import React, { Component } from 'react';

import ButtonsBar from 'components/ButtonsBar';

import MangaForm from './MangaForm';
import MangaDetailView from './MangaDetailView';
import MangaDeleteView from './MangaDeleteView';

class ControlBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTool: 'QuickUpdate',
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

  render() {
    const { activeTool } = this.state;
    const { manga, onAddManga, onEditManga, onDeleteManga, activeView, onSetActiveView } = this.props;

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
                className="btn btn-success manga-feature-button"
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
              <ButtonsBar
                customClass="pull-left"
                features={tools}
                featureClass="manga-control-feature-button"
                activeFeature={activeTool}
                onChangeFeature={this.changeActiveTool}
              />
              <ButtonsBar
                customClass="pull-right"
                features={views}
                featureClass="manga-control-feature-button"
                activeFeature={activeView}
                onChangeFeature={onSetActiveView}
              />
            </div>
            {activeView === 'Detail' && <MangaDetailView manga={manga} />}
            {activeView === 'Delete' && <MangaDeleteView manga={manga} onSubmit={onDeleteManga} />}
            {activeView === 'Add' && <MangaForm onSubmit={onAddManga} />}
            {activeView === 'Edit' && <MangaForm manga={manga} onSubmit={onEditManga} />}
          </div>
        </div>
      </div>
    );
  }
}

export default ControlBar;
