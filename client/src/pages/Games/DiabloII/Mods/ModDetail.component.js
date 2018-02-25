import './ModDetail.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from 'react-star-rating-component';

// DiabloIIMods

const ModDetail = ({ mod, history }) => (
  <div className="row">
    <div className="d2-mod-detail">
      <div className="feature">
        <button className="btn">
          <i className="fa fa-pencil" />
        </button>
        <button className="btn">
          <i className="fa fa-times" />
        </button>
      </div>
      <div className="info">
        <div className="name">
          {mod.Name} v{mod.ModVersion}
        </div>
        <div className="rating">
          <StarRating value={mod.Rating} name={mod.Name} />
        </div>
        <div className="icon">
          <img src={mod.IconUrl.replace('./public', window.appConfig.API_HOST)} alt={mod.Name} />
        </div>
        <div className="version">LOD Version: {mod.Version}</div>
      </div>
      <div className="text-center">
        <strong>Overview: </strong>
      </div>
      <div className="overview flex-center">
        <ul>{mod.Overview.map((text, i) => <li key={i}>{text}</li>)}</ul>
      </div>
      <div className="html-binding">
        {mod.HTML && (
          <div className={`binding ${!mod.CSS ? 'text-center' : ''}`} dangerouslySetInnerHTML={{ __html: mod.HTML }} />
        )}
        {!mod.HTML && <div className="notice">No content</div>}
        {mod.CSS && <style>{mod.CSS}</style>}
        <div className="feature">
          <button className="btn" onClick={() => history.push(`/content_mirror/DiabloIIMods/${mod._id}`)}>
            <i className="fa fa-edit" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(ModDetail);
