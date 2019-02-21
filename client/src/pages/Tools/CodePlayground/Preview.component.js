/* eslint-disable */

import './Preview.css';
import React, { useEffect } from 'react';
import classnames from 'classnames';

const scriptRegexp = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;

export default ({ isShowConsole, html, css }) => {
	useEffect(() => {
		const scripts = [];
		let match;
		while ((match = scriptRegexp.exec(html))) {
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
		<div className={classnames('code-playground-preview', { 'show-console': isShowConsole })}>
			<div className="content-view" dangerouslySetInnerHTML={{ __html: html }} />
			<style>{css}</style>
		</div>
	);
};
