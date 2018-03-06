import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { PageLoader } from 'common/Loaders';

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
      return <VersionDetail id={id} />;
    }

    return <div className="row">.</div>;
  }
}

export default Versions;
