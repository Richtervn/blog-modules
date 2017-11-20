import React from 'react';
import MenuItem from './MenuItem';
import PackagesList from './PackagesList';

export default ({ categories, onSetFocusCategory, focusCategory, onGetPackage, packages, onBuyPackage, characters, onGetCharacters, user }) => (
	<div className="row no-row-margin">
		<div className="col-2 no-col-margin">
			{categories.map((category, i) => (
				<MenuItem
					key={i}
					category={category}
					isActive={category._id == focusCategory._id}
					onSelect={onSetFocusCategory}
				/>
			))}
		</div>
		<div className="col-10 no-col-margin">
			<div className="ds9799-ws-list-package">
				<PackagesList
					category={focusCategory}
					onGetPackage={onGetPackage}
					packages={packages}
					onBuyPackage={onBuyPackage}
					characters={characters}
					onGetCharacters={onGetCharacters}
					user={user}
				/>
			</div>
		</div>
	</div>
);
