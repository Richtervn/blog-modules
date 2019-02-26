import './Page.css';
import React, { useEffect } from 'react';
import { appRouter } from 'utils';

export default ({
  children,
  menuTree,
  activeItem,
  activeGroup,
  onSetActiveGroup,
  onSetActiveItem,
  onSetDefaultShowGroup,
  onToggleMenuGroup
}) => {
  useEffect(() => {
    if (!menuTree) {
      return;
    }

    const router = appRouter(menuTree);
    const currentPage = router.decode(window.location.pathname);

    // if (window.location.pathname.indexOf('/home/')) {
    //   if (currentPage && currentPage.activeGroup) onSetActiveGroup('');
    //   if (currentPage && currentPage.activeItem) onSetActiveItem('');
    //   return;
    // }

    if (!currentPage.activeGroup || !currentPage.activeItem) {
      return;
    }
    if (activeItem !== currentPage.activeItem) {
      onSetActiveItem(currentPage.activeItem);
    }
    if (activeGroup !== currentPage.activeGroup) {
      onSetActiveGroup(currentPage.activeGroup);
      onSetDefaultShowGroup(currentPage.activeGroup);
      onToggleMenuGroup(currentPage.activeGroup);
    }
  });

  return <div className="page">{children}</div>;
};
