import './Versions.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
    const { id, versions } = this.props;
    if (!versions) {
      return <PageLoader />;
    }

    if (id !== undefined) {
      if (!_.contains(_.pluck(versions, '_id'), id)) {
        return <Redirect to="/404" />;
      }
      return <VersionDetail id={id} />;
    }

    return (
      <div className="row mu-versions-list">
        {versions.map((version, i) => <BackgroundTextCard key={i} />)}
        <AddCardButton col={3} minHeight={120} onClick={() => openModal('AddMuOnlineVersion')} />
      </div>
    );
  }
}

export default Versions;
