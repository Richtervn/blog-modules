import './LyricsBox.css';
import React, { Component } from 'react';

class LyricsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: this.props.lyrics,
      editing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ lyrics: nextProps.lyrics });
  }

  render() {
    const { isShow, song, onSave, onClose } = this.props;
    const { editing, lyrics } = this.state;

    if (!isShow) {
      return null;
    }
    return (
      <div id="lyrics-box">
        <div className="header">
          {song.Name} Lyrics<span className="pull-right">
            <i className="fa fa-times" onClick={() => onClose()}/>
          </span>
        </div>
        <div className="content">
          {!editing && !lyrics && <div className="no-lyrics">No lyrics found</div>}
          {!editing && lyrics && <div className="lyrics">{lyrics}</div>}
          {editing && <textarea rows={15} value={lyrics} onChange={e => this.setState({ lyrics: e.target.value })} />}
        </div>
        <div className="feature">
          {!editing && (
            <button className="btn btn-primary" onClick={() => this.setState({ editing: true })}>
              Edit
            </button>
          )}
          {editing && (
            <button
              className="btn btn-primary"
              onClick={() => {
                onSave({ Lyrics: this.state.lyrics, _id: song._id });
                this.setState({ editing: false });
              }}>
              Save
            </button>
          )}
          {!editing && (
            <button className="btn btn-danger" onClick={() => onClose()}>
              Close
            </button>
          )}
          {editing && (
            <button
              className="btn btn-danger"
              onClick={() => this.setState({ editing: false, lyrics: this.props.lyrics })}>
              Cancel
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default LyricsBox;
