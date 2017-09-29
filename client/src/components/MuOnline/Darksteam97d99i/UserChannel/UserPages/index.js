import React from 'react';

import Introduction from './Introduction';
import Dashboard from './Dashboard';

export default ({ user, page, onEditProfile }) => {
  switch (page) {
    case 'Introduction':
      return <Introduction/>
    case 'Dashboard':
      return <Dashboard user={user} onEditProfile={onEditProfile}/>
    default:
      return <Introduction />;
  }
};
