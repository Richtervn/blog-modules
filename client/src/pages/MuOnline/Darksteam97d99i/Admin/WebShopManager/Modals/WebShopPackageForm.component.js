import './WebShopPackageForm.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { ModalHeader } from 'components/Modal';

import { SlotSelector, ItemSelector, BasicItemOptions, ExcItemOptions } from '../../../components';

const initialItem = {
  slot: 'RightHand',
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
  exc6: false
};

class WebShopPackageForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initState(this.props.edit ? this.props.pack : null);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.onSelectItemCategory = this.onSelectItemCategory.bind(this);
    this.onSelectItemSlot = this.onSelectItemSlot.bind(this);
    this.onSelectItemId = this.onSelectItemId.bind(this);
    this.onChangeItemCheck = this.onChangeItemCheck.bind(this);
    this.onChangeItemLevel = this.onChangeItemLevel.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { edit, pack } = this.props;
    if (edit && pack.id !== nextProps.pack.id) {
      this.setState(this.initState(nextProps.pack));
    }
  }

  initState(pack) {
    const { edit, focusCategory } = this.props;
    const defaultState = {
      file: null,
      name: edit ? pack.name : '',
      category_id: edit ? pack.category_id : focusCategory,
      price: edit ? pack.price : '',
      is_vip_require: edit ? pack.is_vip_require : false,
      items: edit ? pack.items : [{ ...initialItem }]
    };
    if (edit) {
      defaultState.id = pack.id;
    }
    return defaultState;
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextState = { ...this.state };
    switch (name) {
      case 'file':
        nextState.file = event.target.files[0];
        break;
      case 'is_vip_require':
        nextState.is_vip_require = !this.state.is_vip_require;
        break;
      default:
        nextState[name] = value;
        break;
    }

    this.setState(nextState);
  }

  onSelectItemCategory(name, i) {
    const nextState = { ...this.state };
    nextState.items = nextState.items.map((item, idx) => {
      if (idx === i) {
        item.category = name;
      }
      return item;
    });
    this.setState(nextState);
  }

  onSelectItemSlot(name, i) {
    const nextState = { ...this.state };
    nextState.items = nextState.items.map((item, idx) => {
      if (idx === i) {
        item.slot = name;
      }
      return item;
    });
    this.setState(nextState);
  }

  onSelectItemId(itemId, i) {
    const nextState = { ...this.state };
    nextState.items = nextState.items.map((item, idx) => {
      if (idx === i) {
        item.itemId = itemId;
      }
      return item;
    });
    this.setState(nextState);
  }

  onChangeItemCheck(name, i) {
    const nextState = { ...this.state };
    nextState.items = nextState.items.map((item, idx) => {
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
    nextState.items = nextState.items.map((item, idx) => {
      if (idx === i) {
        item[name] = value;
      }
      return item;
    });
    this.setState(nextState);
  }

  addItem() {
    this.state.items.push({ ...initialItem });
    this.setState(this.state);
  }

  removeItem(i) {
    this.state.items.splice(i, 1);
    this.setState(this.state);
  }

  submit() {
    const { edit, onAdd, onEdit } = this.props;
    edit ? onEdit(this.state) : onAdd(this.state);
  }

  render() {
    const { pack, edit } = this.props;

    return [
      <ModalHeader
        iconUrl="/images/icons/mulogo.png"
        label={edit ? `Edit ${pack.name}` : 'Add Webshop Package'}
        key="wspf_h"
      />,
      <div className="modal-body" key="wspf_b">
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
                <strong>Price :</strong>
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={_.contains([1, true, 'true', '1'], this.state.is_vip_require)}
                  name="is_vip_require"
                  onChange={this.handleChange}
                />
                <b>Is Vip Require</b>
              </label>
            </div>
            <button className="btn btn-block btn-primary" onClick={this.addItem} style={{ marginTop: '10px' }}>
              Add Item
            </button>
          </div>

          <div className="col-8">
            <div className="ds9799-ws-items">
              {this.state.items.map((item, i) => (
                <div key={i} className="ws-item">
                  <SlotSelector onSelect={event => this.onSelectItemSlot(event.target.value, i)} />
                  <ItemSelector
                    category={this.state.items[i].category}
                    onSelectCategory={event => this.onSelectItemCategory(event.target.value, i)}
                    itemId={this.state.items[i].itemId}
                    itemLvl={this.state.items[i].level}
                    onSelectItem={event => this.onSelectItemId(event.target.value, i)}
                  />
                  <BasicItemOptions
                    luck={this.state.items[i].luck}
                    skill={this.state.items[i].skill}
                    level={this.state.items[i].level}
                    option={this.state.items[i].option}
                    onChangeLevel={event => this.onChangeItemLevel(event, i)}
                    onChangeCheck={name => this.onChangeItemCheck(name, i)}
                  />
                  <ExcItemOptions
                    exc={{
                      exc1: this.state.items[i].exc1,
                      exc2: this.state.items[i].exc2,
                      exc3: this.state.items[i].exc3,
                      exc4: this.state.items[i].exc4,
                      exc5: this.state.items[i].exc5,
                      exc6: this.state.items[i].exc6
                    }}
                    category={this.state.items[i].category}
                    onChangeCheck={name => this.onChangeItemCheck(name, i)}
                    itemId={this.state.items[i].itemId}
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
      <div className="modal-footer" key="wspf_f">
        <button type="button" className="btn btn-success" onClick={this.submit}>
          Submit
        </button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">
          Close
        </button>
      </div>
    ];
  }
}

export default WebShopPackageForm;
