import './Versions.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import StarRating from 'react-star-rating-component';
import { PageLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import { BackgroundTextCard } from 'components/Cards';
import { AddCardButton } from 'components/Buttons';
import VersionDetail from './VersionDetail.container';

class Versions extends Component {
  componentWillMount() {
    const { versions, onGetVersions } = this.props;
    if (!versions) {
      onGetVersions();
    }
  }

  render() {
    const { id, versions, onSetFocusVersion } = this.props;
    if (!versions) {
      return <PageLoader />;
    }
    if (id !== undefined) {
      if (!_.contains(_.pluck(versions, '_id'), parseInt(id, 10))) {
        return <Redirect to="/404" />;
      }
      return <VersionDetail id={id} />;
    }

    return (
      <div className="row mu-list-row">
        {versions.map((version, i) => (
          <BackgroundTextCard
            col={3}
            key={i}
            imgUrl="/images/backgrounds/mu-characters.jpg"
            opacity={7}
            downloadUrl={version.ArchiveUri}
            route={`/mu_online/versions/${version._id}`}
            customClass="mu-version-card"
            admin
            onClickEdit={() => {
              onSetFocusVersion(version._id);
              openModal('EditMuOnlineVersion');
            }}
            onClickDelete={() => {
              onSetFocusVersion(version._id);
              openModal('DeleteMuOnlineVersion');
            }}>
            <div className="content">
              <div className="name">{version.Name}</div>
              <div className="rating">
                <StarRating name={`mu-version-${i}`} value={version.Rating} editing={false} />
              </div>
              <div className="description">{version.Description}</div>
              {version.Credits && (
                <div className="credit">
                  {version.Credits.map((text, j) => (
                    <div key={j} className="credit-text">
                      {text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </BackgroundTextCard>
        ))}
        <AddCardButton col={3} minHeight={179} onClick={() => openModal('AddMuOnlineVersion')} />
      </div>
    );
  }
}

export default Versions;
