import './AccountForm.css';
import React, { Component } from 'react';
import { toInputDate, unixTime } from 'helpers';

const initialValue = {
  IsVip: false,
  VipExpirationTime: '',
  addr_deta: '',
  addr_info: '',
  appl_days: '',
  bloc_code: '',
  ctl1_code: '',
  fpas_answ: '',
  fpas_ques: '',
  job__code: '',
  mail_addr: '',
  mail_chek: false,
  memb___id: '',
  memb__pwd: '',
  memb_guid: '',
  memb_name: '',
  modi_days: '',
  out__days: '',
  phon_numb: '',
  post_code: '',
  sno__numb: '',
  tel__numb: '',
  true_days: ''
};

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: initialValue };
    this.handleChange = this.handleChange.bind(this);
    this.initStateValue = this.initStateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initStateValue(account) {
    return {
      IsVip: account.IsVip === 1 ? true : false,
      VipExpirationTime: account.VipExpirationTime ? unixTime.toInputDate(account.VipExpirationTime) : '',
      addr_deta: account.addr_deta || '',
      addr_info: account.addr_info || '',
      appl_days: account.appl_days ? toInputDate(account.appl_days) : '',
      bloc_code: account.bloc_code || '',
      ctl1_code: account.ctl1_code || '',
      fpas_answ: account.fpas_answ || '',
      fpas_ques: account.fpas_ques || '',
      job__code: account.job__code || '',
      mail_addr: account.mail_addr || '',
      mail_chek: account.mail_chek === '1' ? true : false,
      memb___id: account.memb___id || '',
      memb__pwd: account.memb__pwd || '',
      memb_guid: account.memb_guid || '',
      memb_name: account.memb_name || '',
      modi_days: account.modi_days ? toInputDate(account.modi_days) : '',
      out__days: account.out__days ? toInputDate(account.out__days) : '',
      phon_numb: account.phon_numb || '',
      post_code: account.post_code || '',
      sno__numb: account.sno__numb || '',
      tel__numb: account.tel__numb || '',
      true_days: account.true_days ? toInputDate(account.true_days) : ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.account.memb___id !== this.props.account.memb___id) {
      this.setState({ value: this.initStateValue(nextProps.account) });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextStateValue = { ...this.state.value };
    switch (name) {
      case 'mail_chek':
        nextStateValue[name] = !this.state.value[name];
        break;
      case 'IsVip':
        nextStateValue[name] = !this.state.value[name];
        break;
      default:
        nextStateValue[name] = value;
        break;
    }
    this.setState({ value: nextStateValue });
  }

  handleSubmit() {
    const { account, onEdit, onAdd } = this.props;
    if (account.memb_guid) {
      onEdit(this.state.value);
    } else {
      onAdd(this.state.value);
      this.setState({ value: this.initStateValue({}) });
    }
  }

  render() {
    const { account, onDelete } = this.props;
    return (
      <div id="ds9799-account-form">
        <div className="input-wrapper">
          <b>Memb Guid :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.memb_guid}
            disabled
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Real Name :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.memb_name}
            name="memb_name"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>SNO Number :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.sno__numb}
            name="sno__numb"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Email Address :</b>
          <input
            className="form-control"
            type="email"
            value={this.state.value.mail_addr}
            name="mail_addr"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Address Info :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.addr_info}
            name="addr_info"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Address Deta :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.addr_deta}
            name="addr_deta"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Username :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.memb___id}
            name="memb___id"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Password :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.memb__pwd}
            name="memb__pwd"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Control Code :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.ctl1_code}
            name="ctl1_code"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Secret Question :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.fpas_ques}
            name="fpas_ques"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Secret Answer :</b>
          <input
            className="form-control"
            type="text"
            value={this.state.value.fpas_answ}
            name="fpas_answ"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Job Code :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.job__code}
            name="job__code"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Phone Number :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.phon_numb}
            name="phon_numb"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Telephone Number :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.tel__numb}
            name="tel__numb"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Post Code :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.post_code}
            name="post_code"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Block Code :</b>
          <input
            className="form-control"
            type="number"
            value={this.state.value.bloc_code}
            name="bloc_code"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Out Day :</b>
          <input
            className="form-control"
            type="date"
            value={this.state.value.out__days}
            name="out__days"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Modification Day :</b>
          <input
            className="form-control"
            type="date"
            value={this.state.value.modi_days}
            name="modi_days"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="form-inline">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={this.state.value.IsVip === 1 || this.state.value.IsVip === true}
                  name="IsVip"
                  onChange={this.handleChange}
                />
                <b>Is Vip</b>
              </label>
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <b>Vip Expiration Time :</b>
          <input
            className="form-control"
            type="date"
            value={this.state.value.VipExpirationTime}
            name="VipExpirationTime"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <b>Apply Day :</b>
          <input
            className="form-control"
            type="date"
            value={this.state.value.appl_days}
            name="appl_days"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="form-inline">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={this.state.value.mail_chek === '1' || this.state.value.mail_chek === true}
                  name="mail_chek"
                  onChange={this.handleChange}
                />
                <b>Checked Mail</b>
              </label>
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <b>True Day :</b>
          <input
            className="form-control"
            type="date"
            value={this.state.value.true_days}
            name="true_days"
            onChange={this.handleChange}
          />
        </div>

        <div className="feature">
          <div className="btn btn-primary" onClick={() => this.handleSubmit()}>
            Submit
          </div>
          {this.state.value.memb_guid && (
            <div className="btn btn-warning" onClick={() => this.setState({ value: this.initStateValue(account) })}>
              Undo
            </div>
          )}
          <div
            className="btn btn-danger"
            onClick={() => {
              if (this.state.value.memb_guid) {
                onDelete(this.state.value.memb___id);
              } else {
                this.setState({ value: this.initStateValue(initialValue) });
              }
            }}>
            {this.state.value.memb_guid ? 'Delete' : 'Clear'}
          </div>
        </div>
      </div>
    );
  }
}

export default AccountForm;
