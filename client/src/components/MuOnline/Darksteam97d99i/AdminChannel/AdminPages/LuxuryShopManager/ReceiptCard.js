import React from 'react';
import _ from 'underscore';

import { defineItemImage } from 'utilities';

export default ({
	admin,
	receipt,
	onClickEdit,
	onClickDelete,
	onClickBuy,
	userMode,
	onClickCraft
}) => {
	return (
		<div className="col-3 no-col-margin">
			<div className="ds9799-lx-receipt-card">
				<div className="ds9799-ws-package-label">{receipt.name}</div>
				<img
					src={receipt.image_url.replace('./public', 'http://localhost:3000')}
					style={{ paddingBottom: '10px' }}
				/>
				<div className="ds9799-lx-receipt-describle">{receipt.description}</div>
				<div className="ds9799-lx-receipt-describle text-center" style={{ width: '100%' }}>
					<strong>Materials</strong>
					{receipt.materials.map(material => (
						<div key={material.id}>
							{material.count} x{' '}
							<img
								src={defineItemImage(material.category, material.itemId, material.level)}
							/>&nbsp;
							{material.name}
						</div>
					))}
					<div>{`Charge : ${receipt.charge_price} credits`}</div>
				</div>
				{!admin &&
					!userMode && (
						<button
							className="btn btn-danger btn-block"
							onClick={() => onClickBuy(receipt)}>{`Buy : ${receipt.price} Credits`}</button>
					)}
				{admin && (
					<div className="badge badge-danger" style={{ marginBottom: '10px' }}>
						<strong>{`Price: ${receipt.price}`}</strong>
					</div>
				)}
				{admin && (
					<div className="row no-row-margin" style={{ width: '100%' }}>
						<div className="col no-col-margin">
							<button className="btn btn-primary btn-block" onClick={() => onClickEdit(receipt)}>
								Edit
							</button>
						</div>
						<div className="col no-col-margin">
							<button className="btn btn-danger btn-block" onClick={() => onClickDelete(receipt)}>
								Delete
							</button>
						</div>
					</div>
				)}
				{userMode && (
					<button className="btn btn-warning btn-block" onClick={() => onClickCraft(receipt)}>
						Craft
					</button>
				)}
			</div>
		</div>
	);
};
