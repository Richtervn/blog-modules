import './MangaDeleteView.css';
import React from 'react';

export default ({ manga, onSubmit }) => {
  if (!manga) {
    return (
      <div style={{ padding: '5px' }}>
        <i>No current selected manga</i>
      </div>
    );
  }
  return (
    <div className="manga-delete-view">
      <div className="alert alert-danger" role="alert" style={{ margin: 0 }}>
        <p>
          Are you really sure want to delete <strong>{manga.Name}</strong> ?
        </p>
        <p className="text-center">
          <img
            src={
              manga.CoverUri ? manga.CoverUri.replace('./public', 'http://localhost:3000') : null
            }
            alt={`${manga.Name} cover`}
          />
        </p>
        <p>
          You've been reading it to chapter <strong>{manga.Chapter}</strong> so far. Action can't be
          backed up.
        </p>
        <div className="text-center">
          <button className="btn btn-danger" onClick={() => onSubmit(manga._id)}>
            <span>
              <i className="fa fa-trash-o fa-lg" />
            </span>&nbsp;Delete it anyway
          </button>
        </div>
      </div>
    </div>
  );
};
