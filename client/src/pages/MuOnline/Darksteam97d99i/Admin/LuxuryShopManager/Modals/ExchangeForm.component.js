import React, { Component } from 'react';
import { ModalHeader } from 'components/Modal';

import { ItemSelector, BasicItemOptions, ExcItemOptions } from '../../../components';

class AddExchangeModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.initState(this.props.exchange);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { edit, exchange } = this.props;
    if (edit && exchange.id !== nextProps.exchange.id) {
      this.setState(this.initState(nextProps.exchange));
    }
  }

  initState(exchange) {
    const { edit } = this.props;
    const defaultState = {
      file: null,
      name: edit ? exchange.name : '',
      price: edit ? exchange.price : '',
      category: edit ? exchange.category : 'Swords',
      duration: 255,
      itemId: edit ? exchange.itemId : 0,
      luck: edit ? exchange.luck === 1 : false,
      skill: edit ? exchange.skill === 1 : false,
      option: edit ? exchange.option : 0,
      level: edit ? exchange.level : 0,
      exc1: edit ? exchange.exc1 === 1 : false,
      exc2: edit ? exchange.exc2 === 1 : false,
      exc3: edit ? exchange.exc3 === 1 : false,
      exc4: edit ? exchange.exc4 === 1 : false,
      exc5: edit ? exchange.exc5 === 1 : false,
      exc6: edit ? exchange.exc6 === 1 : false
    };
    if (edit) {
      defaultState.id = exchange.id;
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
      default:
        nextState[name] = value;
        break;
    }
    this.setState(nextState);
  }

  onChangeItem(value, name) {
    const nextState = { ...this.state };
    switch (name) {
      case 'level':
        nextState[value.target.name] = value.target.value;
        break;
      case 'itemId':
      case 'category':
        nextState[name] = value;
        break;
      default:
        nextState[value] = !this.state[value];
        break;
    }
    this.setState(nextState);
  }

  submit() {
    const { edit, onAdd, onEdit } = this.props;
    edit ? onEdit(this.state) : onAdd(this.state);
  }

  render() {
    const { edit, exchange } = this.props;
    return [
      <ModalHeader
        key="lxe_h"
        iconUrl="/images/icons/luxury.png"
        label={edit ? `Edit ${exchange.name}` : 'Add Exchange'}
      />,
      <div key="lxe_b" className="modal-body">
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
          </div>
          <div className="col-8">
            <div className="pd-10">
              <ItemSelector
                category={this.state.category}
                onSelectCategory={event => this.onChangeItem(event.target.value, 'category')}
                itemId={this.state.itemId}
                itemLvl={this.state.level}
                onSelectItem={event => this.onChangeItem(event.target.value, 'itemId')}
              />
              <BasicItemOptions
                luck={this.state.luck}
                skill={this.state.skill}
                level={this.state.level}
                option={this.state.option}
                onChangeLevel={event => this.onChangeItem(event, 'level')}
                onChangeCheck={name => this.onChangeItem(name)}
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
                onChangeCheck={name => this.onChangeItem(name)}
                itemId={this.state.itemId}
              />
            </div>
          </div>
        </div>
      </div>,
      <div key="lxe_f" className="modal-footer">
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

export default AddExchangeModal;
