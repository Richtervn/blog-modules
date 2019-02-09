import './UnsavedMangas.css';
import React, { useState } from 'react';

import { hideModal } from 'common/Modal';
import appConfig from 'app/config';

export default ({ unsavedMangas, onConfirm }) => {
  const [unsavedIndex, setUnsavedIndex] = useState(0);

  const manga = unsavedMangas[unsavedIndex];

  return [
    <div className="modal-header" key="usm-h">
      <div className="modal-label">Save this manga?</div>
    </div>,
    <div className="modal-body"  key="usm-b">
      <div className="card-content">
        <div className="text-center">
          <h4>{manga.Name}</h4>
          <img
            className="unsaved-manga-cover"
            src={manga.CoverUri ? manga.CoverUri.replace('./public', appConfig.API_HOST) : null}
            alt={`${manga.Name} cover`}
          />
        </div>
        <p>
          <strong>Reading Chapter : {manga.maxChapter}</strong>
        </p>

        {manga.Authors && manga.Authors.length > 0 && (
          <p>
            <strong>Authors : </strong>
            {manga.Authors.map((author, i) => (
              <span key={i} className="badge badge-success mgr-genre-tag">
                {author}
              </span>
            ))}
          </p>
        )}

        {manga.Genre && manga.Genre.length > 0 && (
          <p>
            <strong>Genres : </strong>
            {manga.Genre.map((genre, i) => (
              <span key={i} className="badge badge-info mgr-genre-tag">
                {genre}
              </span>
            ))}
          </p>
        )}

        {manga.Introduce && (
          <p style={{ wordWrap: 'break-word' }}>
            <strong>Introduce : </strong>
            {manga.Introduce}
          </p>
        )}

        <p>
          <strong>Aka : </strong>
          {manga.Aka.map((aka, i) => (
            <span key={i} className="badge badge-warning mr-aka-tag">
              {aka}
            </span>
          ))}
        </p>
      </div>
    </div>,
    <div className="modal-footer"  key="usm-f">
      <button
        className="btn btn-success"
        onClick={() => {
          onConfirm({ ...manga, saved: true });
          unsavedIndex < unsavedMangas.length - 1 ? setUnsavedIndex(unsavedIndex + 1) : hideModal();
        }}>
        Yes
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          onConfirm({ ...manga, saved: false });
          unsavedIndex < unsavedMangas.length - 1 ? setUnsavedIndex(unsavedIndex + 1) : hideModal();
        }}>
        No
      </button>
    </div>
  ];
};
