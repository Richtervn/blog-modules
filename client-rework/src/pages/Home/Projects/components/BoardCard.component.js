import './BoardCard.css';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import { openModal } from 'common/Modal';

const Types = {
  CARD: 'card'
};

const cardSource = {
  beginDrag(props, monitor, component) {
    return { ...props.item, column: { ...props.column } };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    const dropResult = monitor.getDropResult();
    if (dropResult.key === props.column.key) {
      return;
    }

    props.onMoveCardToList(props.item, dropResult, props.column);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class BoardCard extends Component {
  render() {
    const { connectDragSource, isDragging, item, TagColor } = this.props;
    const progress = item.SubTasks.filter(task => task.isDone).length / item.SubTasks.length * 100;

    return connectDragSource(
      <div>
        {!isDragging && (
          <div className="project-item-card" onClick={() => {
            openModal()
          }}>
            <div className="project-item-tags">
              {item.Tags.map((tag, i) => (
                <div
                  key={i}
                  className="project-item-tag"
                  style={{ backgroundColor: TagColor.filter(tagColor => tagColor.Label === tag)[0].Color }}>
                  {tag}
                </div>
              ))}
            </div>
            <h5>{item.Label}</h5>
            <div className="progress">
              <div
                className={`progress-bar progress-bar-striped bg-success ${progress < 100
                  ? 'progress-bar-animated'
                  : ''}`}
                style={{ width: `${progress || 0}%` }}>
                <i>{`${progress}%`}</i>
              </div>
            </div>
          </div>
        )}
        {isDragging && <div />}
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, collect)(BoardCard);
