import './EventDetail.css';

import React from 'react';

export default ({ event }) => {
	const isNoContent = !event.description && !event.HTML;
	return (
		<div className="modal-body">
			<div className="event-detail">
				{event.imageUrl && (
					<div className="banner">
						<a href={event.link} target="_blank" rel="noreferrer noopener">
							<img src={event.imageUrl} alt={event.title} />
						</a>
					</div>
				)}
				{isNoContent && (
					<div className="no-content">
						<h1>No content available</h1>
					</div>
				)}
				{!isNoContent && (
					<div className="content">
						{event.description && <div className="description">{event.description}</div>}
						{event.HTML && <div className="html-content" dangerouslySetInnerHTML={{ __html: event.HTML }} />}
						{event.CSS && <style>{event.CSS}</style>}
					</div>
				)}
				{event.link && (
					<a className="event-link" href={event.link} target="_blank" rel="noreferrer noopener">
						Read more
					</a>
				)}
			</div>
		</div>
	);
};
