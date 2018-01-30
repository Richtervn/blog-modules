import './ProjectItemDetail.css';
import React, { Component } from 'react';

class ProjectItemDetail extends Component {
  constructor(props) {
    super(props);
    this.initStateValue = this.initStateValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openSelectTag = this.openSelectTag.bind(this);
    this.closeSelectTag = this.closeSelectTag.bind(this);
    this.state = {
      value: this.initStateValue(this.props.item),
      editing: false,
      selectingTag: false,
      progress: 10
    };
  }

  initStateValue(item) {
    return {
      Label: item.Label,
      Description: item.Description
    };
  }

  openSelectTag() {
    this.setState({ selectingTag: true });
    document.addEventListener('mousedown', this.closeSelectTag);
  }

  closeSelectTag(event) {
    if (this.TagSelector && !this.TagSelector.contains(event.target)) {
      this.setState({ selectingTag: false });
      document.removeEventListener('mousedown', this.closeSelectTag);
    }
  }

  handleChange() {}

  render() {
    const { item, column, tagColors } = this.props;
    const { editing, value, selectingTag, progress } = this.state;

    return (
      <div className="project-item-detail">
        <div className="item-feature">
          {!editing && [
            <button key="btn-edit" className="btn btn-primary" onClick={() => this.setState({ editing: true })}>
              <i className="fa fa-pencil fa-fw" />
            </button>,
            <button key="btn-cls" className="btn btn-danger" data-dismiss="modal">
              <i className="fa fa-times fa-fw" />
            </button>
          ]}
          {editing && [
            <button key="btn-save" className="btn btn-primary" onClick={() => this.enableEdit()}>
              <i className="fa fa-save fa-fw" />
            </button>,
            <button key="btn-cancel" className="btn btn-danger" onClick={() => this.setState({ editing: false })}>
              <i className="fa fa-times fa-fw" />
            </button>
          ]}
        </div>
        <div className="item-detail-view">
          {editing && <input type="text" value={value.Label} onChange={this.handleChange} className="label-input" />}
          {!editing && <div className="item-label">{item.Label}</div>}
          <p className="item-subtitle">
            In column : <u>{column.label}</u>
          </p>
          <div className="item-color-tags">
            {item.Tags.map((tag, i) => (
              <div
                key={i}
                className="item-color-tag"
                style={{ backgroundColor: tagColors.find(tagColor => tagColor.Label === tag).Color }}>
                {tag}
              </div>
            ))}
            <div className="item-tag-selector-wrapper">
              <button className="btn btn-secondary" onClick={() => this.openSelectTag()}>
                <i className="fa fa-plus" />
              </button>
              {selectingTag && (
                <div className="item-tag-selector" ref={node => (this.TagSelector = node)}>
                  {tagColors.map((tagColor, i) => (
                    <div key={i} className="item-tag-option" style={{ backgroundColor: tagColor.Color }}>
                      {tagColor.Label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {item.Description && <div className="paragraph-label">Description : </div>}
          {!item.Description && editing && <div className="paragraph-label">Description : </div>}
          {!editing && <div>{item.Description}</div>}
          {editing && (
            <textarea className="description-input" value={value.Description} onChange={this.handleChange} rows={4} />
          )}
          {item.SubTasks.filter(subTask => subTask.Label).length > 0 && [
            <div key="st-l" className="paragraph-label">
              Tasks List :
            </div>,
            <div key="st-p" className="progress">
              <div
                className={`progress-bar bg-success progress-bar-striped ${progress < 100
                  ? 'progress-bar-animated'
                  : ''}`}
                style={{ width: `${progress || 0}%` }}
              />
            </div>
          ]}
          {item.SubTasks.filter(subTask => subTask.Label).length < 1 && editing && (
            <div className="paragraph-label">Tasks List :</div>
          )}
          {item.SubTasks.filter(subTask => subTask.Label).map((subTask, i) => {
            if (editing) {
              return (
                <div key={i} className="form-check sub-task-list">
                  <input className="form-check-input" type="checkbox" checked={subTask.isDone} />
                  <input type="text" value={subTask.Label} className="item-sub-task-label-input" />
                  <button className="btn btn-danger">
                    <i className="fa fa-times" />
                  </button>
                </div>
              );
            } else {
              return (
                <div key={i} className="form-check">
                  <input className="form-check-input" type="checkbox" checked={subTask.isDone} />
                  <label className="form-check-label">{subTask.Label}</label>
                </div>
              );
            }
          })}
          {editing && (
            <button className="btn btn-primary btn-add-sub-task">
              <i className="fa fa-plus fa-fw" />&nbsp;Add a sub task
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectItemDetail;
