import './ArticleView.css';
import React, { Component } from 'react';
import classNames from 'classnames';

const newSection = {
  Label: '',
  Content: '',
  SubSections: []
};

const newSubSection = {
  Label: '',
  Content: ''
};

class ArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editingIndex: 0,
      adding: false,
      Sections: this.props.data.slice(0),
      addSection: { ...newSection }
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleAddSection = this.handleAddSection.bind(this);

    this.handleAddSave = this.handleAddSave.bind(this);
    this.handleAddingSubSection = this.handleAddingSubSection.bind(this);
    this.handleRemoveAddingSubSection = this.handleRemoveAddingSubSection.bind(this);
    this.handleChangeAddSection = this.handleChangeAddSection.bind(this);
    this.handleClearAddingSubSection = this.handleClearAddingSubSection.bind(this);

    this.handleEditSave = this.handleEditSave.bind(this);
    this.handleAddEditingSubSection = this.handleAddEditingSubSection.bind(this);
    this.handleRemoveEditingSubSection = this.handleRemoveEditingSubSection.bind(this);
    this.handleChangeEditSection = this.handleChangeEditSection.bind(this);
    this.handleClearEditingSubSection = this.handleClearEditingSubSection.bind(this);
  }

  handleEditClick(i) {
    this.setState({ editing: true, editingIndex: i });
  }

  handleDeleteClick(i) {
    const sectionsValue = this.state.Sections;
    sectionsValue.splice(i, 1);
    this.props.onSave(sectionsValue);
  }

  handleAddSection() {
    this.setState({ adding: true });
  }

  handleEditSave() {
    this.props.onSave(this.state.Sections);
    this.setState({ editing: false });
  }

  handleAddSave() {
    const sectionsValue = this.state.Sections;
    sectionsValue.push(this.state.addSection);
    this.props.onSave(sectionsValue);
    this.setState({ adding: false, addSection: { ...newSection, SubSections: [] } });
  }

  handleAddingSubSection() {
    const addSectionValue = { ...this.state.addSection };
    addSectionValue.SubSections.push({ ...newSubSection });
    this.setState({ addSection: addSectionValue });
  }

  handleRemoveAddingSubSection(index) {
    const addSectionValue = { ...this.state.addSection };
    addSectionValue.SubSections.splice(index, 1);
    this.setState({ addSection: addSectionValue });
  }

  handleChangeAddSection(event, index) {
    const { name, value } = event.target;
    const addSectionValue = { ...this.state.addSection };
    switch (name) {
      case 'SubLabel':
        addSectionValue.SubSections[index].Label = value;
        break;
      case 'SubContent':
        addSectionValue.SubSections[index].Content = value;
        break;
      default:
        addSectionValue[name] = value;
        break;
    }
    this.setState({ addSection: addSectionValue });
  }

  handleClearAddingSubSection() {
    this.setState({ addSection: { ...newSection }, adding: false });
  }

  handleAddEditingSubSection(index) {
    const sectionsValue = this.state.Sections;
    sectionsValue[index].SubSections.push({ ...newSubSection });
    this.setState({ Sections: sectionsValue });
  }

  handleRemoveEditingSubSection(sectionIndex, subSectionIndex) {
    const sectionsValue = this.state.Sections;
    sectionsValue[sectionIndex].SubSections.splice(subSectionIndex, 1);
    this.setState({ Sections: sectionsValue });
  }

  handleChangeEditSection(event, sectionIndex, subSectionIndex) {
    const sectionsValue = this.state.Sections;
    const { name, value } = event.target;
    switch (name) {
      case 'SubLabel':
        sectionsValue[sectionIndex].SubSections[subSectionIndex].Label = value;
        break;
      case 'SubContent':
        sectionsValue[sectionIndex].SubSections[subSectionIndex].Content = value;
        break;
      default:
        sectionsValue[sectionIndex][name] = value;
        break;
    }
    this.setState({ Sections: sectionsValue });
  }

  handleClearEditingSubSection() {
    this.setState({ Sections: this.props.data.slice(0), editing: false });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        editing: false,
        editingIndex: 0,
        adding: false,
        Sections: nextProps.data.slice(0),
        addSection: { ...newSection }
      });
    }
  }

  render() {
    const { data, customClass } = this.props;
    const { editing, adding, editingIndex } = this.state;

    return (
      <div className={classNames('article-view-wrapper', customClass)}>
        {data.length <= 0 &&
          !adding && (
            <div className="default-view">
              <i>Hover me and click at the corner button to start adding contents</i>
            </div>
          )}
        {data.map((obj, i) => {
          if (editing && editingIndex === i) {
            return (
              <div key={i}>
                <div className="article-view-form">
                  <input
                    type="text"
                    className="label-input"
                    value={this.state.Sections[i].Label}
                    onChange={e => this.handleChangeEditSection(e, i)}
                    name="Label"
                  />
                  <textarea
                    rows={4}
                    className="content-input"
                    value={this.state.Sections[i].Content}
                    onChange={e => this.handleChangeEditSection(e, i)}
                    name="Content"
                  />
                  <div className="article-view-form-btns">
                    <button className="btn btn-primary" onClick={this.handleEditSave}>
                      Save
                    </button>
                    <button className="btn btn-warning" onClick={() => this.handleAddEditingSubSection(i)}>
                      Add Sub Section
                    </button>
                    <button className="btn btn-danger" onClick={this.handleClearEditingSubSection}>
                      Cancel
                    </button>
                  </div>
                  {this.state.Sections[i].SubSections &&
                    this.state.Sections[i].SubSections.map((subSection, index) => (
                      <div key={index}>
                        <div className="article-sub-section-form">
                          <input
                            type="text"
                            className="label-input"
                            value={this.state.Sections[i].SubSections[index].Label}
                            onChange={e => this.handleChangeEditSection(e, i, index)}
                            name="SubLabel"
                          />
                          <textarea
                            rows={4}
                            className="content-input"
                            value={this.state.Sections[i].SubSections[index].Content}
                            onChange={e => this.handleChangeEditSection(e, i, index)}
                            name="SubContent"
                          />
                          <div className="article-sub-section-feature">
                            <button className="btn" onClick={() => this.handleRemoveEditingSubSection(i, index)}>
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          }
          return (
            <div className="article-view" key={i}>
              <div className="main-article" id={`section${i + 1}`}>
                <div className="article-label">
                  {obj.Label}&nbsp;
                  {!editing &&
                    !adding && (
                      <span className="article-edit">
                        <button className="btn" onClick={() => this.handleEditClick(i)}>
                          <i className="fa fa-edit" />
                        </button>
                        <button className="btn" onClick={() => this.handleDeleteClick(i)}>
                          <i className="fa fa-times" />
                        </button>
                      </span>
                    )}
                </div>
                <div className="article-text">
                  {obj.Content.split(/\n/g).map((text, id) => <div key={id}>{text}</div>)}
                </div>
              </div>
              {obj.SubSections &&
                obj.SubSections.map((subObj, subIndex) => (
                  <div key={`at${i}${subIndex}`} id={`section${i + 1}-${subIndex + 1}`}>
                    <div className="sub-article-label">{subObj.Label}</div>
                    <div className="sub-article-text">
                      {subObj.Content.split(/\n/g).map((text, id) => <div key={id}>{text}</div>)}
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
        <div className="article-view-feature">
          {!adding &&
            !editing && (
              <button className="btn" onClick={this.handleAddSection}>
                <i className="fa fa-plus" />
              </button>
            )}
        </div>
        {adding && (
          <div
            className="article-view-form"
            ref={node => {
              if (node) {
                node.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            <input
              type="text"
              className="label-input"
              value={this.state.addSection.Label}
              onChange={e => this.handleChangeAddSection(e)}
              name="Label"
            />
            <textarea
              rows={4}
              className="content-input"
              value={this.state.addSection.Content}
              onChange={e => this.handleChangeAddSection(e)}
              name="Content"
            />
            <div className="article-view-form-btns">
              <button className="btn btn-primary" onClick={this.handleAddSave}>
                Save
              </button>
              <button className="btn btn-warning" onClick={() => this.handleAddingSubSection()}>
                Add Sub Section
              </button>
              <button className="btn btn-danger" onClick={() => this.handleClearAddingSubSection()}>
                Cancel
              </button>
              {this.state.addSection.SubSections.map((subSection, index) => (
                <div key={index}>
                  <div className="article-sub-section-form">
                    <input
                      type="text"
                      className="label-input"
                      value={this.state.addSection.SubSections[index].Label}
                      onChange={e => this.handleChangeAddSection(e, index)}
                      name="SubLabel"
                    />
                    <textarea
                      rows={4}
                      className="content-input"
                      value={this.state.addSection.SubSections[index].Content}
                      onChange={e => this.handleChangeAddSection(e, index)}
                      name="SubContent"
                    />
                    <div className="article-sub-section-feature">
                      <button className="btn" onClick={() => this.handleRemoveAddingSubSection(index)}>
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

ArticleView.defaultProps = {
  customClass: 'default'
};

export default ArticleView;
