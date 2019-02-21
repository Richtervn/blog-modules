import './ToolsBar.css';
import React from 'react';
import classnames from 'classnames';

const availbleFiles = ['HTML', 'JS', 'CSS'];

export default ({
	activeFile,
	onSwitchFile,
	isShowConsole,
	isCodeFullScreen,
	isPreviewFullscreen,
	onToggleConsole,
	onToggleCode,
	onTogglePreview,
	onPlayClick
}) => {
	return (
		<div className="code-playground-toolsbar">
			<div className="files">
				{availbleFiles.map(file => (
					<div
						key={file}
						className={classnames('file', { active: file === activeFile })}
						onClick={() => onSwitchFile(file)}>
						{file}
					</div>
				))}
			</div>
			<div className="features">
				<button className="feature" onClick={() => onPlayClick()}>
					<i className="fa fa-play" />
				</button>
				<button className={classnames('feature', { active: isCodeFullScreen })} onClick={() => onToggleCode()}>
					<i className="fa fa-share-square-o" />
				</button>
				<button className={classnames('feature', { active: isPreviewFullscreen })} onClick={() => onTogglePreview()}>
					<i className="fa fa-share-square-o fa-flip-horizontal" />
				</button>
				<button className={classnames('feature', { active: isShowConsole })} onClick={() => onToggleConsole()}>
					<i className="fa fa-user-secret" />
				</button>
			</div>
		</div>
	);
};
