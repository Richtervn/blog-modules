import React from 'react';

export default ({ consumable, admin, onClickEdit, onClickDelete, onClickBuy }) => (
	<div className="col-3 no-col-margin">
		<div className="ds9799-lx-consumable-card text-center">
			<div className="ds9799-ws-package-label">{consumable.name}</div>
			<img src={consumable.image_url.replace('./public', 'http://localhost:3000')} style={{ paddingBottom: '10px' }} />
			{!admin && (
				<button
					className="btn btn-danger btn-block"
					onClick={() => onClickBuy(consumable)}>{`Buy : ${consumable.price} Credits`}</button>
			)}
			{admin && (
				<div className="badge badge-danger" style={{ marginBottom: '10px' }}>
					<strong>{`Price: ${consumable.price}`}</strong>
				</div>
			)}
			{admin && (
				<div className="row no-row-margin" style={{ width: '100%' }}>
					<div className="col no-col-margin">
						<button className="btn btn-primary btn-block" onClick={() => onClickEdit(consumable)}>
							Edit
						</button>
					</div>
					<div className="col no-col-margin">
						<button className="btn btn-danger btn-block" onClick={() => onClickDelete(consumable)}>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	</div>
);
