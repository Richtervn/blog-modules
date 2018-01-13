import './MenuGroup.css';

import React from 'react';
import { createElementId } from 'utils';

const defineGroupIcon = name => {
  switch (name) {
    case 'Games':
      return 'fa-gamepad';
    case 'Collections':
      return 'fa-book';
    case 'Information':
      return 'fa-info-circle';
    case 'Education':
      return 'fa-graduation-cap';
    case 'Experience':
      return 'fa-calendar-check-o';
    case 'Career':
      return 'fa-briefcase';
    case 'Skills':
      return 'fa-coffee';
    case 'Notes':
      return 'fa-tags';
    case 'Tools':
      return 'fa-wrench';
    case 'Setting':
      return 'fa-gears';
    default:
      return 'fa-gamepad';
  }
};

export default ({ name, isOpen, isActive, onClick, children }) => {
  const elementId = createElementId(name, 'mgr');
  return (
    <section>
      <div className={`menu-group ${isActive ? 'active' : ''}`} data-toggle="collapse" href={`#${elementId}`} onClick={onClick}>
        <div className="menu-group-name">
          <i className={`fa ${defineGroupIcon(name)} fa-fw menu-group-icon`} />
          {name}
          <span className="pull-right menu-group-toggle-icon">
            {isOpen && <i className="fa fa-angle-down" />}
            {!isOpen && <i className="fa fa-angle-left" />}
          </span>
        </div>
      </div>
      <div className="collapse" id={elementId}>
        {children}
      </div>
    </section>
  );
};

// export default ({ name, isGroupActive, items, setActiveGroup, setDeactiveGroup, setActiveItem, activeItem }) => {
//   let groupIcon = defineMenuGroupIcon(name);
//   return (
//     <div>
//       <div
//         className="blog-parent-menu"
//         data-toggle="collapse"
//         href={`#${name}Menu`}
//         onClick={isGroupActive ? setDeactiveGroup : setActiveGroup}
//         style={{ backgroundColor: isGroupActive ? '#1995AD' : '#021C1E' }}>
//         <div className="menu-group-name noselect">
//           <i className={`fa ${groupIcon} fa-fw group-icon`} />
//           {name}
//           <span className="pull-right group-toggle-icon">
//             {!isGroupActive && <i className="fa fa-angle-left" />}
//             {isGroupActive && <i className="fa fa-angle-down" />}
//           </span>
//         </div>
//       </div>
//       <div className={isGroupActive ? 'collapse show' : 'collapse'} id={`${name}Menu`}>
//         {items.map(item =>
//           <div
//             key={item}
//             className="menu-group-item noselect"
//             onClick={() => setActiveItem(item)}
//             style={{ backgroundColor: activeItem == item ? '#68829E' : null }}>
//             <span><i className="fa fa-genderless group-icon" /></span>{item}
//           </div>
//         )}
//         {name == 'Flash Games' &&
//           <div className="text-center">
//             <button className="menu-item-button" data-toggle="modal" data-target="#addFlashGameModal"><i className="fa fa-plus-square" /></button>
//           </div>}
//       </div>
//     </div>
//   );
// };
