import './AppMenu.css';
import React, { Component } from 'react';

import PageContainer from 'common/PageContainer';
import { PageLoader } from 'common/Loaders';

import { FormGroupRow, FormGroupArray } from 'components/FormTools';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { menuTree: this.initState(this.props.menuTree) };
    this.initState = this.initState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleClearChanges = this.handleClearChanges.bind(this);
    this.handleRemoveGroup = this.handleRemoveGroup.bind(this);
    this.handleAddGroup = this.handleAddGroup.bind(this);
  }

  initState(menuTree) {
    if (!menuTree) return null;
    const newState = Object.keys(menuTree).map(group => {
      return {
        groupName: group,
        items: menuTree[group].items.slice(0),
        quote: menuTree[group].quote,
        author: menuTree[group].author,
        icon: menuTree[group].icon
      };
    });
    return newState;
  }

  handleChange(event, index, itemIndex) {
    const { name, value } = event.target;
    const menuTree = [...this.state.menuTree];
    switch (name) {
      case 'item':
        menuTree[index].items[itemIndex] = value;
        break;
      default:
        menuTree[index][name] = value;
        break;
    }
    this.setState({ menuTree });
  }

  handleAddItem(index) {
    const menuTree = this.state.menuTree.slice(0);
    menuTree[index].items.push('');
    this.setState({ menuTree });
  }

  handleAddGroup() {
    const menuTree = this.state.menuTree.slice(0);
    menuTree.push({
      groupName: '',
      items: [''],
      quote: '',
      author: '',
      icon: ''
    });
    this.setState({ menuTree });
  }

  handleRemoveGroup(index) {
    const menuTree = this.state.menuTree.slice(0);
    menuTree.splice(index, 1);
    this.setState({ menuTree });
  }

  handleRemoveItem(name, index, itemIndex) {
    const menuTree = this.state.menuTree.slice(0);
    menuTree[index].items.splice(itemIndex, 1);
    this.setState({ menuTree });
  }

  handleSave() {
    const saveBody = {};
    this.state.menuTree.forEach(group => {
      saveBody[group.groupName] = {};
      saveBody[group.groupName].items = group.items;
      saveBody[group.groupName].author = group.author;
      saveBody[group.groupName].quote = group.quote;
      saveBody[group.groupName].icon = group.icon;
    });
    this.props.onSave(saveBody);
  }

  handleClearChanges() {
    this.setState({ menuTree: this.initState({ ...this.props.menuTree }) });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuTree && !this.state.menuTree) {
      this.setState({ menuTree: this.initState({ ...nextProps.menuTree }) });
    }
  }

  render() {
    const { menuTree } = this.props;
    if (!menuTree) {
      return <PageLoader />;
    }
    return (
      <PageContainer>
        <div className="row app-menu-page">
          {this.state.menuTree.map((group, i) => [
            <div className="col-6" key={`group-${i}`}>
              <FormGroupRow
                type="text"
                label="Group Name"
                name="groupName"
                onChange={e => this.handleChange(e, i)}
                value={this.state.menuTree[i].groupName}
              />
              <button className="btn btn-danger" onClick={() => this.handleRemoveGroup(i)}>
                Remove this group
              </button>
            </div>,
            <div className="col-6" key={`field-${i}`}>
              <FormGroupRow
                type="text"
                label="Quote"
                name="quote"
                onChange={e => this.handleChange(e, i)}
                value={this.state.menuTree[i].quote}
              />
              <FormGroupRow
                type="text"
                label="Author"
                name="author"
                onChange={e => this.handleChange(e, i)}
                value={this.state.menuTree[i].author}
              />
              <FormGroupRow
                type="text"
                label="Icon Name"
                name="icon"
                onChange={e => this.handleChange(e, i)}
                value={this.state.menuTree[i].icon}
              />
              <FormGroupArray
                label="Items"
                type="text"
                name="item"
                arrayValues={this.state.menuTree[i].items}
                onChange={(e, index) => this.handleChange(e, i, index)}
                onRemove={(name, index) => this.handleRemoveItem(name, i, index)}
                onAdd={() => this.handleAddItem(i)}
              />
            </div>
          ])}

          <button className="btn btn-primary" onClick={() => this.handleSave()}>
            Save
          </button>
          <button className="btn btn-warning" onClick={() => this.handleAddGroup()}>
            Add Group
          </button>
          <button className="btn btn-danger" onClick={() => this.handleClearChanges()}>
            Clear Changes
          </button>
        </div>
      </PageContainer>
    );
  }
}

export default AppMenu;
