import React from 'react';
import PackageCard from './PackageCard';

export default ({ category, onGetPackage, packages }) => {
	if (!packages[category._id]) {
		onGetPackage(category._id);
		return null;
	}
	return (
		<div className="row no-row-margin">
			{packages[category._id].map((pack, i) => <PackageCard key={i} pack={pack} />)}
		</div>
	);
};
