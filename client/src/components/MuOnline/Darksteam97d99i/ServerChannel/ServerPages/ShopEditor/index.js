import React, { Component } from 'react';

import ShopFileSelector from './ShopFileSelector';
import ExcItemOptions from './ExcItemOptions';

import ItemSelector from '../BagItemsEditor/ItemSelector';
import BasicItemOptions from '../BagItemsEditor/BasicItemOptions';

class ShopEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileData: [
        '//Generated By VuPham',
        '//[Lorencia] Hans The Blacksmith',
        '// type,   index,  level,  skill,  luck,   option,   exc'
      ],
      category: 'Swords',
      itemId: 0,
      luck: false,
      skill: false,
      option: 0,
      level: 0,
      exc1: false,
      exc2: false,
      exc3: false,
      exc4: false,
      exc5: false,
      exc6: false
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
    const { category, exc1, exc2, exc3, exc4, exc5, exc6 } = this.state;
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

    let excOpt = 0;
    if(exc1) excOpt += 1;
    if(exc2) excOpt += 2;
    if(exc3) excOpt += 4;
    if(exc4) excOpt += 8;
    if(exc5) excOpt += 16;
    if(exc6) excOpt += 32;

    line.push(excOpt);

    itemDescription += ` +${this.state.level}`;
    if (this.state.skill) {
      itemDescription += ' +skill';
    }
    if (this.state.luck) {
      itemDescription += ' +luck';
    }
    if(excOpt > 0){
      itemDescription += ' +excillent';
    }
    itemDescription += ` +${this.state.option} options`;
    nextState.fileData.push(line.join('      ') + `   //${itemDescription}`);
    this.setState(nextState);
  }

  removeLine(i) {
    const nextState = { ...this.state };
    nextState.fileData.splice(i, 1);
    this.setState({ fileData: nextState.fileData });
  }

  render() {
    const { data, onGetData } = this.props;
    const { exc1, exc2, exc3, exc4, exc5, exc6, category } = this.state;
    return (
      <div className="row no-row-margin">
        <div className="col-5 no-col-margin">
          <div className="ds9799-dashboard-container">
            <ShopFileSelector
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
            />
            <BasicItemOptions
              luck={this.state.luck}
              skill={this.state.skill}
              onChangeCheck={this.changeCheck}
              option={this.state.option}
              level={this.state.level}
              onChangeLevel={this.changeLevel}
            />
            <ExcItemOptions
              exc={{ exc1, exc2, exc3, exc4, exc5, exc6 }}
              onChangeCheck={this.changeCheck}
              category={category}
              itemId={this.state.itemId}
            />
            <button className="btn btn-block btn-danger mgt-10" onClick={() => this.generate()}>
              Generate
            </button>
          </div>
        </div>
        <div className="col-7 no-col-margin">
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

export default ShopEditor;
