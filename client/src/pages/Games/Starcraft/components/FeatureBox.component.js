import './FeatureBox.css';
import React from 'react';

const availableOptions = ['ASC', 'DESC'];
const availableKeys = ['Name', 'Rating'];

export default ({
  currentFeature,
  onChangeCurrentFeature,
  onAddClick,
  search,
  sortKey,
  sortOption,
  onChangeSortKey,
  onChangeSortOption,
  onChangeSearch,
  onSearch,
  onSort
}) => (
  <div className="sc-feature-box">
    <div className="sc-feature-box-btns">
      <button className="btn" onClick={() => onAddClick()}>
        <i className="fa fa-plus-circle" />
      </button>
      <button
        className={`btn ${currentFeature === 'Search' ? 'active' : ''}`}
        onClick={() => onChangeCurrentFeature('Search')}>
        <i className="fa fa-search" />
      </button>
      <button
        className={`btn ${currentFeature === 'Sort' ? 'active' : ''}`}
        onClick={() => onChangeCurrentFeature('Sort')}>
        <i className="fa fa-sort" />
      </button>
    </div>
    <div className="sc-feature-box-input-wrapper">
      {currentFeature === 'Search' && (
        <input
          type="text"
          className="sc-feature-box-input"
          value={search}
          onChange={e => {
            const { value } = e.target;
            onChangeSearch(value);
            onSearch(value);
          }}
        />
      )}
      {currentFeature === 'Sort' && (
        <div>
          {availableKeys.map((sKey, i) => (
            <div key={i} className="form-check form-check-inline sc-side-feature-radio">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  value={sKey}
                  name="option"
                  checked={sortKey === sKey}
                  onChange={e => {
                    const { value } = e.target;
                    onChangeSortKey(value);
                    onSort({ [value]: sortOption });
                  }}
                />
                &nbsp;{sKey}
              </label>
            </div>
          ))}
          {availableOptions.map((sOpt, i) => (
            <div key={i} className="form-check form-check-inline sc-side-feature-radio">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  value={sOpt}
                  name="type"
                  checked={sortOption === sOpt}
                  onChange={e => {
                    const { value } = e.target;
                    onChangeSortOption(value);
                    if (sortKey) {
                      onSort({ [sortKey]: value });
                    }
                  }}
                />
                &nbsp;{sOpt}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
