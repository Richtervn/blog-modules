import _ from 'underscore';
import './BankingLogs.css';
import moment from 'moment';
import classnames from 'classnames';
import React, { Component } from 'react';

import { ContainerLoader } from 'common/Loaders';
import { formatNumber } from 'helpers';

class BankingLogs extends Component {
  componentWillMount() {
    const { logs, onGetLogs } = this.props;
    if (!logs) {
      onGetLogs();
    }
  }
  render() {
    const { logs } = this.props;
    if (!logs) {
      return <ContainerLoader />;
    }

    return (
      <div id="ds9799-admin-banking-logs">
        <div className="conclusion-card">
          <div className="label">Conclusion</div>
          <div className="content">
            <div className="content-text">
              <div className="title">Total profit: </div>
              <span>{formatNumber(Math.round(logs.profit.profit))}</span> Zen
            </div>
            <div className="content-text">
              <div className="title">Total indept: </div>
              <span>{formatNumber(Math.round(logs.profit.indept))}</span> Zen
            </div>
          </div>
        </div>
        {_.isEmpty(logs.logs) && <div className="no-content">No history recorded</div>}
        {!_.isEmpty(logs.logs) && (
          <div className="logs-table">
            <div className="logs-table-row header">
              <div className="time-col">Time</div>
              <div className="account-col">Account</div>
              <div className="character-col">Character</div>
              <div className="description-col">Description</div>
              <div className="detail-col">Profit</div>
              <div className="detail-col">Indept</div>
            </div>
            {logs.logs.map(log => (
              <div className="logs-table-row" key={log.id}>
                <div className="time-col">{moment(log.updatedAt).format('DD/MM/YYYY HH:mm:ss')}</div>
                <div className="account-col">{log.memb___id}</div>
                <div className="character-col">{log.character_name}</div>
                <div className="description-col">{log.description}</div>
                <div className={classnames('detail-col', { add: log.type === 'add', minus: log.type === 'minus' })}>
                  <i className={`fa fa-caret-${log.type === 'add' ? 'up' : 'down'}`} />&nbsp;{formatNumber(log.money)}
                </div>
                <div
                  className={classnames('detail-col', {
                    add: log.indept_type === 'add',
                    minus: log.indept_type === 'minus'
                  })}>
                  <i className={`fa fa-caret-${log.indept_type === 'add' ? 'up' : 'down'}`} />&nbsp;{formatNumber(
                    log.indept
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default BankingLogs;
