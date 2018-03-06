import './ContentCard.css';
import React from 'react';
import classNames from 'classnames';

export default ({ data, customClass = 'default' }) => {
  return (
    <div className={classNames('contents-card', customClass)}>
      <div className="contents-card-label">Contents</div>
      <div className="contents-card-menu">
        {data.map((obj, index) => (
          <div key={index} className="main-article-ref">
            <a href={`#section${index + 1}`}>
              {index + 1} {obj.Label}
            </a>
            {obj.SubSections &&
              obj.SubSections.map((subObj, subIndex) => (
                <div key={`sa${index}${subIndex}`} className="sub-article-ref">
                  <a href={`#section${index + 1}-${subIndex + 1}`}>
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
