import './IconChooser.css';
import _ from 'underscore';
import iconList from './iconList';
import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

import PageContainer from 'common/PageContainer';

class IconChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'All Icons',
      filter: '',
      selectedIcon: '',
      size: 'default',
      additionClass: 'default',
      color: ''
    };
    this.getIcons = this.getIcons.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.renderSelectedIcon = this.renderSelectedIcon.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextState = { ...this.state };
    switch (name) {
      default:
        nextState[name] = value;
        break;
    }
    this.setState(nextState);
  }

  handleColorChange(color) {
    this.setState({ color });
  }

  getIcons() {
    let icons = [];
    if (this.state.category === 'All Icons') {
      Object.keys(iconList).forEach(category => {
        icons = icons.concat(iconList[category]);
      });
      return _.uniq(icons);
    } else {
      return iconList[this.state.category];
    }
  }

  renderSelectedIcon() {
    if (this.state.selectedIcon) {
      let classes = `fa fa-${this.state.selectedIcon}`;
      if (this.state.size !== 'default') classes += ` fa-${this.state.size}`;
      if (this.state.additionClass !== 'default') classes += ` ${this.state.additionClass}`;
      let colorString = '#000000';
      if (this.state.color) {
        const { color } = this.state;
        if (color.rgb.a !== 1) {
          colorString = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
        } else {
          colorString = color.hex;
        }
      }

      return (
        <div className="selected-icon-box" style={{ color: colorString }}>
          <i className={classes} />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <PageContainer>
        <div className="row">
          <div className="col-2">
            <div className="row">
              <div className="icon-filter">
                <input
                  className="form-control"
                  type="text"
                  name="filter"
                  value={this.state.filter}
                  onChange={this.handleChange}
                />
                <i className="fa fa-search" />
              </div>
              <div className="icon-select-category">
                <select
                  className="form-control"
                  value={this.state.category}
                  onChange={this.handleChange}
                  name="category">
                  <option value="All Icons">All Icons</option>
                  {Object.keys(iconList).map((category, i) => (
                    <option value={category} key={i}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {this.renderSelectedIcon()}
              <div className="icon-select-category">
                <select className="form-control" value={this.state.size} onChange={this.handleChange} name="size">
                  <option value="default">Size</option>
                  <option value="lg">lg</option>
                  <option value="2x">2x</option>
                  <option value="3x">3x</option>
                  <option value="4x">4x</option>
                  <option value="5x">5x</option>
                </select>
              </div>
              <div className="icon-select-category">
                <select
                  className="form-control"
                  value={this.state.additionClass}
                  onChange={this.handleChange}
                  name="additionClass">
                  <option value="default">Addtion Class</option>
                  <option value="fa-spin">fa-spin</option>
                  <option value="fa-pulse">fa-pulse</option>
                  <option value="fa-border">fa-border</option>
                  <option value="fa-rotate-90">fa-rotate-90</option>
                  <option value="fa-rotate-180">fa-rotate-180</option>
                  <option value="fa-rotate-270">fa-rotate-270</option>
                  <option value="fa-flip-horizontal">fa-flip-horizontal</option>
                  <option value="fa-flip-vertical">fa-flip-vertical</option>
                </select>
              </div>
              <div className="icon-select-category">
                <ChromePicker color={this.state.color} onChange={this.handleColorChange} />
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="row icon-list-row">
              {this.getIcons()
                .filter(icon => icon.indexOf(this.state.filter) !== -1)
                .map((icon, i) => (
                  <div className="col-2" key={i}>
                    <div className="row">
                      <div
                        className={`icon-card ${this.state.selectedIcon === icon ? 'active' : ''}`}
                        onClick={() => this.setState({ selectedIcon: icon })}>
                        <div className="icon-preview">
                          <i className={`fa fa-fw fa-${icon} fa-3x`} />
                        </div>
                        <div className="icon-name">{icon}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default IconChooser;
