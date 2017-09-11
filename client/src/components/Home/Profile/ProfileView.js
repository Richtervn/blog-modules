import React from 'react';

import OverView from './Information/OverView';
import PersonalView from './Information/PersonalView';
import FamilyView from './Information/FamilyView';

import Schools from './Education/Schools';

export default ({ activeItem, activeGroup }) => {
  let ProfileView = OverView;
  const link = activeGroup + '/' + activeItem;
  switch (link) {
    case 'Information/Personal':
      ProfileView = PersonalView;
      break;
    case 'Information/Family':
      ProfileView = FamilyView;
      break;
    case 'Education/Schools':
      ProfileView = Schools;
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
