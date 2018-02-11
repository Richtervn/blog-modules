import React, { Component } from 'react';
import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupSelect, FormGroupArea } from 'components/FormTools';
import { commonFormChange } from 'helpers';

class GameGuideForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.edit ? this.initStateValue(this.props.overview) : this.initStateValue() };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initStateValue(overview) {
    const { gameInfo } = this.props;
    const valueState = {
      GameId: gameInfo._id,
      Title: overview ? overview.Title : '',
      Description: overview ? overview.Description : '',
      Priority: overview ? overview.Priority : 'Must Read',
    };
    if (overview) valueState._id = overview._id;
    return { ...valueState };
  }

  handleChange(event) {
    const formValue = commonFormChange(this.state.value, event);
    this.setState({
      value: { ...formValue }
    });
  }

  handleSubmit() {
    this.props.edit ? this.props.onEditOverview(this.state.value) : this.props.onAddOverview(this.state.value);
    if(!this.props.edit){
      this.setState({ value: this.initStateValue() });
    }
    hideModal();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.overview._id !== this.props.overview._id) {
      this.setState({ value: this.initStateValue(nextProps.overview) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="go_h"
        iconUrl="/images/icons/gamepad.png"
        label={this.props.edit ? `Update ${this.props.overview.Title}` : `Add New ${this.props.gameInfo.Name} Overview`}
      />,
      <div key="go_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="text"
            name="Title"
            label="Title"
            onChange={this.handleChange}
            value={this.state.value.Title}
          />
          <FormGroupArea
            name="Description"
            label="Description"
            row={2}
            onChange={this.handleChange}
            value={this.state.value.Description}
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
      <ModalFooter key="go_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default GameGuideForm;
