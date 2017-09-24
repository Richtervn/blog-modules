import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';

const initialState = {
  file: null,
  Name: '',
  Publisher: '',
  Periods: [''],
  Introduce: '',
  Rating: 0
};

export default class AddMangaForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.getDefaultState = this.getDefaultState.bind(this);
    this.state = this.getDefaultState(this.props.game);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getDefaultState(nextProps.game));
  }

  getDefaultState(gameState) {
    const { Periods } = gameState;
    return { ...gameState, Periods: Periods.slice(0) };
  }

  handleChange(event, index) {
    const nextState = { ...this.state };
    const { name, value, files } = event.target;
    switch (name) {
      case 'file':
        nextState.file = files[0];
        break;
      case 'Periods':
        nextState.Periods[index] = value;
        break;
      default:
        nextState[name] = value;
        break;
    }
    this.setState(nextState);
  }

  handleAdd(name) {
    this.state[name].push('');
    this.setState(this.state);
  }

  handleRemove(name, index) {
    this.state[name].splice(index, 1);
    this.setState(this.state);
  }

  handleRating(value) {
    this.state.Rating = value;
    this.setState(this.state);
  }

  handleSubmit() {
    this.props.onSubmit(this.state);
    this.handleClear();
  }

  handleClear() {
    this.setState(this.getDefaultState(this.props.game));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group add-manga-form-group">
          <label className="add-manga-form-group">
            <strong>Cover:</strong>
          </label>
          <input
            type="file"
            className="form-control add-manga-form-input"
            onChange={this.handleChange}
            name="file"
          />
        </div>
        <div className="form-group add-manga-form-group">
          <label className="add-manga-form-group">
            <strong>Name:</strong>
          </label>
          <input
            type="text"
            className="form-control add-manga-form-input"
            onChange={this.handleChange}
            value={this.state.Name}
            name="Name"
          />
        </div>
        <div className="form-group add-manga-form-group">
          <label className="add-manga-form-group">
            <strong>Publisher:</strong>
          </label>
          <input
            type="text"
            className="form-control add-manga-form-input"
            onChange={this.handleChange}
            value={this.state.Publisher}
            name="Publisher"
          />
        </div>
        <div className="form-group add-manga-form-group">
          <label className="add-manga-form-group">
            <strong>Periods:</strong>
          </label>
          {this.state.Periods.map((aka, i) => (
            <div className="row no-row-margin" key={i}>
              <div className="col-10 no-row-margin">
                <input
                  type="text"
                  className="form-control add-manga-form-input"
                  onChange={e => this.handleChange(e, i)}
                  value={this.state.Periods[i]}
                  name="Periods"
                />
              </div>
              <div className="col-2 no-row-margin">
                <button
                  className="btn btn-danger channel-button"
                  type="button"
                  onClick={() => this.handleRemove('Periods', i)}>
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleAdd('Periods')}>
            <span>
              <i className="fa fa-plus" />
            </span>&nbsp; Add Period
          </button>
        </div>

        <div className="form-group add-manga-form-group">
          <label className="add-manga-form-group">
            <strong>Introduce:</strong>
          </label>
          <textarea
            rows={3}
            className="form-control add-manga-form-input"
            onChange={this.handleChange}
            value={this.state.Introduce}
            name="Introduce"
          />
        </div>
        <div className="form-group add-manga-form-group">
          <label className="add-manga-form-group">
            <strong>Rating:</strong>
          </label>
          <div className="text-center add-manga-star-rating">
            <StarRating
              className="larger-star-rating"
              name="add-manga-star-rating"
              value={this.state.Rating}
              onStarClick={value => this.handleRating(value)}
            />
          </div>
        </div>
        <div className="form-group add-manga-form-group">
          <div className="text-center">
            <button className="btn btn-primary" onClick={this.handleSubmit} type="button">
              Submit
            </button>
            <button className="btn btn-danger" type="button" onClick={this.handleClear}>
              Undo
            </button>
          </div>
        </div>
      </form>
    );
  }
}
