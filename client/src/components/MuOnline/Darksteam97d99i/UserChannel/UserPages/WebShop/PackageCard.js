import React from 'react';

export default ({ pack, admin, onClickEdit, onClickDelete, onClickBuy }) => (
	<div className="col-4 no-col-margin">
		<div className="ds9799-ws-package-card text-center">
			<div className="ds9799-ws-package-label">{pack.name}</div>
			<img src={pack.image_url.replace('./public', 'http://localhost:3000')} style={{ paddingBottom: '10px' }} />
			{!admin && (
				<button className="btn btn-danger btn-block" onClick={() => onClickBuy(pack)}>{`Buy : ${pack.price} Credits`}</button>
			)}
			{admin && (
				<div className="badge badge-danger" style={{ marginBottom: '10px' }}>
					<strong>{`Price: ${pack.price}`}</strong>
				</div>
			)}
			{admin && (
				<div className="row no-row-margin" style={{ width: '100%' }}>
					<div className="col no-col-margin">
						<button className="btn btn-primary btn-block" onClick={() => onClickEdit(pack)}>
							Edit
						</button>
					</div>
					<div className="col no-col-margin">
						<button className="btn btn-danger btn-block" onClick={() => onClickDelete(pack)}>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	</div>
);
