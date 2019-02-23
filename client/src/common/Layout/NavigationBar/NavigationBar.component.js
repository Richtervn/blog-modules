import './NavigationBar.css';

import _ from 'underscore';
import React, { useEffect } from 'react';
import { MenuGroup, MenuItem } from 'components/CollapseMenu';

import { openModal } from 'common/Modal';
import { appRouter } from 'utils';

export default ({
  menuTree,
  onGetMenuTree,
  activeGroup,
  activeItem,
  defaultShowGroup,
  openedGroups,
  onToggleMenuGroup,
  onSetActiveGroup,
  onSetActiveItem
}) => {
  useEffect(() => {
    if (!menuTree) {
      onGetMenuTree();
    }
  }, []);

  if (!menuTree) {
    return null;
  }
  const router = appRouter(menuTree);
  const _renderAddBtn = modalName => (
    <div className="text-center">
      <button className="menu-item-button" onClick={() => openModal(modalName)}>
        <i className="fa fa-plus-square" />
      </button>
    </div>
  );

  return (
    <div className="navigation-bar">
      {Object.keys(menuTree).map((group, i) => (
        <MenuGroup
          name={group}
          key={i}
          isOpen={_.contains(openedGroups, group)}
          isActive={activeGroup === group}
          isShow={group === defaultShowGroup}
          icon={menuTree[group].icon}
          onClick={() => onToggleMenuGroup(group)}>
          {menuTree[group].items.map((item, i) => (
            <MenuItem
              name={item}
              key={i}
              route={router.encode(group, item)}
              onClick={() => {
                if (group !== activeGroup) {
                  onSetActiveGroup(group);
                }
                if (item !== activeItem) {
                  onSetActiveItem(item);
                }
              }}
              isActive={activeItem === item}
            />
          ))}
          {group === 'Flash Games' && _renderAddBtn('FlashGame')}
          {group === 'Library' && _renderAddBtn('AddLibraryBookshelf')}
          {group === 'Notebook' && _renderAddBtn('AddNoteBook')}
        </MenuGroup>
      ))}
    </div>
  );
};
