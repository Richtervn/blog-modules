import React from 'react';

export default ({ pages, currentPage, onChangePage }) => (
	<div className="row no-row-margin">
		{pages.map((page, i) => (
			<div className="col-4 no-col-margin" key={i}>
				<div className="mg-10">
					<div
						className={currentPage == page ? 'ds9799-lx-nav-item ds9799-lx-nav-item-active' : 'ds9799-lx-nav-item'}
						onClick={() => onChangePage(page)}>
						{page}
					</div>
				</div>
			</div>
		))}
	</div>
);
