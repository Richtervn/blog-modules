import React, { Component } from 'react';
import { PageLoader } from 'common/Loaders';

class Characters extends Component {
  componentWillMount() {
    const { characters, onGetCharacters } = this.props;
    if (!characters) {
      onGetCharacters();
    }
  }

  render() {
    const { characters } = this.props;
    if (!characters) {
      return (
        <div className="row">
          <PageLoader opacity={2} />
        </div>
      );
    }
    return <div className="row">.</div>;
  }
}

export default Characters;
