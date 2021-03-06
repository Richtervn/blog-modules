import './ProjectItemDetail.css';
import _ from 'underscore';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const getTagColor = (tagColors, tag) => {
  const TagColor = tagColors.find(tagColor => tagColor.Label === tag);
  if (TagColor) {
    return TagColor.Color;
  }
  return 'gray';
};

class ProjectItemDetail extends Component {
  constructor(props) {
    super(props);
    this.initStateValue = this.initStateValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openSelectTag = this.openSelectTag.bind(this);
    this.closeSelectTag = this.closeSelectTag.bind(this);
    this.handleTagSelect = this.handleTagSelect.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
    this.handleChangeSubTaskLabel = this.handleChangeSubTaskLabel.bind(this);
    this.handleAddSubTask = this.handleAddSubTask.bind(this);
    this.handleRemoveSubTask = this.handleRemoveSubTask.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleItemDescription = this.handleItemDescription.bind(this);

    this.state = {
      value: this.initStateValue({ ...this.props.item }),
      editing: false,
      selectingTag: false,
      progress: this.calcProgress(this.props.item.SubTasks)
    };
  }

  initStateValue(item) {
    return {
      Label: item.Label || [],
      Description: item.Description || '',
      Tags: [...item.Tags],
      SubTasks: item.SubTasks.map(subTask => ({ ...subTask })).slice(0)
    };
  }

  handleItemDescription(value) {
    const content = value.split(/\n/);
    return <div>{content.map((line, i) => <p key={i}>{line}</p>)}</div>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item._id !== this.props.item._id) {
      this.setState({
        value: this.initStateValue({ ...nextProps.item }),
        editing: false,
        selectingTag: false,
        progress: this.calcProgress(nextProps.item.SubTasks)
      });
    }
  }

  openSelectTag() {
    this.setState({ selectingTag: true });
    document.addEventListener('click', this.closeSelectTag);
  }

  calcProgress(subTasks) {
    const progress = subTasks.filter(subTask => subTask.IsDone && subTask.Label).length / subTasks.length * 100;
    return progress;
  }

  closeSelectTag(event) {
    if (this.TagSelector && !this.TagSelector.contains(event.target)) {
      event.stopImmediatePropagation();
      this.setState({ selectingTag: false });
      document.removeEventListener('click', this.closeSelectTag);
    }
  }

  handleAddSubTask() {
    this.state.value.SubTasks.push({ isDone: false, Label: '' });
    this.setState({ value: { ...this.state.value, SubTasks: [...this.state.value.SubTasks] } });
  }

  handleRemoveSubTask(index) {
    this.state.value.SubTasks.splice(index, 1);
    this.setState({ value: { ...this.state.value, SubTasks: [...this.state.value.SubTasks] } });
  }

  handleChange(event, index) {
    const { name, value } = event.target;
    this.setState({ value: { ...this.state.value, [name]: value } });
  }

  handleChangeSubTaskLabel(event, index) {
    const { value } = event.target;
    let { SubTasks } = this.state.value;
    SubTasks[index].Label = value;
    this.setState({ value: { ...this.state.value, SubTasks: [...SubTasks] } });
  }

  handleTagSelect(label) {
    let { Tags } = this.state.value;
    if (!_.contains(Tags, label)) {
      Tags.push(label);
    } else {
      Tags = _.without(Tags, label);
    }
    this.setState({ value: { ...this.state.value, Tags: [...Tags] } });
  }

  handleChangeCheck(label) {
    const SubTasks = this.state.value.SubTasks.map(subTask => {
      if (subTask.Label === label) {
        subTask.IsDone = !subTask.IsDone;
      }
      return subTask;
    });
    this.setState({ value: { ...this.state.value, SubTasks: [...SubTasks] }, progress: this.calcProgress(SubTasks) });
    const formBody = {
      projectId: this.props.projectId,
      item: { ...this.state.value, _id: this.props.item._id },
      Column: this.props.column.key
    };
    this.props.onEditItem(formBody);
  }

  handleSave() {
    const formBody = {
      projectId: this.props.projectId,
      item: { ...this.state.value, _id: this.props.item._id },
      Column: this.props.column.key
    };
    this.props.onEditItem(formBody);
    this.setState({
      editing: false
    });
  }

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
            <button key="btn-save" className="btn btn-primary" onClick={() => this.handleSave()}>
              <i className="fa fa-save fa-fw" />
            </button>,
            <button
              key="btn-cancel"
              className="btn btn-danger"
              onClick={() => this.setState({ editing: false, value: { ...this.initStateValue({ ...item }) } })}>
              <i className="fa fa-times fa-fw" />
            </button>
          ]}
        </div>
        <div className="item-detail-view">
          {editing && (
            <input type="text" value={value.Label} onChange={this.handleChange} className="label-input" name="Label" />
          )}
          {!editing && <div className="item-label">{item.Label}</div>}
          <p className="item-subtitle">
            In column : <u>{column.label}</u>
          </p>
          <div className="item-color-tags">
            {value.Tags.map((tag, i) => (
              <div key={i} className="item-color-tag" style={{ backgroundColor: getTagColor(tagColors, tag) }}>
                {tag}
              </div>
            ))}
            {editing && (
              <div className="item-tag-selector-wrapper">
                <button className="btn btn-secondary" onClick={() => this.openSelectTag()}>
                  <i className="fa fa-plus" />
                </button>
                {selectingTag && (
                  <div className="item-tag-selector" ref={node => (this.TagSelector = node)}>
                    {tagColors.map((tagColor, i) => (
                      <div
                        key={i}
                        className="item-tag-option"
                        style={{ backgroundColor: tagColor.Color }}
                        onClick={() => this.handleTagSelect(tagColor.Label)}>
                        {tagColor.Label}
                        {value.Tags.find(tag => tagColor.Label === tag) && (
                          <span className="pull-right">
                            <i className="fa fa-check fa-fw" />
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {item.Description && <div className="paragraph-label">Description : </div>}
          {!item.Description && editing && <div className="paragraph-label">Description : </div>}
          {!editing && <div><ReactMarkdown source={item.Description}/></div>}
          {editing && (
            <textarea
              className="description-input"
              value={value.Description}
              onChange={this.handleChange}
              rows={4}
              name="Description"
            />
          )}
          {item.SubTasks.filter(subTask => subTask.Label).length > 0 && [
            <div key="st-l" className="paragraph-label">
              Tasks List :
            </div>,
            <div key="st-p" className="progress">
              <div
                className={`progress-bar bg-success progress-bar-striped ${
                  progress < 100 ? 'progress-bar-animated' : ''
                }`}
                style={{ width: `${progress || 0}%` }}
              />
            </div>
          ]}
          {item.SubTasks.filter(subTask => subTask.Label).length < 1 &&
            editing && <div className="paragraph-label">Tasks List :</div>}
          {value.SubTasks.map((subTask, i) => {
            if (editing) {
              return (
                <div key={i} className="sub-task-list">
                  <input
                    type="text"
                    value={subTask.Label}
                    className="item-sub-task-label-input"
                    onChange={event => this.handleChangeSubTaskLabel(event, i)}
                    name="SubTask"
                    placeholder="New Sub Task's Label"
                  />
                  <button className="btn btn-danger" onClick={() => this.handleRemoveSubTask(i)}>
                    <i className="fa fa-times" />
                  </button>
                </div>
              );
            } else {
              if (!subTask.Label) {
                return null;
              }
              return (
                <div key={i} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={subTask.IsDone ? true : false}
                    onChange={() => this.handleChangeCheck(subTask.Label)}
                  />
                  <label className="form-check-label">{subTask.Label}</label>
                </div>
              );
            }
          })}
          {editing && (
            <button className="btn btn-primary btn-add-sub-task" onClick={() => this.handleAddSubTask()}>
              <i className="fa fa-plus fa-fw" />&nbsp;Add a sub task
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectItemDetail;
