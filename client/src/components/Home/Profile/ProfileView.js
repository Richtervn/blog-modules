import React from 'react';

import OverView from './OverView';
import PersonalView from './PersonalView';
import FamilyView from './FamilyView';

export default ({ activeItem }) => {
  let ProfileView = OverView;
  switch (activeItem) {
    case 'Personal':
      ProfileView = PersonalView;
      break;
    case 'Family':
      ProfileView = FamilyView;
      break;
    default:
      break;
  }

  return (
    <div className="profile-view">
      <ProfileView />
    </div>
  );
};
