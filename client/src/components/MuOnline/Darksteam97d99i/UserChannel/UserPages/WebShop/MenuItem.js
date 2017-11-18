import React from 'react';

export default ({ category, isActive, onSelect }) => (
	<div
		className={`ds9799-ws-menu-item ${isActive ? 'ds9799-ws-menu-item-active' : ''}`}
		onClick={() => onSelect(category)}>
		<img
			className="ds9799-ws-menu-item-icon"
			src={`/app_modules/images/icons/${category.Icon}.png`}
		/>
		<div className="ds9799-ws-menu-item-label">{category.Name}</div>
	</div>
);
