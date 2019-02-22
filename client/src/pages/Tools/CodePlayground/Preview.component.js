/* eslint-disable */
import './Preview.css';
import React, { useEffect } from 'react';
import classnames from 'classnames';

import { regexp } from 'helpers';

export default ({ isShowConsole, isFullscreen, html, css }) => {
	useEffect(() => {
		const scripts = [];
		let match;
		while ((match = regexp.script.exec(html))) {
			scripts.push(match[1]);
		}

		scripts.forEach(script => {
			try {
				window.eval(script);
			} catch (e) {
				console.log(e);
			}
		});
	}, [html]);
	return (
		<div className={classnames('code-playground-preview', { 'show-console': isShowConsole, fullscreen: isFullscreen })}>
			<div className="content-view" dangerouslySetInnerHTML={{ __html: html }} />
			<style>{css}</style>
		</div>
	);
};

