import _ from 'underscore';
import './ControlBar.css';
import React, { Component } from 'react';

import { ButtonsNavBar } from 'components/Buttons';
import { DoubleSelectGroup, InputWithButton, InputSelectGroup } from 'components/Inputs';

import MangaForm from './MangaForm';
import MangaDetailView from './MangaDetailView.container';
import MangaDeleteView from './MangaDeleteView';

const tools = [
  { name: 'QuickUpdate', icon: 'fa-plus-circle', tooltip: 'Open quick update tool' },
  { name: 'Crawl', icon: 'fa-copy', tooltip: 'Crawl a link' },
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
      crawl: '',
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

  handleCrawl() {
    this.props.onCrawl({ url: this.state.crawl });
    this.setState({ crawl: '' });
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
            {activeTool === 'QuickUpdate' && (
              <InputWithButton
                value={this.state.quickUrl}
                onChange={this.handleChange}
                name="quickUrl"
                btnIcon="plus-circle"
                btnClass="btn-success"
                btnDisabled={!this.state.quickUrl}
                onClick={() => this.handleQuickUpdate()}
                customClass="mgr-quick-update"
                placeholder="Reading url"
              />
            )}
            {activeTool === 'Search' && (
              <InputSelectGroup
                selectValue={search.option}
                onChangeSelect={e => this.handleChange(e, 'searchOption')}
                options={['Name', 'Authors', 'Genre']}
                inputValue={search.value}
                inputPlaceholder="Search ..."
                onChangeInput={e => this.handleChange(e, 'searchValue')}
              />
            )}
            {activeTool === 'Sort' && (
              <DoubleSelectGroup
                leftValue={this.state.sort.option}
                rightValue={this.state.sort.value}
                leftOptions={['Name', 'Rating']}
                rightOptions={['ASC', 'DESC']}
                onLeftChange={e => this.handleChange(e, 'sortOption')}
                onRightChange={e => this.handleChange(e, 'sortValue')}
                leftPlaceholder="Select field"
              />
            )}
            {activeTool === 'Crawl' && (
              <InputWithButton
                value={this.state.crawl}
                onChange={this.handleChange}
                name="crawl"
                btnIcon="plus-circle"
                btnClass="btn-primary"
                btnDisabled={!this.state.crawl}
                onClick={() => this.handleCrawl()}
                customClass="mgr-quick-update"
                placeholder="Crawl url"
              />
            )}
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
