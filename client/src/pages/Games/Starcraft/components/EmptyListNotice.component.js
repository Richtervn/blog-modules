import './EmptyListNotice.css';
import React from 'react';

export default () => (
	<div className="sc-empty-list-notice">
		<i className="fa fa-long-arrow-up fa-2x" />
		<div className="notice">Click add button above to insert items</div>
	</div>
);
