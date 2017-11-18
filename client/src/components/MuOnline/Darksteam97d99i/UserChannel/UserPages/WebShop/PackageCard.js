import React from 'react';

export default ({ pack }) => (
	<div className="col-4 no-col-margin">
		<div className="ds9799-ws-package-card text-center">
			<div className="ds9799-ws-package-label">{pack.name}</div>
			<img src={pack.image_url.replace('./public', 'http://localhost:3000')} style={{ paddingBottom: '10px' }} />
			<button className="btn btn-danger btn-block">{`Buy : ${pack.price} Credits`}</button>
		</div>
	</div>
);
