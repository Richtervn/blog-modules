import './BoardCard.css';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const Types = {
  CARD: 'card'
};

const cardSource = {
  beginDrag(props, monitor, component) {
    return { ...props.item };
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
    return connectDragSource(
      <div>
        {!isDragging && (
          <div className="project-item-card" onClick={() => console.log('Clicked')}>
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
          </div>
        )}
        {isDragging && <div />}
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, collect)(BoardCard);
