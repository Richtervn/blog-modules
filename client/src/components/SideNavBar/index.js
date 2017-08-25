import React from 'react';
import MenuGroup from './MenuGroup';

export default ({
  menuTree,
  activeGroup,
  activeItem,
  setActiveGroup,
  setDeactiveGroup,
  setActiveItem,
  getMenuTree
}) => {
  if (!menuTree) {
    getMenuTree();
    return null;
  }

  return (
    <div className="blog-side-nav">
      {Object.keys(menuTree).map(key =>
        <MenuGroup
          key={key}
          name={key}
          isGroupActive={activeGroup == key}
          activeItem={activeItem}
          items={menuTree[key]}
          setActiveGroup={() => setActiveGroup(key)}
          setDeactiveGroup={setDeactiveGroup}
          setActiveItem={setActiveItem}
        />
      )}
    </div>
  );
};
