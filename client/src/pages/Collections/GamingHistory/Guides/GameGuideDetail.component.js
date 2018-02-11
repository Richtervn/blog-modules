import './GameGuideDetail.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { TabLoader } from 'common/Loaders';

class GameGuideDetail extends Component {
  componentWillMount() {
    const { subPage, onGetGuide, guide } = this.props;
    if (!guide || guide._id !== parseInt(subPage, 10)) {
      onGetGuide(subPage);
    }
  }

  render() {
    const { guide, subPage, history } = this.props;
    if (!guide || guide._id !== parseInt(subPage, 10)) {
      return <TabLoader />;
    }
    return (
      <div className="game-guide-detail">
        <div className="game-guide-feature">
          <button className="btn" onClick={() => history.push(`/content_mirror/GamingHistoryGuide/${guide._id}`)}>
            <i className="fa fa-edit" />
          </button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: guide.HTML }} />
        {guide.CSS && <style>{guide.CSS}</style>}
      </div>
    );
  }
}

export default withRouter(GameGuideDetail);
