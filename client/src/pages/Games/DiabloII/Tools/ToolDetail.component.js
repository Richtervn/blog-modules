import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from 'react-star-rating-component';

import { openModal } from 'common/Modal';

const ToolDetail = ({ tool, history }) => (
  <div className="row">
    <div className="d2-mod-detail">
      <div className="feature">
        <button className="btn" onClick={() => openModal('EditDiabloIITool')}>
          <i className="fa fa-pencil" />
        </button>
        <button className="btn" onClick={() => openModal('DeleteDiabloIITool')}>
          <i className="fa fa-times" />
        </button>
      </div>
      <div className="info">
        <div className="name">
          {tool.Name}
        </div>
        <div className="rating">
          <StarRating value={tool.Rating} name={tool.Name} />
        </div>
        <div className="icon">
          <img src={tool.IconUrl} alt={tool.Name} />
        </div>
      </div>
      <div className="text-center">
        <strong>Overview: </strong>
      </div>
      <div className="overview flex-center">
        <ul>{tool.Overview.map((text, i) => <li key={i}>{text}</li>)}</ul>
      </div>
      <div className="html-binding">
        {tool.HTML && (
          <div className={`binding ${!tool.CSS ? 'text-center' : ''}`} dangerouslySetInnerHTML={{ __html: tool.HTML }} />
        )}
        {!tool.HTML && <div className="notice">No content</div>}
        {tool.CSS && <style>{tool.CSS}</style>}
        <div className="feature">
          <button className="btn" onClick={() => history.push(`/content_mirror/DiabloIITools/${tool._id}`)}>
            <i className="fa fa-edit" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(ToolDetail);
