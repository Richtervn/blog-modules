import './ComponentsSelector.css';
import React from 'react';
import classNames from 'classnames';

import { toTitle } from 'helpers';

export default ({ components, onClickItem, activeItem }) => (
  <div id="cv-cpns-selector">
    {Object.keys(components).map(category => (
      <div className="category-group" key={category}>
        <div className="category">{toTitle(category)}</div>
        <div className="items">
          {Object.keys(components[category]).map(cpn => (
            <div
              key={cpn}
              className={classNames('item', { active: cpn === activeItem })}
              onClick={() => onClickItem(cpn)}>
              {toTitle(cpn)}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
