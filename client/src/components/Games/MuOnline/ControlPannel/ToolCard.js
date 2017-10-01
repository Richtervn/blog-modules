import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ tool, onSelectTool, isSelected }) => (
  <div
    className={isSelected ? 'mo-listpannel-card noselect mo-listpannel-card-active' : 'mo-listpannel-card noselect'}
    onClick={() => onSelectTool(tool._id)}>
    <div className="row no-row-margin">
      <div className="ygo-mod-card-img-col">
        <img className="ygo-mod-card-icon" src={tool.IconUrl.replace('./public', 'http://localhost:3000')} style={{height: '35px'}}/>
      </div>
      <div className="ygo-mod-card-content">
        <div className="ygo-mod-card-rating">
          <StarRating name={tool.Name} editing={false} value={parseInt(tool.Rating)} />
        </div>
        <div className="ygo-mod-card-name">{tool.Name}</div>
      </div>
    </div>
  </div>
);
