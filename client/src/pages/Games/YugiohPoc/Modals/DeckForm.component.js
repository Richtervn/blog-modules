import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupArray, FormGroupArea } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Image: null,
  Name: '',
  Description: '',
  Winrate: 0,
  Pros: [''],
  Cons: [''],
  Rating: 0
};

class YugiohPocDeckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue({ ...this.props.deck }) : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
  }

  initStateValue(deck) {
    return {
      Image: null,
      Name: deck.Name || '',
      Description: deck.Description || '',
      Winrate: deck.Winrate || 0,
      Pros: deck.Pros ? deck.Pros.slice(0) : [''],
      Cons: deck.Cons ? deck.Cons.slice(0) : [''],
      Rating: deck.Rating || 0
    };
  }

  handleSubmit() {
    const { modId, deck, edit, onEditDeck, onAddDeck } = this.props;
    if (edit) {
      onEditDeck({ ...this.state.value, _id: deck._id, ModId: modId });
    } else {
      onAddDeck({ ...this.state.value, ModId: modId });
      this.fileInput.inputNode.value = null;
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index, ['Pros', 'Cons'], ['Image']);
    this.setState({ value: { ...formValue } });
  }

  handleRating(value) {
    this.setState({ value: { ...this.state.value, Rating: value } });
  }

  handleAddArray(name) {
    const formValue = commonAddArray(this.state.value, name);
    this.setState({ value: { ...formValue } });
  }

  handleRemoveArray(name, index) {
    const formValue = commonRemoveArray(this.state.value, name, index);
    this.setState({ value: { ...formValue } });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.deck._id !== this.props.deck._id) {
      this.setState({ value: this.initStateValue(nextProps.deck) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="yd_h"
        iconUrl="/images/icons/yugioh_poc.png"
        label={this.props.edit ? `Update ${this.props.deck.Name}` : 'Add New Deck'}
      />,
      <div key="yd_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="file"
            name="Image"
            label="Image File"
            onChange={this.handleChange}
            ref={node => (this.fileInput = node)}
          />
          <FormGroupRow
            type="text"
            name="Name"
            label="Name"
            value={this.state.value.Name}
            onChange={this.handleChange}
          />
          <FormGroupArea
            value={this.state.value.Description}
            label="Description"
            onChange={this.handleChange}
            name="Description"
          />
          <FormGroupRow
            type="number"
            name="Winrate"
            label="Win rate"
            value={this.state.value.Winrate}
            onChange={this.handleChange}
          />
          <FormGroupArray
            type="text"
            name="Pros"
            label="Pros"
            arrayValues={this.state.value.Pros}
            onChange={this.handleChange}
            onRemove={this.handleRemoveArray}
            onAdd={this.handleAddArray}
          />
          <FormGroupArray
            type="text"
            name="Cons"
            label="Cons"
            arrayValues={this.state.value.Cons}
            onChange={this.handleChange}
            onRemove={this.handleRemoveArray}
            onAdd={this.handleAddArray}
          />
          <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
        </form>
      </div>,
      <ModalFooter key="yd_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default YugiohPocDeckForm;
