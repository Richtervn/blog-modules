import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import StarRating from 'react-star-rating-component';
import { PageLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import { BackgroundTextCard } from 'components/Cards';
import { AddCardButton } from 'components/Buttons';
import GuideDetail from './GuideDetail.container';

class Guides extends Component {
  componentWillMount() {
    const { guides, onGetGuides } = this.props;
    if (!guides) {
      onGetGuides();
    }
  }

  render() {
    const { id, guides, onSetFocusGuide } = this.props;

    if (!guides) {
      return (
        <div className="row">
          <PageLoader />
        </div>
      );
    }

    if (id !== undefined) {
      if (!_.contains(_.pluck(guides, '_id'), parseInt(id, 10))) {
        return <Redirect to="/404" />;
      }
      return <GuideDetail id={id} />;
    }

    return (
      <div className="row mu-list-row">
        {guides.map((guide, i) => (
          <BackgroundTextCard
            col={3}
            key={i}
            imgUrl="/images/backgrounds/mu-characters.jpg"
            opacity={7}
            downloadUrl={guide.ArchiveUri}
            route={`/mu_online/guides/${guide._id}`}
            customClass="mu-version-card"
            admin
            onClickEdit={() => {
              onSetFocusGuide(guide._id);
              openModal('EditMuOnlineGuide');
            }}
            onClickDelete={() => {
              onSetFocusGuide(guide._id);
              openModal('DeleteMuOnlineGuide');
            }}>
            <div className="content">
              <div className="name">{guide.Name}</div>
              <div className="rating">
                <StarRating name={`mu-guide-${i}`} value={guide.Rating} editing={false} />
              </div>
              <div className="description">{guide.Description}</div>
              {guide.Credits && (
                <div className="credit">
                  {guide.Credits.map((text, j) => (
                    <div key={j} className="credit-text">
                      {text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </BackgroundTextCard>
        ))}
        <AddCardButton col={3} minHeight={179} onClick={() => openModal('AddMuOnlineGuide')} />
      </div>
    );
  }
}

export default Guides;
