import React, { Component } from 'react';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      value: {
        MembGuid: user.memb_guid,
        Name: user.memb_name,
        User: user.memb___id,
        MailAddr: user.mail_addr || '',
        PostCode: user.post_code || undefined,
        AddrInfo: user.addr_info || '',
        AddrDeta: user.addr_deta || '',
        TelNumb: user.tel__numb || undefined,
        PhonNumb: user.phon_numb || undefined,
        FpasQues: user.fpas_ques || '',
        FpasAnsw: user.fpas_answ || '',
        JobCode: user.job__code || undefined
      },
      editing: false
    };

    this.enableEditing = this.enableEditing.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  enableEditing() {
    this.setState({ editing: true });
  }

  save() {
    this.props.onEditProfile(this.state.value);
    this.setState({ editing: false });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextState = {...this.state};
    nextState.value[name] = value;
    this.setState(nextState);
  }

  render() {
    const { editing } = this.state;
    return (
      <div className="ds9799-profile-card">
        <div className="ds9799-profile-card-header text-center">
          <strong>Profile</strong>
          <span className="pull-right">
            <button onClick={editing ? this.save : this.enableEditing}>
              <i className={editing ? 'fa fa-save' : 'fa fa-pencil'} />
            </button>
          </span>
        </div>
        <div className="ds9799-profile-card-content">
          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-id-card fa-fw" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={this.state.value.Name}
              disabled
            />
          </div>
          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-user fa-fw" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="User"
              value={this.state.value.User}
              disabled
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-envelope fa-fw" />
            </span>
            <input
              type="email"
              name="MailAddr"
              className="form-control"
              placeholder="Email Address"
              disabled={!this.state.editing}
              value={this.state.value.MailAddr}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-map-marker fa-fw" />
            </span>
            <input
              type="number"
              name="PostCode"
              className="form-control"
              placeholder="Post Code"
              disabled={!this.state.editing}
              value={this.state.value.PostCode}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-briefcase fa-fw" />
            </span>
            <input
              type="number"
              name="JobCode"
              className="form-control"
              placeholder="Job Code"
              disabled={!this.state.editing}
              value={this.state.value.JobCode}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-address-card fa-fw" />
            </span>
            <input
              type="text"
              name="AddrInfo"
              className="form-control"
              placeholder="Primary Address"
              disabled={!this.state.editing}
              value={this.state.value.AddrInfo}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-address-card-o fa-fw" />
            </span>
            <input
              type="text"
              name="AddrDeta"
              className="form-control"
              placeholder="Secondary Address"
              disabled={!this.state.editing}
              value={this.state.value.AddrDeta}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-mobile-phone fa-fw" />
            </span>
            <input
              type="number"
              name="TelNumb"
              className="form-control"
              placeholder="Mobile Phone Number"
              disabled={!this.state.editing}
              value={this.state.value.TelNumb}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-phone-square fa-fw" />
            </span>
            <input
              type="number"
              name="PhonNumb"
              className="form-control"
              placeholder="Phone Number"
              disabled={!this.state.editing}
              value={this.state.value.PhonNumb}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-lock fa-fw" />
            </span>
            <input
              type="text"
              name="FpasQues"
              className="form-control"
              placeholder="Secret Question"
              disabled={!this.state.editing}
              value={this.state.value.FpasQues}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group ds9799-margin-bottom">
            <span className="input-group-addon">
              <i className="fa fa-unlock-alt fa-fw" />
            </span>
            <input
              type="text"
              name="FpasAnsw"
              className="form-control"
              placeholder="Secret Answer"
              disabled={!this.state.editing}
              value={this.state.value.FpasAnsw}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
