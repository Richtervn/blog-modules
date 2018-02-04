import './ContentCard.css';
import React from 'react';

export default ({ data }) => {
  return (
    <div className="contents-card">
      <div className="contents-card-label">Contents</div>
      <div className="contents-card-menu">
        {data.map((obj, index) => (
          <div key={index} className="main-article-ref">
            <a href={`#section${index + 1}`}>
              {index + 1} {obj.Label}
            </a>
            {obj.SubSections &&
              obj.SubSections.map((subObj, subIndex) => (
                <div className="sub-article-ref">
                  <a key={`sa${index}${subIndex}`} href={`#section${index + 1}-${subIndex + 1}`}>
                    {index + 1}.{subIndex + 1} {subObj.Label}
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
