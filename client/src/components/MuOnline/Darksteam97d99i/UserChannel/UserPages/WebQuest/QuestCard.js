import React from 'react';

export default ({ quest, icon, onRequestReward }) => (
	<div
		className={`ds9799-quest-card  ${quest.isDone ? 'ds9799-quest-card-completed' : ''}`}
		onClick={() => {
			if (quest.isDone) onRequestReward(quest._id);
		}}>
		<div className="row no-row-margin">
			<div>
				<img src={icon} className="ds9799-quest-card-icon" />
			</div>
			<div className="ds9799-quest-card-content">
				<div className="ds9799-quest-card-title">{quest.description.replace('%(requirement)', quest.requirement)}</div>
				<div className="ds9799-quest-card-subtitle">
					{quest.rules.map((rule, i) => <i key={i}>{rule.replace('%(requirement)', quest.requirement)}</i>)}
				</div>
				<div className="progress ds9799-quest-progress">
					<div
						className={`progress-bar progress-bar-striped ${quest.progress < 100 ? 'progress-bar-animated' : ''}`}
						style={{ width: `${quest.progress || 0}%` }}
					/>
				</div>
			</div>
		</div>
	</div>
);
