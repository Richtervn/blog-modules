import "./MenuGroup.css";

import React from "react";
import classnames from "classnames";
import { createElementId } from "utils";

export default ({
  name,
  isOpen,
  isActive,
  onClick,
  isShow,
  icon,
  children
}) => {
  const elementId = createElementId(name, "mgr");
  return (
    <section>
      <div
        className={classnames("menu-group", { active: isActive })}
        data-toggle="collapse"
        href={`#${elementId}`}
        onClick={onClick}
      >
        <div className="menu-group-name">
          <i
            className={`fa ${icon
              ? `fa-${icon}`
              : "fa-gamepad"} fa-fw menu-group-icon`}
          />
          {name}
          <span className="pull-right menu-group-toggle-icon">
            {isOpen && <i className="fa fa-angle-down" />}
            {!isOpen && <i className="fa fa-angle-left" />}
          </span>
        </div>
      </div>
      <div className={classnames('collapse', {show: isShow})} id={elementId}>
        {children}
      </div>
    </section>
  );
};
