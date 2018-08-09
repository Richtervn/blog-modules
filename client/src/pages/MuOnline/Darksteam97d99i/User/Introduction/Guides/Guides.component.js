import './Guides.css';
import moment from 'moment';
import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Guides extends Component {
  componentDidMount() {
    const { guides, onGetGuides } = this.props;
    if (!guides) {
      onGetGuides();
    }
  }

  render() {
    const { guides, history } = this.props;
    if (!guides) {
      return null;
    }
    return (
      <div id="ds9799-guides">
        {guides.map(guide => (
          <div key={guide._id} className="guide-row" onClick={() => history.push(`/mu_online/guides/${guide._id}`)}>
            <div className="left">
              <div className="name">{guide.Name}</div>
              <div className="description">&nbsp;-&nbsp;{guide.Description}</div>
            </div>
            <div className="date">{moment(guide.updatedAt).format('DD/MM/YYYY')}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Guides);
