import React, { Component } from 'react';
import { ModalHeader } from 'components/Modal';

import { SlotSelector, ItemSelector, BasicItemOptions, ExcItemOptions } from '../../../components';

const initialMaterial = {
  name: '',
  category: 'Swords',
  duration: 255,
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
  exc6: false,
  count: 0
};

class ModalAddReceipt extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = this.initState(this.props.receipt);

    this.onSelectItemCategory = this.onSelectItemCategory.bind(this);
    this.onSelectItemSlot = this.onSelectItemSlot.bind(this);
    this.onSelectItemId = this.onSelectItemId.bind(this);
    this.onChangeItemCheck = this.onChangeItemCheck.bind(this);
    this.onChangeItemLevel = this.onChangeItemLevel.bind(this);
    this.addMaterial = this.addMaterial.bind(this);
    this.onChangeReceiptItem = this.onChangeReceiptItem.bind(this);
    this.handleMaterialsChange = this.handleMaterialsChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { edit, receipt } = this.props;
    if (edit && receipt.id !== nextProps.receipt.id) {
      this.setState(this.initState(nextProps.receipt));
    }
  }

  initState(receipt) {
    const { edit } = this.props;
    const defaultState = {
      file: null,
      name: edit ? receipt.name : '',
      price: edit ? receipt.price : '',
      charge_price: edit ? receipt.charge_price : '',
      description: edit ? receipt.description : '',
      category: edit ? receipt.category : 'Swords',
      itemId: edit ? receipt.itemId : 0,
      luck: edit ? receipt.luck === 1 : false,
      skill: edit ? receipt.skill === 1 : false,
      option: edit ? receipt.option : 0,
      duration: 255,
      level: edit ? receipt.level : 0,
      exc1: edit ? receipt.exc1 === 1 : false,
      exc2: edit ? receipt.exc2 === 1 : false,
      exc3: edit ? receipt.exc3 === 1 : false,
      exc4: edit ? receipt.exc4 === 1 : false,
      exc5: edit ? receipt.exc5 === 1 : false,
      exc6: edit ? receipt.exc6 === 1 : false,
      slot: edit ? receipt.slot : 'RightHand'
    };
    if (edit) {
      defaultState.id = receipt.id;
      defaultState.materials = receipt.materials.map(item => {
        return {
          id: item.id,
          name: item.name,
          category: item.category,
          duration: item.duration,
          itemId: item.itemId,
          luck: item.luck === 1 ? true : false,
          skill: item.skill === 1 ? true : false,
          option: parseInt(item.option, 10),
          level: parseInt(item.level, 10),
          exc1: item.exc1 === 1 ? true : false,
          exc2: item.exc2 === 1 ? true : false,
          exc3: item.exc3 === 1 ? true : false,
          exc4: item.exc4 === 1 ? true : false,
          exc5: item.exc5 === 1 ? true : false,
          exc6: item.exc6 === 1 ? true : false,
          count: item.count
        };
      });
    } else {
      defaultState.materials = [{ ...initialMaterial }];
    }
    return defaultState;
  }

  onChangeReceiptItem(value, name) {
    const nextState = { ...this.state };
    switch (name) {
      case 'level':
        nextState[value.target.name] = value.target.value;
        break;
      case 'itemId':
      case 'slot':
      case 'category':
        nextState[name] = value;
        break;
      default:
        nextState[value] = !this.state[value];
        break;
    }
    this.setState(nextState);
  }

  handleMaterialsChange(event, i) {
    const nextState = { ...this.state };
    const { name, value } = event.target;
    nextState.materials = nextState.materials.map((item, idx) => {
      if (idx === i) {
        item[name] = value;
      }
      return item;
    });
    this.setState(nextState);
  }

  onSelectItemCategory(name, i) {
    const nextState = { ...this.state };
    nextState.materials = nextState.materials.map((item, idx) => {
      if (idx === i) {
        item.category = name;
      }
      return item;
    });
    this.setState(nextState);
  }

  onSelectItemSlot(name, i) {
    const nextState = { ...this.state };
    nextState.materials = nextState.materials.map((item, idx) => {
      if (idx === i) {
        item.slot = name;
      }
      return item;
    });
    this.setState(nextState);
  }

  onSelectItemId(itemId, i) {
    const nextState = { ...this.state };
    nextState.materials = nextState.materials.map((item, idx) => {
      if (idx === i) {
        item.itemId = itemId;
      }
      return item;
    });
    this.setState(nextState);
  }

  onChangeItemCheck(name, i) {
    const nextState = { ...this.state };
    nextState.materials = nextState.materials.map((item, idx) => {
      if (idx === i) {
        item[name] = !item[name];
      }
      return item;
    });
    this.setState(nextState);
  }

  onChangeItemLevel(event, i) {
    const nextState = { ...this.state };
    const { name, value } = event.target;
    nextState.materials = nextState.materials.map((item, idx) => {
      if (idx === i) {
        item[name] = value;
      }
      return item;
    });
    this.setState(nextState);
  }

  addMaterial() {
    this.state.materials.push({ ...initialMaterial });
    this.setState(this.state);
  }

  removeItem(i) {
    this.state.materials.splice(i, 1);
    this.setState(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextState = { ...this.state };
    switch (name) {
      case 'file':
        nextState.file = event.target.files[0];
        break;
      default:
        nextState[name] = value;
        break;
    }

    this.setState(nextState);
  }

  submit() {
    const { edit, onAdd, onEdit } = this.props;
    edit ? onEdit({ ...this.state }) : onAdd({ ...this.state });
  }

  render() {
    const { edit, receipt } = this.props;
    return [
      <ModalHeader
        key="lxr_h"
        iconUrl="/images/icons/luxury.png"
        label={edit ? `Edit ${receipt.name}` : 'Add Receipt'}
      />,
      <div key="lxr_b" className="modal-body">
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label>
                <strong>Image :</strong>
              </label>
              <input type="file" className="form-control" name="file" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>
                <strong>Name :</strong>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Buy Price :</strong>
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Charge Price :</strong>
              </label>
              <input
                type="number"
                className="form-control"
                name="charge_price"
                onChange={this.handleChange}
                value={this.state.charge_price}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Description :</strong>
              </label>
              <textarea
                className="form-control"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
            </div>

            <button className="btn btn-block btn-primary" onClick={this.addMaterial}>
              Add Material
            </button>
          </div>

          <div className="col-4">
            <div className="ds9799-ws-add-item-wrapper">
              <SlotSelector onSelect={event => this.onChangeReceiptItem(event.target.value, 'slot')} value={this.state.slot}/>
              <ItemSelector
                category={this.state.category}
                onSelectCategory={event => this.onChangeReceiptItem(event.target.value, 'category')}
                itemId={this.state.itemId}
                itemLvl={this.state.level}
                onSelectItem={event => this.onChangeReceiptItem(event.target.value, 'itemId')}
              />
              <BasicItemOptions
                luck={this.state.luck}
                skill={this.state.skill}
                level={this.state.level}
                option={this.state.option}
                onChangeLevel={event => this.onChangeReceiptItem(event, 'level')}
                onChangeCheck={name => this.onChangeReceiptItem(name)}
              />
              <ExcItemOptions
                exc={{
                  exc1: this.state.exc1,
                  exc2: this.state.exc2,
                  exc3: this.state.exc3,
                  exc4: this.state.exc4,
                  exc5: this.state.exc5,
                  exc6: this.state.exc6
                }}
                category={this.state.category}
                onChangeCheck={name => this.onChangeReceiptItem(name)}
                itemId={this.state.itemId}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="ds9799-ws-add-item-wrapper">
              {this.state.materials.map((item, i) => (
                <div key={i} className="ds9799-ws-add-item">
                  <div className="form-group">
                    <label>
                      <strong>Name :</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={event => this.handleMaterialsChange(event, i)}
                      value={this.state.materials[i].name}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <strong>Count :</strong>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="count"
                      onChange={event => this.handleMaterialsChange(event, i)}
                      value={this.state.materials[i].count}
                    />
                  </div>
                  <ItemSelector
                    category={this.state.materials[i].category}
                    onSelectCategory={event => this.onSelectItemCategory(event.target.value, i)}
                    itemId={this.state.materials[i].itemId}
                    itemLvl={this.state.materials[i].level}
                    onSelectItem={event => this.onSelectItemId(event.target.value, i)}
                  />
                  <BasicItemOptions
                    luck={this.state.materials[i].luck}
                    skill={this.state.materials[i].skill}
                    level={this.state.materials[i].level}
                    option={this.state.materials[i].option}
                    onChangeLevel={event => this.onChangeItemLevel(event, i)}
                    onChangeCheck={name => this.onChangeItemCheck(name, i)}
                  />
                  <ExcItemOptions
                    exc={{
                      exc1: this.state.materials[i].exc1,
                      exc2: this.state.materials[i].exc2,
                      exc3: this.state.materials[i].exc3,
                      exc4: this.state.materials[i].exc4,
                      exc5: this.state.materials[i].exc5,
                      exc6: this.state.materials[i].exc6
                    }}
                    category={this.state.materials[i].category}
                    onChangeCheck={name => this.onChangeItemCheck(name, i)}
                    itemId={this.state.materials[i].itemId}
                  />

                  <div className="ds9799-ws-add-item-rm-btn">
                    <button className="btn btn-sm btn-danger" onClick={() => this.removeItem(i)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>,
      <div key="lxr_f" className="modal-footer">
        <button type="button" className="btn btn-success" onClick={this.submit} data-dismiss="modal">
          Submit
        </button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">
          Close
        </button>
      </div>
    ];
  }
}

export default ModalAddReceipt;
