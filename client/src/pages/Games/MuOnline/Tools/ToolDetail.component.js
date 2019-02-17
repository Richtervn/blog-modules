import './ToolDetail.css';
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from 'react-star-rating-component';

import { openModal } from 'common/Modal';
import { AdminButtons } from 'components/Buttons';

export default ({ tool }) => {
  if (tool._id === undefined) {
    return (
      <div className="row">
        <div className="mu-tool-detail no-content">
          <h1>No content available</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="mu-tool-detail">
        <AdminButtons
          customClass="mu-tool-detail-feature"
          onClickEdit={() => openModal('EditMuOnlineTool')}
          onClickDelete={() => openModal('DeleteMuOnlineTool')}
        />
        <div className="name">{tool.Name}</div>
        <div className="version">
          (<b>Can be used for:</b> {tool.Version})
        </div>
        <div className="rating">
          <StarRating value={tool.Rating} editing={false} name="muonlinetool" />
        </div>
        <div className="icon-wrapper">
          <img src={tool.IconUrl} alt={tool.Name} />
        </div>
        {tool.Description && (
          <div className="text-center">
            <b>Description:</b>
          </div>
        )}
        {tool.Description && <div className="description">{tool.Description}</div>}
        {tool.Credits && (
          <div className="text-center">
            <b>Credits:</b>
          </div>
        )}
        {tool.Credits && (
          <div className="credits">
            <ul>
              {tool.Credits.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="html-binding">
          <div className="feature">
            <Link to={`/content_mirror/MuOnlineTools/${tool._id}`}>
              <button className="btn">
                <i className="fa fa-edit" />
              </button>
            </Link>
          </div>
          {tool.HTML && (
            <div
              className={`binding ${!tool.CSS ? 'text-center' : ''}`}
              dangerouslySetInnerHTML={{ __html: tool.HTML }}
            />
          )}
          {!tool.HTML && <div className="notice">No content</div>}
          {tool.CSS && <style>{tool.CSS}</style>}
        </div>
      </div>
    </div>
  );
};
