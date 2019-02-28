import './Page.css';
import React, { useEffect, useMemo } from 'react';
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
  const router = useMemo(() => {
    if (!menuTree) {
      return;
    }
    return appRouter(menuTree);
  }, [menuTree]);

  useEffect(() => {
    if (!menuTree) {
      return;
    }

    if (window.location.pathname.indexOf('/home/') !== -1) {
      if (activeGroup) onSetActiveGroup('');
      if (activeItem) onSetActiveItem('');
      return;
    }

    const currentPage = router.decode(window.location.pathname);
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
