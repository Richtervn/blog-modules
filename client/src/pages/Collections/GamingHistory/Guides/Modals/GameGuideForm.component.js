import React, { Component } from 'react';
import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupSelect } from 'components/FormTools';
import { commonFormChange } from 'helpers';

class GameGuideForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.edit ? this.initStateValue(this.props.guide) : this.initStateValue() };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initStateValue(guide) {
    const { gameInfo } = this.props;
    const valueState = {
      GameId: gameInfo._id,
      Title: guide ? guide.Title : '',
      Author: guide ? guide.Author : '',
      Priority: guide ? guide.Priority : 'Must Read',
      Source: guide ? guide.Source : ''
    };
    if (guide) valueState._id = guide._id;
    return { ...valueState };
  }

  handleChange(event) {
    const formValue = commonFormChange(this.state.value, event);
    this.setState({
      value: { ...formValue }
    });
  }

  handleSubmit() {
    this.props.edit ? this.props.onEditGuide(this.state.value) : this.props.onAddGuide(this.state.value);
    if(!this.props.edit){
      this.setState({ value: this.initStateValue() });
    }
    hideModal();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.guide._id !== this.props.guide._id) {
      this.setState({ value: this.initStateValue(nextProps.guide) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="gg_h"
        iconUrl="/images/icons/gamepad.png"
        label={this.props.edit ? `Update ${this.props.guide.Title}` : `Add New ${this.props.gameInfo.Name} Guide`}
      />,
      <div key="gg_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="text"
            name="Title"
            label="Title"
            onChange={this.handleChange}
            value={this.state.value.Title}
          />
          <FormGroupRow
            type="text"
            name="Author"
            label="Author"
            onChange={this.handleChange}
            value={this.state.value.Author}
          />
          <FormGroupRow
            type="text"
            name="Source"
            label="Source"
            onChange={this.handleChange}
            value={this.state.value.Source}
          />
          <FormGroupSelect
            options={['Must Read', 'Highly Recommended', 'Recommended', 'Interest']}
            value={this.state.value.Priority}
            onChange={this.handleChange}
            name="Priority"
            label="Priority"
          />
        </form>
      </div>,
      <ModalFooter key="gg_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default GameGuideForm;
