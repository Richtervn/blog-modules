import './MangaForm.css';
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
  Rating: 0,
  NewChapter: ''
};

class MangaForm extends Component {
  constructor(props) {
    super(props);
    if (this.props.manga) {
      this.state = this.getDefaultState(this.props.manga);
    } else {
      this.state = this.getDefaultState(initialState);
    }
    this.handleChange = this.handleChange.bind(this);
    this.getDefaultState = this.getDefaultState.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.manga &&
      nextProps.manga &&
      parseInt(this.props.manga._id, 10) !== parseInt(nextProps.manga._id, 10)
    ) {
      this.setState(this.getDefaultState(nextProps.manga));
    }
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

  getDefaultState(mangaState) {
    const { Aka, Genre, Authors } = mangaState;
    mangaState.Rating = parseInt(mangaState.Rating, 10);
    return { ...mangaState, Aka: Aka.slice(0), Authors: Authors.slice(0), Genre: Genre.slice(0) };
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
    this.setState({ Rating: value });
  }

  handleSubmit() {
    this.props.onSubmit(this.state);
    if (!this.props.manga) {
      this.handleClear();
    }
  }

  handleClear() {
    this.setState(this.getDefaultState(initialState));
  }

  handleUndo() {
    const { manga } = this.props;
    this.setState(this.getDefaultState(manga));
  }

  render() {
    if (this.props.edit && !this.props.manga) {
      return (
        <div className="card-content manga-form">
          <i>No current selected manga</i>
        </div>
      );
    }

    return [
      <div key="mg-fb" className="card-content manga-form">
        <form id="manga-form">
          <div className="form-group">
            <label>
              <strong>Cover:</strong>
            </label>
            <input
              type="file"
              className="form-control manga-form-input"
              onChange={this.handleChange}
              name="file"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              className="form-control manga-form-input"
              onChange={this.handleChange}
              value={this.state.Name}
              name="Name"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Aka:</strong>
            </label>
            {this.state.Aka.map((aka, i) => (
              <div key={i} className="manga-form-array-input">
                <input
                  type="text"
                  className="form-control manga-form-input"
                  onChange={e => this.handleChange(e, i)}
                  value={this.state.Aka[i]}
                  name="Aka"
                />
                <button
                  className="btn btn-danger manga-form-array-btn"
                  type="button"
                  onClick={() => this.handleRemove('Aka', i)}>
                  <i className="fa fa-times" />
                </button>
              </div>
            ))}
            <button
              className="btn btn-primary manga-form-add-array-btn"
              type="button"
              onClick={() => this.handleAdd('Aka')}>
              <span>
                <i className="fa fa-plus" />
              </span>&nbsp; Add Aka
            </button>
          </div>
          <div className="form-group">
            <label>
              <strong>Authors:</strong>
            </label>
            {this.state.Authors.map((author, i) => (
              <div key={i} className="manga-form-array-input">
                <input
                  type="text"
                  className="form-control manga-form-input"
                  onChange={e => this.handleChange(e, i)}
                  value={this.state.Authors[i]}
                  name="Authors"
                />

                <button
                  className="btn btn-danger manga-form-array-btn"
                  type="button"
                  onClick={() => this.handleRemove('Authors', i)}>
                  <i className="fa fa-times" />
                </button>
              </div>
            ))}
            <button
              className="btn btn-primary manga-form-add-array-btn"
              type="button"
              onClick={() => this.handleAdd('Authors')}>
              <span>
                <i className="fa fa-plus" />
              </span>&nbsp; Add Author
            </button>
          </div>
          <div className="form-group">
            <label>
              <strong>Introduce:</strong>
            </label>
            <textarea
              rows={3}
              className="form-control manga-form-input"
              onChange={this.handleChange}
              value={this.state.Introduce}
              name="Introduce"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Chapter:</strong>
            </label>
            <input
              type="text"
              className="form-control manga-form-input"
              onChange={this.handleChange}
              value={this.state.Chapter}
              name="Chapter"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Lastest chapter:</strong>
            </label>
            <input
              type="text"
              className="form-control manga-form-input"
              onChange={this.handleChange}
              value={this.state.NewChapter}
              name="NewChapter"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Genre:</strong>
            </label>
            {this.state.Genre.map((genre, i) => (
              <div key={i} className="manga-form-array-input">
                <input
                  type="text"
                  className="form-control manga-form-input"
                  onChange={e => this.handleChange(e, i)}
                  value={this.state.Genre[i]}
                  name="Genre"
                />
                <button
                  className="btn btn-danger manga-form-array-btn"
                  type="button"
                  onClick={() => this.handleRemove('Genre', i)}>
                  <i className="fa fa-times" />
                </button>
              </div>
            ))}
            <button
              className="btn btn-primary manga-form-add-array-btn"
              type="button"
              onClick={() => this.handleAdd('Genre')}>
              <span>
                <i className="fa fa-plus" />
              </span>&nbsp; Add Genre
            </button>
          </div>
          <div className="form-group">
            <label>
              <strong>Rating:</strong>
            </label>
            <div className="text-center add-manga-star-rating" style={{ marginTop: '-15px' }}>
              <StarRating
                className="larger-star-rating"
                name="manga-form-rating"
                value={this.state.Rating}
                onStarClick={value => this.handleRating(value)}
              />
            </div>
          </div>
        </form>
      </div>,
      <div key="mg-ff" className="card-footer text-center" style={{ padding: '5px' }}>
        <button
          className="btn btn-primary manga-control-form-btn"
          onClick={() => this.handleSubmit()}>
          Submit
        </button>
        {!this.props.manga && (
          <button
            className="btn btn-danger manga-control-form-btn"
            onClick={() => this.handleClear()}>
            Clear
          </button>
        )}
        {this.props.manga && (
          <button
            className="btn btn-danger manga-control-form-btn"
            onClick={() => this.handleUndo()}>
            Undo
          </button>
        )}
      </div>
    ];
  }
}

export default MangaForm;
