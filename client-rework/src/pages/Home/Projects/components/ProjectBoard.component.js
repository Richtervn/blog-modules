import './ProjectBoard.css';
import React, { Component } from 'react';

import BoardColumn from './BoardColumn.component';

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
          <button className="btn btn-back">
            <i className="fa fa-long-arrow-left" />
          </button>
          <button className="btn">
            <i className="fa fa-save" />
          </button>
          <button className="btn">
            <i className="fa fa-gear" />
          </button>
          <h4>{project.Name}</h4>
        </div>
        <div className="project-board-content" style={{ backgroundColor: project.Color }}>
          {columns.map((column, i) => <BoardColumn key={i} label={column.label} />)}
        </div>
      </div>
    );
  }
}

export default ProjectBoard;
