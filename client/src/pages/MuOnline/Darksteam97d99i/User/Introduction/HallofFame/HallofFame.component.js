import './HallofFame.css';
import React, { Component } from 'react';
import classNames from 'classnames';
import { formatNumber } from 'helpers';

import { ContainerLoader } from 'common/Loaders';
import CharactersTable from './CharactersTable.component';

const groups = [
  {
    name: 'Top Highest Points',
    items: true
  },
  { name: 'Top Highest Resets', items: true },
  { name: 'Top Zen Millionaire' },
  { name: 'Top Credits Millionaire' }
];

const items = [
  { name: 'Dark Knight', key: 'DK' },
  { name: 'Dark Wizard', key: 'DW' },
  { name: 'Magic Gladitor', key: 'MG' },
  { name: 'Elf', key: 'ELF' }
];

class HallofFame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: 'Top Highest Points',
      activeItem: ''
    };
    this.handleGroupClick = this.handleGroupClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleGroupClick(group) {
    this.setState({ activeGroup: group, activeItem: '' });
    if (group === 'Top Highest Points') {
      this.props.onGetTopPoints();
    }
    if (group === 'Top Highest Resets') {
      this.props.onGetTopResets();
    }
    if (group === 'Top Zen Millionaire') {
      this.props.onGetTopZen();
    }
    if (group === 'Top Credits Millionaire') {
      this.props.onGetTopCredits();
    }
  }

  handleItemClick(group, item) {
    this.setState({ activeGroup: group, activeItem: item.name });
    if (group === 'Top Highest Points') {
      this.props.onGetTopPoints({ Class: item.key });
    }
    if (group === 'Top Highest Resets') {
      this.props.onGetTopResets({ Class: item.key });
    }
  }

  componentWillMount() {
    this.props.onGetTopPoints();
  }

  render() {
    const { activeGroup, activeItem } = this.state;
    const { topPoints, topResets, topZen, topCredits } = this.props;
    return (
      <div className="ds9799-hof">
        <div className="side-bar">
          {groups.map((group, i) => (
            <div className="group" key={i}>
              <div
                className={classNames('group-header', { active: activeGroup === group.name })}
                onClick={() => this.handleGroupClick(group.name)}>
                {group.name}
              </div>
              {group.items &&
                items.map((item, i) => (
                  <div
                    key={item.key}
                    className={classNames('item', { active: item.name === activeItem && activeGroup === group.name })}
                    onClick={() => this.handleItemClick(group.name, item)}>
                    <i className="fa fa-genderless fa-fw" />
                    {item.name}
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="main-view">
          {activeGroup === 'Top Highest Points' && !topPoints && <ContainerLoader />}
          {activeGroup === 'Top Highest Resets' && !topResets && <ContainerLoader />}
          {activeGroup === 'Top Zen Millionaire' && !topZen && <ContainerLoader />}
          {activeGroup === 'Top Credits Millionaire' && !topCredits && <ContainerLoader />}

          {activeGroup === 'Top Highest Points' &&
            topPoints && (
              <div>
                <h1>{activeGroup}</h1>
                {activeItem && <h2>Class: {activeItem}</h2>}
                <CharactersTable characters={topPoints} />
              </div>
            )}
          {activeGroup === 'Top Highest Resets' &&
            topResets && (
              <div>
                <h1>{activeGroup}</h1>
                {activeItem && <h2>Class: {activeItem}</h2>}
                <CharactersTable characters={topResets} />
              </div>
            )}
          {activeGroup === 'Top Zen Millionaire' &&
            topZen && (
              <div>
                <h1>{activeGroup}</h1>
                <table>
                  <tbody>
                    <tr>
                      <th />
                      <th>Account</th>
                      <th>Total Zen</th>
                    </tr>
                    {topZen.map((account, i) => (
                      <tr key={account.memb___id}>
                        <td>
                          {i === 0 ? <img className="troopy" src="/images/icons/troopy.png" alt="troopy" /> : i + 1}
                        </td>
                        <td>{account.memb___id}</td>
                        <td>{formatNumber(account.TotalZen)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          {activeGroup === 'Top Credits Millionaire' &&
            topCredits && (
              <div>
                <h1>{activeGroup}</h1>
                <table>
                  <tbody>
                    <tr>
                      <th />
                      <th>Account</th>
                      <th>Credits</th>
                    </tr>
                    {topCredits.map((account, i) => (
                      <tr key={account.memb___id}>
                        <td>
                          {i === 0 ? <img className="troopy" src="/images/icons/troopy.png" alt="troopy" /> : i + 1}
                        </td>
                        <td>{account.memb___id}</td>
                        <td>{formatNumber(account.credits)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default HallofFame;
