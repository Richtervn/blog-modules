import React, { Component } from 'react';

import { FormGroupChromeColor, FormGroupRow } from 'components/FormTools';
import { ModalHeader, ModalFooter } from 'components/Modal';

import { commonFormChange } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Icon: null,
  SiteName: '',
  Username: '',
  Password: '',
  LogInMethod: '',
  Color: ''
};

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue({ ...this.props.account }) : this.initStateValue({ ...initialValue })
    };
    this.handleChange = this.handleChange.bind(this);
  }

  initStateValue(account) {
    return {
      Icon: null,
      SiteName: account.SiteName,
      Username: account.Username,
      Password: account.Password,
      LogInMethod: account.LogInMethod,
      Color: account.Color
    };
  }

  handleChange(event) {
    const formValue = commonFormChange(this.state.value, event, null, null, ['Icon'], ['Color']);
    this.setState({ value: { ...formValue } });
  }

  handleSubmit() {
    const { edit, onEdit, onAdd, account } = this.props;

    if (edit) {
      const formBody = {
        _id: account._id,
        SiteName: this.state.value.SiteName,
        Username: this.state.value.Username,
        Password: this.state.value.Password,
        LogInMethod: this.state.value.LogInMethod,
        Color: this.state.value.Color
      };
      if (this.state.value.Icon) {
        formBody.Icon = this.state.value.Icon;
      }
      onEdit(formBody);
    } else {
      onAdd(this.state.value);
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.account._id !== this.props.account._id) {
      this.setState({ value: this.initStateValue(nextProps.account) });
    }
  }

  render() {
    const { SiteName, Username, Password, LogInMethod, Color } = this.state.value;
    return [
      <ModalHeader
        key="a_h"
        iconUrl="/images/icons/gamepad.png"
        label={this.props.edit ? `Edit Account for ${this.props.account.SiteName}` : 'Add New Account'}
      />,
      <div key="a_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" label="Icon File" name="Icon" onChange={this.handleChange} />
          <FormGroupRow type="text" label="Site Name" name="SiteName" onChange={this.handleChange} value={SiteName} />
          <FormGroupRow type="text" label="Username" name="Username" onChange={this.handleChange} value={Username} />
          <FormGroupRow type="text" label="Password" name="Password" onChange={this.handleChange} value={Password} />
          <FormGroupRow
            type="text"
            label="Log In Method"
            name="LogInMethod"
            onChange={this.handleChange}
            value={LogInMethod}
          />
          <FormGroupChromeColor label="Color" name="Color" onChange={this.handleChange} color={Color} />
        </form>
      </div>,
      <ModalFooter key="a_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default AccountForm;
