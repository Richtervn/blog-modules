import React from 'react';

import StarRating from 'react-star-rating-component';

export default ({ tool }) => {
  if (!tool) return null;
  return (
    <div className="text-center">
      <h3 style={{ paddingTop: '20px' }}>{tool.Name.toUpperCase()}</h3>
      <div className="larger-star-rating">
        <StarRating name={tool.Name} value={parseInt(tool.Rating)} editing={false} />
      </div>
      <div>{tool.Credits.map((credit, i) => <p key={i}>{credit}</p>)}</div>
      <p>Use for Mu Versions : {tool.Version}</p>
      <p>
        <strong>Description :</strong>
      </p>
      <p>{tool.Description}</p>
      <p>
        <strong>Introduce :</strong>
      </p>
      <div className="text-justify" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        {tool.Introduce}
      </div>
    </div>
  );
};
