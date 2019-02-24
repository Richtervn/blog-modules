import './Library.css';
import React, { useEffect } from 'react';
import { getFullName } from 'helpers';

import PageContainer from 'common/PageContainer';

export default ({ match, onGetBookshelf }) => {
  useEffect(() => {
    onGetBookshelf(getFullName(match.params.bookShelf));
  }, [match.params.bookShelf]);
  return (
    <PageContainer backgroundColor="#525659">
      <div className="row">.</div>
    </PageContainer>
  );
};
