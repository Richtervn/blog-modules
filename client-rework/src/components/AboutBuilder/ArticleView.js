import './ArticleView.css';
import React, { Component } from 'react';

class ArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editingIndex: 0,
      adding: false,
      Sections: this.props.data
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    // this.handleClearChange = this.handleClearChange.bind(this);
  }

  handleEditClick(i) {
    this.setState({ editing: true, editingIndex: i });
  }

  // handleClearChange() {}
  // handleSave() {}

  render() {
    const { data } = this.props;
    const { editing, adding, editingIndex } = this.state;
    return (
      <div className="article-view-wrapper">
        {data.map((obj, i) => {
          if (editing && editingIndex === i) {
            return (
              <div key={i}>
                <div className="article-view-form">
                  <input type="text" className="label-input" value={this.state.Sections[i].Label}/>
                  <textarea rows={4} className="content-input" value={this.state.Sections[i].Content}/>
                  <div className="article-view-form-btns">
                    <button className="btn btn-primary">Save</button>
                    <button className="btn btn-warning">Add Sub Section</button>
                    <button className="btn btn-danger">Cancel</button>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className="article-view" key={i}>
              <div className="main-article" id={`section${i + 1}`}>
                <div className="article-label">
                  {!editing && !adding && (
                    <span className="article-edit">
                      <button className="btn" onClick={() => this.handleEditClick(i)}>
                        <i className="fa fa-edit" />
                      </button>
                      &nbsp;
                    </span>
                  )}
                  {obj.Label}
                </div>
                <div className="article-text">{obj.Content}</div>
              </div>
              {obj.SubSections &&
                obj.SubSections.map((subObj, subIndex) => (
                  <div key={`at${i}${subIndex}`} id={`section${i + 1}-${subIndex + 1}`}>
                    <div className="sub-article-label">{subObj.Label}</div>
                    <div className="sub-article-text">{subObj.Content}</div>
                  </div>
                ))}
            </div>
          );
        })}
        <div className="article-view-feature">
          {!adding &&
            !editing && (
              <button className="btn" onClick={() => this.setState({ adding: true })}>
                <i className="fa fa-plus" />
              </button>
            )}
        </div>
        {adding && (
          <div className="article-view-form">
            <input type="text" className="label-input" />
            <textarea rows={4} className="content-input" />
            <div className="article-view-form-btns">
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-danger">Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ArticleView;
