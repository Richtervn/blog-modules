import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';

const initialState = {
  file: null,
  Name: '',
  Aka: [''],
  Authors: [''],
  Introduce: '',
  Chapter: '',
  Genre: [''],
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
    this.state = this.getDefaultState(initialState);
  }

  getDefaultState(mangaState) {
    const { Aka, Genre, Authors } = mangaState;
    return { ...mangaState, Aka: Aka.slice(0), Authors: Authors.slice(0), Genre: Genre.slice(0) };
  }

  handleChange(event, index) {
    const nextState = { ...this.state };
    const { name, value, files } = event.target;
    switch (name) {
      case 'file':
        nextState.file = files[0];
        break;
      case 'Aka':
        nextState.Aka[index] = value;
        break;
      case 'Genre':
        nextState.Genre[index] = value;
        break;
      case 'Authors':
        nextState.Authors[index] = value;
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
    this.setState(this.getDefaultState(initialState));
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
            <strong>Aka:</strong>
          </label>
          {this.state.Aka.map((aka, i) => (
            <div className="row no-row-margin" key={i}>
              <div className="col-10 no-row-margin">
                <input
                  type="text"
                  className="form-control add-manga-form-input"
                  onChange={e => this.handleChange(e, i)}
                  value={this.state.Aka[i]}
                  name="Aka"
                />
              </div>
              <div className="col-2 no-row-margin">
                <button
                  className="btn btn-danger channel-button"
                  type="button"
                  onClick={() => this.handleRemove('Aka', i)}>
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleAdd('Aka')}>
            <span>
              <i className="fa fa-plus" />
            </span>&nbsp; Add Aka
          </button>
        </div>
        <div className="form-group add-manga-form-group">
          <label className="add-manga-form-group">
            <strong>Authors:</strong>
          </label>
          {this.state.Authors.map((author, i) => (
            <div className="row no-row-margin" key={i}>
              <div className="col-10 no-row-margin">
                <input
                  type="text"
                  className="form-control add-manga-form-input"
                  onChange={e => this.handleChange(e, i)}
                  value={this.state.Authors[i]}
                  name="Authors"
                />
              </div>
              <div className="col-2 no-row-margin">
                <button
                  className="btn btn-danger channel-button"
                  type="button"
                  onClick={() => this.handleRemove('Authors', i)}>
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleAdd('Authors')}>
            <span>
              <i className="fa fa-plus" />
            </span>&nbsp; Add Author
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
            <strong>Chapter:</strong>
          </label>
          <input
            type="text"
            className="form-control add-manga-form-input"
            onChange={this.handleChange}
            value={this.state.Chapter}
            name="Chapter"
          />
        </div>
        <div className="form-group add-manga-form-group">
          <label className="add-manga-form-group">
            <strong>Genre:</strong>
          </label>
          {this.state.Genre.map((genre, i) => (
            <div className="row no-row-margin" key={i}>
              <div className="col-10 no-row-margin">
                <input
                  type="text"
                  className="form-control add-manga-form-input"
                  onChange={e => this.handleChange(e, i)}
                  value={this.state.Genre[i]}
                  name="Genre"
                />
              </div>
              <div className="col-2 no-row-margin">
                <button
                  className="btn btn-danger channel-button"
                  type="button"
                  onClick={() => this.handleRemove('Genre', i)}>
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleAdd('Genre')}>
            <span>
              <i className="fa fa-plus" />
            </span>&nbsp; Add Genre
          </button>
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
              Clear
            </button>
          </div>
        </div>
      </form>
    );
  }
}
