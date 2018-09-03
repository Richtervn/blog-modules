import _ from 'underscore';
import './MonstersList.css';
import React, { Component } from 'react';

import { ContainerLoader } from 'common/Loaders';
const boolCols = ['isUsed'];

class MonstersList extends Component {
  componentWillMount() {
    const { monsters, onGetMonsters } = this.props;
    if (!monsters) {
      onGetMonsters();
    }
  }

  render() {
    const { monsters } = this.props;
    if (!monsters) {
      return <ContainerLoader />;
    }
    return (
      <div id="ds9799-monsters-list">
        <div className="monsters-table">
          <div className="monsters-table-row header">
            <div className="monsters-table-col image">Image</div>
            {Object.keys(monsters[0]).map(label => (
              <div key={label} className={`monsters-table-col ${label}`}>
                {label}
              </div>
            ))}
          </div>
          {monsters.map(monster => (
            <div className="monsters-table-row" key={monster._id}>
              <div className="monsters-table-col image">
                <img src={`/images/muonline/monster/${monster._id}.gif`} alt="Monster" />
              </div>
              {Object.keys(monster).map(key => (
                <div key={key} className={`monsters-table-col ${key}`}>
                  {_.contains(boolCols, key) ? (
                    <input type="checkbox" checked={monster[key] === '1'} readOnly disabled />
                  ) : (
                    monster[key]
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MonstersList;
