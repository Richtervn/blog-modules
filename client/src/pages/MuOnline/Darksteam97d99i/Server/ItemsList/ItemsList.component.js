import './ItemsList.css';
import _ from 'underscore';
import React, { Component } from 'react';

import { getItemImage } from 'helpers/mu';
import { ContainerLoader } from 'common/Loaders';

const boolCols = ['Serial', 'Drop', 'Option', 'UseByDW_SM', 'UseByDK_BK', 'UseByElf_ME', 'UseByMG'];

class ItemsList extends Component {
  componentWillMount() {
    const { data, onGetItems } = this.props;
    if (!data.Categories) {
      onGetItems();
    } else {
      const categories = _.pluck(data.Categories, 'Name');
      const fileNames = _.difference(categories, Object.keys(data));
      onGetItems({ fileNames });
    }
  }

  render() {
    const { data } = this.props;
    if (!data.Categories) {
      return <ContainerLoader />;
    }
    return (
      <div id="ds9799-item-list">
        {data.Categories.map(category => [
          <div className="category-header" key={`ch-${category._id}`}>
            {category.Name}
          </div>,
          <div
            className="items-table"
            key={`ci-${category._id}`}
            style={_.contains(['Sets', 'Misc'], category.Name) ? { width: 'fit-content', marginLeft: '11px' } : {}}>
            <div className="items-table-row header">
              <div className="items-table-col image">Image</div>
              {Object.keys(data[category.Name][0]).map(label => (
                <div className={`items-table-col ${label}`} key={label}>
                  {label}
                </div>
              ))}
            </div>
            {data[category.Name].map(item => (
              <div className="items-table-row" key={item._id}>
                <div className="items-table-col image">
                  <img src={getItemImage(category.Name, item._id)} alt="MU Item" />
                </div>
                {Object.keys(item).map(key => (
                  <div className={`items-table-col ${key}`} key={key}>
                    {_.contains(boolCols, key) ? (
                      <input type="checkbox" checked={item[key] === '1'} readOnly disabled />
                    ) : (
                      item[key]
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ])}
      </div>
    );
  }
}

export default ItemsList;
