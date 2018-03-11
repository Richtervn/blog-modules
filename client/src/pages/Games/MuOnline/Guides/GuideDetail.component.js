import './GuideDetail.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StarRating from 'react-star-rating-component';
import { PageLoader } from 'common/Loaders';

class GuidesDetail extends Component {
  componentWillMount() {
    this.props.onGetGuideDetail(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.props.onGetGuideDetail(nextProps.id);
    }
  }

  render() {
    const { id, guide } = this.props;
    if (parseInt(id, 10) !== guide._id) {
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
            <Link to={`/content_mirror/MuOnlineGuides/${guide._id}`}>
              <div className="btn">
                <i className="fa fa-edit" />
              </div>
            </Link>
          </div>
          <div className="name">{guide.Name}</div>
          <div className="rating">
            <StarRating value={guide.Rating} name={guide.Name} editing={false} />
          </div>
          {guide.ImageUrl && (
            <div className="image-wrapper">
              <img className="image" src={guide.ImageUrl} alt={guide.Name} />
            </div>
          )}

          <div className="text-center">
            <b>Desciption: </b>
          </div>
          <div className="description">{guide.Description}</div>
          <div className="text-center">
            <b>Credits: </b>
          </div>
          <div className="credits">
            {guide.Credits.map((credit, i) => (
              <div key={i} className="credit">
                {credit}
              </div>
            ))}
          </div>
          <div className="html-binding">
            {guide.HTML && (
              <div
                className={`binding ${!guide.CSS ? 'text-center' : ''}`}
                dangerouslySetInnerHTML={{ __html: guide.HTML }}
              />
            )}
            {!guide.HTML && <div className="notice">No content</div>}
            {guide.CSS && <style>{guide.CSS}</style>}
          </div>
        </div>
      </div>
    );
  }
}

export default GuidesDetail;
