import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupArea } from 'components/FormTools';

import { commonFormChange } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Rating: 0,
  Matchup: '',
  Description: '',
  Version: ''
};

class StarcraftCampaignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit
        ? this.initStateValue({ ...this.props.campaign })
        : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  initStateValue(campaign) {
    return {
      File: '',
      Rating: campaign.Rating,
      Matchup: campaign.Matchup,
      Description: campaign.Description,
      Version: campaign.Version
    };
  }

  handleSubmit() {
    this.props.edit ? this.props.onEditCampaign(this.state.value) : this.props.onAddCampaign(this.state.value);
    if (!this.props.edit) {
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event);
    this.setState({
      value: { ...formValue }
    });
  }

  handleRating(value) {
    this.setState({ value: { ...this.state.value, Rating: value } });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.campaign._id !== this.props.campaign._id) {
      this.setState({ value: this.initStateValue(nextProps.campaign) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="sm_h"
        iconUrl="/images/icons/starcraft.png"
        label={this.props.edit ? `Update ${this.props.campaign.Name}` : 'Add New Starcraft Campaign'}
      />,
      <div key="sm_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="File" label="Map File" onChange={this.handleChange} />
          <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
          <FormGroupRow
            type="text"
            name="Matchup"
            label="Match up"
            onChange={this.handleChange}
            value={this.state.value.Matchup}
          />
          <FormGroupArea
            name="Description"
            label="Description"
            onChange={this.handleChange}
            value={this.state.value.Description}
          />
          <FormGroupRow
            type="text"
            name="Version"
            label="Version"
            onChange={this.handleChange}
            value={this.state.value.Version}
          />
        </form>
      </div>,
      <ModalFooter key="sm_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default StarcraftCampaignForm;
