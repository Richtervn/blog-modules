import './ModDetail.css';
import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';

export default ({ mod }) => (
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
        <div className="name">{mod.Name} v{mod.ModVersion}</div>
        <div className="rating">
          <StarRating value={mod.Rating} name={mod.Name} />
        </div>
        <div className="icon">
          <img src={mod.IconUrl.replace('./public', window.appConfig.API_HOST)} alt={mod.Name} />
        </div>
        <div className="version">LOD Version: {mod.Version}</div>
      </div>
      <div className="text-center"><strong>Overview: </strong></div>
      <div className="overview flex-center">
        <ul>{mod.Overview.map((text, i) => <li key={i}>{text}</li>)}</ul>
      </div>
      <div className="html-binding">
        {mod.HTML && <div className={`binding ${!mod.CSS ? 'text-center' : ''}`} dangerouslySetInnerHTML={{ __html: mod.HTML }} />}
        {!mod.HTML && <div className="notice">No content</div>}
        {mod.CSS && <style>{mod.CSS}</style>}
        <div className="feature">
          <button className="btn">
            <i className="fa fa-edit" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Apocalypse v0.1
// ★★★★★

// LOD Version : 1.08

// Overview :
// Unique bosses is strong.
// Some 1 shot 1 kill annoying aura from bosses.
// Drop rate is higher. Finding item is still hard
