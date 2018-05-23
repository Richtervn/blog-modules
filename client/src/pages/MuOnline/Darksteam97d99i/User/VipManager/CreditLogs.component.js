import _ from 'underscore';
import './CreditLogs.css';
import moment from 'moment';
import React, { Component } from 'react';
import classnames from 'classnames';
import { formatNumber } from 'helpers';

class CreditLogs extends Component {
  componentWillMount() {
    this.props.onGetLogs();
  }

  render() {
    const { logs, maxTableHeight } = this.props;
    if (!logs) {
      return null;
    }
    return (
      <div id="ds9799-credit-logs">
        <div className="label">Credits History</div>
        <div className="content">
          {_.isEmpty(logs) && <div className="no-content">No history recorded</div>}
          {!_.isEmpty(logs) && (
            <div className="logs-table" style={{ maxHeight: `${maxTableHeight}px` }}>
              <div className="logs-table-row header">
                <div className="time-col">Time</div>
                <div className="description-col">Description</div>
                <div className="balance-col">Balance</div>
              </div>
              {logs.map((log, i) => (
                <div className="logs-table-row" key={i}>
                  <div className="time-col">{moment(log.updatedAt).format('DD/MM/YYYY HH:mm:ss')}</div>
                  <div className="description-col">{log.description}</div>
                  <div className={classnames('balance-col', { add: log.type === 'add', minus: log.type === 'minus' })}>
                    <i className={`fa fa-caret-${log.type === 'add' ? 'up' : 'down'}`} />&nbsp;{formatNumber(
                      log.credits
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CreditLogs;
