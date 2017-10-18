import React, { Component } from 'react';

import BagFileSelector from './BagFileSelector';
import ItemSelector from './ItemSelector';
import BasicItemOptions from './BasicItemOptions';

class BagItemsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileData: [
        '//Generated By VuPham',
        '//Box Of Luck',
        '//type,   index,  level,  skill,  luck,   option'
      ],
      category: 'Swords',
      itemId: 0,
      luck: false,
      skill: false,
      option: 0,
      level: 0
    };
    this.selectFile = this.selectFile.bind(this);
    this.selectItemCategory = this.selectItemCategory.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.changeCheck = this.changeCheck.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.generate = this.generate.bind(this);
    this.removeLine = this.removeLine.bind(this);
  }

  selectFile(file) {
    const nextState = [...this.state.fileData];
    nextState[1] = `//${file}`;
    this.setState({ fileData: nextState });
  }

  selectItemCategory(category) {
    this.setState({ category: category });
  }

  selectItem(itemId) {
    this.setState({ itemId: itemId });
  }

  changeCheck(name) {
    this.setState({ [name]: !this.state[name] });
  }

  changeLevel(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  generate() {
    const { data } = this.props;
    const { category } = this.state;
    const nextState = { ...this.state };
    const line = [];
    let itemDescription = '';
    data.Categories.forEach(category => {
      if (category.Name == this.state.category) {
        line.push(category._id);
      }
    });
    line.push(this.state.itemId);
    line.push(this.state.level);
    line.push(this.state.skill ? 1 : 0);
    line.push(this.state.luck ? 1 : 0);
    line.push(this.state.option);
    data[category].forEach(item => {
      if (item._id == this.state.itemId) {
        itemDescription += item.Name;
      }
    });
    itemDescription += ` +${this.state.level}`;
    if (this.state.skill) {
      itemDescription += ' +skill';
    }
    if (this.state.luck) {
      itemDescription += ' +luck';
    }
    itemDescription += ` +${this.state.option} options`;
    nextState.fileData.push(line.join('  ') + `   //${itemDescription}`);
    this.setState(nextState);
  }

  removeLine(i) {
    const nextState = { ...this.state };
    nextState.fileData.splice(i, 1);
    this.setState({ fileData: nextState.fileData });
  }

  render() {
    const { data, onGetData } = this.props;
    return (
      <div className="row no-row-margin">
        <div className="col-4 no-col-margin">
          <div className="ds9799-dashboard-container">
            <BagFileSelector
              data={data}
              onGetData={onGetData}
              onSelect={e => this.selectFile(e.target.value)}
            />
            <ItemSelector
              data={data}
              onGetData={onGetData}
              onSelectCategory={e => this.selectItemCategory(e.target.value)}
              category={this.state.category}
              onSelectItem={e => this.selectItem(e.target.value)}
              itemId={this.state.itemId}
              itemLvl={this.state.level}
            />
            <BasicItemOptions
              luck={this.state.luck}
              skill={this.state.skill}
              onChangeCheck={this.changeCheck}
              option={this.state.option}
              level={this.state.level}
              onChangeLevel={this.changeLevel}
            />
            <button className="btn btn-block btn-danger mgt-10" onClick={() => this.generate()}>
              Generate
            </button>
          </div>
        </div>
        <div className="col-8 no-col-margin">
          <div className="ds9799-bag-preview">
            {this.state.fileData.map((line, i) => (
              <div key={i}>
                <p>
                  {line}
                  {i > 2 && (
                    <span className="pull-right">
                      <button className="btn btn-danger btn-sm" onClick={() => this.removeLine(i)}>
                        <i className="fa fa-times" />
                      </button>
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BagItemsEditor;