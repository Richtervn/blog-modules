import './FeatureBox.css';
import React from 'react';

const availableTypes = ['ASC', 'DESC'];
const availableOptions = ['Name', 'Rating'];

export default ({ currentFeature, onChangeCurrentFeature, onAddClick }) => (
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
      {currentFeature === 'Search' && <input type="text" className="sc-feature-box-input" />}
      {currentFeature === 'Sort' && (
        <div>
          {availableOptions.map((option, i) => (
            <div key={i} className="form-check form-check-inline sc-side-feature-radio">
              <label className="form-check-label">
                <input className="form-check-input" type="radio" value={option} name="option" />
                &nbsp;{option}
              </label>
            </div>
          ))}
          {availableTypes.map((type, i) => (
            <div key={i} className="form-check form-check-inline sc-side-feature-radio">
              <label className="form-check-label">
                <input className="form-check-input" type="radio" value={type} name="type" />
                &nbsp;{type}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

// onChange={this.handleChange}
// checked={this.state.option == option}

//                   onChange={this.handleChange}
// checked={this.state.type == type}
