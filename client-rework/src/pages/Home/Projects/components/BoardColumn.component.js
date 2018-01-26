import './BoardColumn.css';
import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const Types = {
  CARD: 'card'
};

const boardTarget = {
  drop(props, monitor, component) {},
  hover(props, monitor, component) {},
  canDrop(props, monitor) {}
};

const collect = (connect, monitor) => {
  // connectDragSource: connect.dragSource(),
  // isOver: monitor.isOver(),
  // isOverCurrent: monitor.isOver({ shallow: true }),
  return {
    connectDropTarget: connect.dropTarget()

    // isDragging: monitor.isDragging()
  };
};

class BoardColumn extends Component {
  render() {
    const { label, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="project-board-column">
        <div className="column-label">{label}</div>
        <button className="btn btn-block btn-success btn-sm">
          <i className="fa fa-plus-circle" />
        </button>
      </div>
    );
  }
}

export default DropTarget(Types.CARD, boardTarget, collect)(BoardColumn);
