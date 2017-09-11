import React from 'react';

export default ({ manga, onSubmit }) => (
  <div>
    <div className="alert alert-danger" role="alert">
      <p>
        Are you really sure want to delete <strong>{manga.Name}</strong> ?
      </p>
      <div className="text-center">
        <img src={manga.CoverUri ? manga.CoverUri.replace('./public', 'http://localhost:3000') : null} />
      </div>
      <p>
        You've been reading it to chapter <strong>{manga.Chapter}</strong> so far. Action can't be backed up.
      </p>
      <button className="btn btn-danger" onClick={() => onSubmit(manga._id)}>
        <span>
          <i className="fa fa-trash-o fa-lg" />
        </span>&nbsp;Delete it anyway
      </button>
    </div>
  </div>
);
