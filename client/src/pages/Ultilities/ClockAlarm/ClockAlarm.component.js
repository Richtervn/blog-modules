import './ClockAlarm.css';
import React, { useEffect, useState } from 'react';

import PageContainer from 'common/PageContainer';
import { Clock } from 'components/Other';
// import { Clock } from 'react-clock';

export default () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
	});
	return (
		<PageContainer backgroundUrl="/images/backgrounds/white-wall.jpg">
			<div className="row" id="clock-alarm-page">
				<div className="clock-col">
					<Clock />
				</div>
				<div className="">.</div>
			</div>
		</PageContainer>
	);
};
