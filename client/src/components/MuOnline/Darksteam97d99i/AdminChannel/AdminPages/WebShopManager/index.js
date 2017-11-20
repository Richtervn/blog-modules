import React from 'react';
import CategoryDetail from './CategoryDetail';
import MenuItem from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/WebShop/MenuItem';

export default ({
	categories,
	focusCategory,
	onSelectCategory,
	data,
	onGetData,
	onAddPackage,
	onGetPackage,
	onEditPackage,
	onDeletePackage,
	packages
}) => (
	<div className="row no-row-margin">
		<div className="col-2 no-col-margin">
			{categories.map((category, i) => (
				<MenuItem
					key={i}
					category={category}
					isActive={category._id == focusCategory._id}
					onSelect={onSelectCategory}
				/>
			))}
		</div>
		<div className="col-10 no-col-margin">
			<CategoryDetail
				category={focusCategory}
				data={data}
				onGetData={onGetData}
				onAddPackage={onAddPackage}
				packages={packages}
				onGetPackage={onGetPackage}
				onEditPackage={onEditPackage}
				onDeletePackage={onDeletePackage}
			/>
		</div>
	</div>
);
