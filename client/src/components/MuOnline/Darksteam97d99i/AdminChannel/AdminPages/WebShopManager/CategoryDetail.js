import React from 'react';
import ModalAddPackage from './ModalAddPackage';

export default ({category, data, onGetData, onAddPackage}) => (
	<div className="ds9799-ws-list-package">
		<button data-toggle="modal" data-target="#addDs9799WebShopPackageModal">Add</button>
		<ModalAddPackage category={category} data={data} onGetData={onGetData} onSubmit={onAddPackage}/>
	</div>
)