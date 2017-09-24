import React from 'react';

export default ({ game, onSubmit }) => (
  <div>
    <div className="alert alert-danger" role="alert">
      <p>
        Are you really sure want to delete <strong>{game.Name}</strong> ?
      </p>
      <div className="text-center">
        <img src={game.CoverUri ? game.CoverUri.replace('./public', 'http://localhost:3000') : null} />
      </div>
      <p>
        You've been playing <strong>{game.Name}</strong> for the following periods <strong>{game.Periods.join(', ')}</strong>. Action can't be backed up.
      </p>
      <button className="btn btn-danger" onClick={() => onSubmit(game._id)}>
        <span>
          <i className="fa fa-trash-o fa-lg" />
        </span>&nbsp;Delete it anyway
      </button>
    </div>
  </div>
);
