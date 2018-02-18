import './NavigationBar.css';

import _ from 'underscore';
import React, { Component } from 'react';
import { MenuGroup, MenuItem } from 'components/CollapseMenu';

import { openModal } from 'common/Modal';
import { appRouter } from 'utils';

class NavigationBar extends Component {
  componentWillMount() {
    const { menuTree, onGetMenuTree } = this.props;
    if (!menuTree) {
      onGetMenuTree();
    }
  }

  handleItemClick(item, group) {
    const { activeGroup, activeItem, onSetActiveItem, onSetActiveGroup } = this.props;
    if (group !== activeGroup) {
      onSetActiveGroup(group);
    }
    if (item !== activeItem) {
      onSetActiveItem(item);
    }
  }

  render() {
    const { menuTree, activeGroup, activeItem, defaultShowGroup, openedGroups, onToggleMenuGroup } = this.props;
    if (!menuTree) return null;
    const router = appRouter(menuTree);

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
                onClick={() => this.handleItemClick(item, group)}
                isActive={activeItem === item}
              />
            ))}
            {group === 'Flash Games' && (
              <div className="text-center">
                <button className="menu-item-button" onClick={() => openModal('FlashGame')}>
                  <i className="fa fa-plus-square" />
                </button>
              </div>
            )}
          </MenuGroup>
        ))}
      </div>
    );
  }
}

export default NavigationBar;
