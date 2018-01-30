import './BoardColumn.css';
import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import BoardCard from './BoardCard.container';

import { openModal } from 'common/Modal';

const Types = {
  CARD: 'card'
};

const boardTarget = {
  drop(props, monitor, component) {
    return { ...props.column };
  },
  canDrop(props, monitor) {
    const item = monitor.getItem();
    if (props.column.key !== item.column.key) {
      return true;
    } else {
      return false;
    }
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOverCurrent: monitor.isOver({ shallow: true })
  };
};

class BoardColumn extends Component {
  render() {
    const { column, connectDropTarget, canDrop, onSetColumnOnAdd, items, isOverCurrent } = this.props;

    return connectDropTarget(
      <div className="project-board-column">
        <div className="column-label">{column.label}</div>
        <div className="project-column-contains">
          {items.map((item, i) => <BoardCard key={i} item={item} column={column} />)}
          {canDrop && isOverCurrent && <div className="project-item-placeholder" />}
        </div>

        <button
          className="btn btn-block btn-success btn-sm"
          onClick={() => {
            onSetColumnOnAdd(column);
            openModal('AddProjectItem');
          }}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>
    );
  }
}

export default DropTarget(Types.CARD, boardTarget, collect)(BoardColumn);
