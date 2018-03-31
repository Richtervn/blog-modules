import './MusicTableList.css';
import _ from 'underscore';
import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';

class MusicTableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      shiftHolding: false,
      ctrlHolding: false,
      selectedSongs: [],
      firstIndex: 0,
      rowIndex: 0,
      value: {}
    };
    this.renderSortIcon = this.renderSortIcon.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleUnselect = this.handleUnselect.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickAddToList = this.handleClickAddToList.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleClickPlaySelected = this.handleClickPlaySelected.bind(this);
  }

  handleClickAddToList(e) {
    e.stopPropagation();
    this.props.onAddToList(this.state.selectedSongs);
    this.setState({ selectedSongs: [] });
  }

  handleClickClear(e) {
    e.stopPropagation();
    this.setState({ selectedSongs: [] });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && !this.state.editing) {
      this.props.onAddToList(this.state.selectedSongs);
      this.setState({ selectedSongs: [] });
    }
    if (e.key === 'Enter' && this.state.editing) {
      this.props.onEditSong({ _id: this.props.songs[this.state.rowIndex]._id, ...this.state.value });
      this.setState({ editing: false, value: {} });
    }
    if (e.key === 'Escape' && this.state.selectedSongs.length > 0) {
      this.setState({ selectedSongs: [] });
    }
    if (e.key === 'Shift') {
      if (this.state.shiftHolding !== true) {
        this.setState({ shiftHolding: true });
      }
    }
  }

  handleDeleteClick() {
    this.props.onDeleteSongs({ ids: _.pluck(this.state.selectedSongs, '_id') });
    this.setState({ selectedSongs: [] });
  }

  handleKeyUp(e) {
    if (e.key === 'Shift') {
      this.setState({ shiftHolding: false });
    }
  }

  handleGenreSelect(song, i) {
    this.setState({ editing: true, rowIndex: i, value: { Genre: song.Genre || '' } });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ value: { [name]: value } });
  }

  handleSelect(song, index) {
    const { selectedSongs } = this.state;
    if (this.state.shiftHolding) {
      for (let i = this.state.firstIndex + 1; i <= index; i++) {
        selectedSongs.push(this.props.songs[i]);
      }
    } else {
      selectedSongs.push(song);
    }
    this.setState({ selectedSongs, firstIndex: index });
  }

  handleUnselect(songId) {
    const { selectedSongs } = this.state;
    this.setState({ selectedSongs: selectedSongs.filter(song => song._id !== songId) });
  }

  handleClickPlaySelected() {
    this.props.onPlaySongs(this.state.selectedSongs);
    this.setState({ selectedSongs: [] });
  }

  renderSortIcon(header) {
    if (!this.props.sort[header]) {
      return null;
    }

    return (
      <div className="music-table-header-sort-icon">
        <i className={`fa ${this.props.sort[header] === 'ASC' ? 'fa-sort-asc' : 'fa-sort-desc'} `} />
      </div>
    );
  }

  render() {
    const { songs, onSortSongs, onEditSong } = this.props;
    const selectedSongsId = _.pluck(this.state.selectedSongs, '_id');
    return (
      <div className="music-table" onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} tabIndex="0">
        {selectedSongsId.length > 0 && (
          <div className="music-table-options">
            <button className="btn btn-primary btn-block" onClick={this.handleClickAddToList}>
              <i className="fa fa-sign-in fa-fw" /> Add to playlist
            </button>
            <button className="btn btn-info btn-block" onClick={this.handleClickPlaySelected}>
              <i className="fa fa-play-circle-o fa-fw" /> Play selected
            </button>
            <button className="btn btn-warning btn-block" onClick={this.handleClickClear}>
              <i className="fa fa-times-circle-o fa-fw" /> Clear selected
            </button>
            <button className="btn btn-danger btn-block" onClick={this.handleDeleteClick}>
              <i className="fa fa-trash-o fa-fw" /> Delete selected
            </button>
          </div>
        )}
        <div className="music-table-header">
          <div className="music-table-row">
            <div className="artist-col" onClick={() => onSortSongs('Artist')}>
              Artist
              {this.renderSortIcon('Artist')}
            </div>
            <div className="name-col" onClick={() => onSortSongs('Name')}>
              Name
              {this.renderSortIcon('Name')}
            </div>
            <div className="rating-col" onClick={() => onSortSongs('Rating')}>
              Rating
              {this.renderSortIcon('Rating')}
            </div>
            <div className="genre-col" onClick={() => onSortSongs('Genre')}>
              Genre
              {this.renderSortIcon('Genre')}
            </div>
          </div>
        </div>
        <div className="music-table-body">
          {songs.map((song, i) => (
            <div
              className={`music-table-row ${_.contains(selectedSongsId, song._id) ? 'selected' : ''}`}
              key={i}
              onClick={() =>
                _.contains(selectedSongsId, song._id) ? this.handleUnselect(song._id) : this.handleSelect(song, i)
              }>
              <div className="artist-col">{song.Artist}</div>
              <div className="name-col">{song.Name}</div>
              <div className="rating-col">
                <StarRating
                  name={`rts-${i}`}
                  value={song.Rating}
                  onStarClick={value => onEditSong({ _id: song._id, Rating: value })}
                />
              </div>
              <div
                className="genre-col"
                onClick={e => {
                  e.stopPropagation();
                  this.handleGenreSelect(song, i);
                }}>
                {this.state.editing && this.state.rowIndex === i ? (
                  <input
                    className="hot-edit-input"
                    type="text"
                    value={this.state.value.Genre}
                    onChange={this.handleChange}
                    name="Genre"
                    autoFocus
                    onBlur={() => this.setState({ editing: false })}
                    onFocus={e => e.target.select()}
                    onKeyPress={this.handleKeyDown}
                  />
                ) : (
                  <div>{song.Genre}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MusicTableList;
