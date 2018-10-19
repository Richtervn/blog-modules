import './ProjectBoard.css';
import _ from 'underscore';
import React, { Component } from 'react';

import { openModal } from 'common/Modal';
import BoardColumn from './BoardColumn.container';

import { getContrastColor } from 'helpers';

const columns = [
  { key: 'Plans', label: 'Plans' },
  { key: 'Doing', label: 'Work In Progress' },
  { key: 'Done', label: 'Finished' },
  { key: 'Bugs', label: 'Bug Fixing' }
];

class ProjectBoard extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="row">
        <div className="project-board-header">
          <button className="btn" onClick={() => openModal('ProjectSetting')}>
            <i className="fa fa-gear" />
          </button>
          <h4>{project.Name}</h4>
          <div className="project-tags">
            {project.TagColor.map((tag, i) => (
              <div key={tag._id} className="project-color-tag" style={{ backgroundColor: tag.Color }}>
                {tag.Label}
              </div>
            ))}
          </div>
        </div>
        <div className="project-board-content" style={{ backgroundColor: project.Color }}>
          {!_.isEmpty(project.TagColor) &&
            columns.map((column, i) => <BoardColumn key={i} column={column} items={project[column.key]} />)}
          {_.isEmpty(project.TagColor) && (
            <div className="notice-wrapper">
              <h4 style={{ color: getContrastColor(project.Color) }}>Start by adding tags</h4>
            </div>
          )}
        </div>
        )}
      </div>
    );
  }
}

export default ProjectBoard;
