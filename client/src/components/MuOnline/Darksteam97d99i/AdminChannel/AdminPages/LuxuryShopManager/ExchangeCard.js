import React from 'react';

export default ({ exchange, admin, onClickEdit, onClickDelete, onClickBuy }) => (
	<div className="col-3 no-col-margin">
		<div className="ds9799-lx-exchange-card text-center">
			<div className="ds9799-ws-package-label">{exchange.name}</div>
			<img
				src={exchange.image_url.replace('./public', 'http://localhost:3000')}
				style={{ paddingBottom: '10px', width: '125px', height: '125px' }}
			/>
			{!admin && (
				<button
					className="btn btn-danger btn-block"
					onClick={() => onClickBuy(exchange)}>{`Trade for ${exchange.price} Credits`}</button>
			)}
			{admin && (
				<div className="badge badge-danger" style={{ marginBottom: '10px' }}>
					<strong>{`Price: ${exchange.price}`}</strong>
				</div>
			)}
			{admin && (
				<div className="row no-row-margin" style={{ width: '100%' }}>
					<div className="col no-col-margin">
						<button className="btn btn-primary btn-block" onClick={() => onClickEdit(exchange)}>
							Edit
						</button>
					</div>
					<div className="col no-col-margin">
						<button className="btn btn-danger btn-block" onClick={() => onClickDelete(exchange)}>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	</div>
);
