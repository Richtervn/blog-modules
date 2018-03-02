import './SurvivalKits.css';
import _ from 'underscore';
import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';

import { PageLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';
import { sortList } from 'helpers';

import { LeftImageCardTrans } from 'components/Cards';

const getIcon = type => {
  switch (type) {
    case 'Character':
      return '/images/icons/d2-character.jpg';
    case 'Item':
      return '/images/icons/d2-item.jpg';
    case 'Store':
      return '/images/icons/d2-chest.jpg';
    default:
      return '/images/icons/d2-chest.jpg';
  }
};

class SurvivalKits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        name: '',
        type: 'default'
      },
      sortKey: '',
      sortOption: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { survivalKits, onGetSurvivalKits } = this.props;
    if (!survivalKits) {
      onGetSurvivalKits();
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { search } = this.state;
    const query = {};
    search[name] = value;
    if (search.name) query.Name = search.name;
    if (search.type !== 'default') query.Type = search.type;
    this.props.onSearchSurvivalKits(query);
    this.setState({ search: { ...this.state.search, [name]: value } });
  }

  handleSort(sKey) {
    const { sortKey, sortOption } = this.state;
    const nextState = { ...this.state };
    if (sortKey !== sKey) {
      nextState.sortKey = sKey;
      nextState.sortOption = 'ASC';
    } else {
      if (sortOption === '') {
        nextState.sortOption = 'ASC';
      }
      if (sortOption === 'ASC') {
        nextState.sortOption = 'DESC';
      }
      if (sortOption === 'DESC') {
        nextState.sortOption = '';
      }
    }

    this.setState(nextState);
  }

  render() {
    const { survivalKits, onSetFocusSurvivalKit } = this.props;
    const { sortKey, sortOption } = this.state;
    if (!survivalKits) {
      return (
        <div className="row">
          <PageLoader opacity={2} />
        </div>
      );
    }

    let sortedSurvivalKits = sortList(survivalKits, sortKey, sortOption);

    return (
      <div>
        <div className="row">
          <div className="d2-kit-feature-bar">
            <button className="btn" onClick={() => openModal('AddDiabloIISurvivalKit')}>
              <i className="fa fa-plus-circle" />
            </button>
            <div className="search">
              <input
                type="text"
                className="form-control name"
                name="name"
                placeholder="Search ..."
                onChange={this.handleChange}
                value={this.state.search.name}
              />
              <select
                className="form-control type"
                value={this.state.search.type}
                onChange={this.handleChange}
                name="type">
                <option value="default" hidden>
                  Select type
                </option>
                {['Character', 'Item', 'Store'].map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="sort">
              {['Name', 'Type', 'Rating'].map((sKey, i) => (
                <button
                  key={i}
                  className={`btn ${sortOption && sortKey === sKey && 'active'}`}
                  onClick={() => this.handleSort(sKey)}>
                  {sKey}
                  {sortOption &&
                    sortKey === sKey && (
                      <span>
                        &nbsp;<i className={`fa fa-sort-${sortOption.toLowerCase()}`} />
                      </span>
                    )}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row d2-kits-list">
          {sortedSurvivalKits.map(survivalKit => (
            <LeftImageCardTrans key={survivalKit._id} col={4} imgUrl={getIcon(survivalKit.Type)}>
              <div className="d2-kit-card">
                <div className="name">{survivalKit.Name}</div>
                <div className="rating">
                  <StarRating name={survivalKit.Name} value={survivalKit.Rating} />
                </div>
                <div className="overview">
                  {survivalKit.Overview.map((text, i) => <div key={i} className="text">{text}</div>)}
                </div>
                <div className="description">{survivalKit.Description}</div>

                <div className="feature">
                  <a
                    className="btn"
                    href={`${survivalKit.FileUrl.replace('./public', window.appConfig.API_HOST)}`}
                    download>
                    <i className="fa fa-download" />
                  </a>
                  <button
                    className="btn"
                    onClick={() => {
                      onSetFocusSurvivalKit(survivalKit._id);
                      openModal('EditDiabloIISurvivalKit');
                    }}>
                    <i className="fa fa-pencil" />
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      onSetFocusSurvivalKit(survivalKit._id);
                      openModal('DeleteDiabloIISurvivalKit');
                    }}>
                    <i className="fa fa-times" />
                  </button>
                </div>
              </div>
            </LeftImageCardTrans>
          ))}
        </div>
      </div>
    );
  }
}

export default SurvivalKits;
