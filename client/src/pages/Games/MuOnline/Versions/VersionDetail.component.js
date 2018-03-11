import './VersionDetail.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StarRating from 'react-star-rating-component';
import { PageLoader } from 'common/Loaders';

class VersionsList extends Component {
  componentWillMount() {
    this.props.onGetVersionDetail(this.props.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.props.onGetVersionDetail(nextProps.id);
    }
  }

  render() {
    const { id, version } = this.props;
    if (parseInt(id, 10) !== version._id) {
      return (
        <div className="row">
          <PageLoader />
        </div>
      );
    }
    return (
      <div className="row">
        <div className="mu-detail-view">
          <div className="feature">
            <Link to={`/content_mirror/MuOnlineVersions/${version._id}`}>
              <div className="btn">
                <i className="fa fa-edit" />
              </div>
            </Link>
          </div>
          <div className="name">{version.Name}</div>
          <div className="version"><b>Version: </b>{version.Version}</div>
          <div className="rating">
            <StarRating value={version.Rating} name={version.Name} editing={false} />
          </div>
          {version.ImageUrl && (
            <div className="image-wrapper">
              <img className="image" src={version.ImageUrl} alt={version.Name} />
            </div>
          )}

          <div className="text-center">
            <b>Desciption: </b>
          </div>
          <div className="description">{version.Description}</div>
          <div className="text-center">
            <b>Credits: </b>
          </div>
          <div className="credits">
            {version.Credits.map((credit, i) => (
              <div key={i} className="credit">
                {credit}
              </div>
            ))}
          </div>
          <div className="html-binding">
            {version.HTML && (
              <div
                className={`binding ${!version.CSS ? 'text-center' : ''}`}
                dangerouslySetInnerHTML={{ __html: version.HTML }}
              />
            )}
            {!version.HTML && <div className="notice">No content</div>}
            {version.CSS && <style>{version.CSS}</style>}
          </div>
        </div>
      </div>
    );
  }
}

export default VersionsList;
