import './ProfileForm.css';
import React, { Component } from 'react';
import { InfoHeaderCard } from 'components/Cards';
import { InputGroupIcon } from 'components/FormTools';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;

    this.state = {
      value: {
        MembGuid: user.memb_guid,
        Name: user.memb_name,
        User: user.memb___id,
        MailAddr: user.mail_addr || '',
        PostCode: user.post_code || '',
        AddrInfo: user.addr_info || '',
        AddrDeta: user.addr_deta || '',
        TelNumb: user.tel__numb || '',
        PhonNumb: user.phon_numb || '',
        FpasQues: user.fpas_ques || '',
        FpasAnsw: user.fpas_answ || '',
        JobCode: user.job__code || ''
      },
      editing: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextState = { ...this.state };

    switch (name) {
      case 'JobCode':
        if (value < 0) {
          nextState.value.JobCode = 0;
        } else if (value > 99) {
          nextState.value.JobCode = 99;
        } else {
          nextState.value.JobCode = value;
        }
        break;
      default:
        nextState.value[name] = value;
        break;
    }

    this.setState(nextState);
  }

  render() {
    return (
      <InfoHeaderCard label="Profile" customClass="ds9799-profile-form">
        <InputGroupIcon icon="id-card" type="text" value={this.state.value.Name} disabled />
        <InputGroupIcon icon="user" type="text" value={this.state.value.User} disabled />
        <InputGroupIcon
          icon="envelope"
          type="email"
          name="MailAddr"
          className="form-control"
          placeholder="Email Address"
          disabled={!this.state.editing}
          value={this.state.value.MailAddr}
          onChange={this.handleChange}
        />
        <InputGroupIcon
          icon="map-marker"
          type="number"
          name="PostCode"
          className="form-control"
          placeholder="Post Code"
          disabled={!this.state.editing}
          value={this.state.value.PostCode}
          onChange={this.handleChange}
        />
        <InputGroupIcon
          icon="briefcase"
          type="number"
          name="JobCode"
          className="form-control"
          placeholder="Job Code"
          disabled={!this.state.editing}
          value={this.state.value.JobCode}
          onChange={this.handleChange}
        />
        <InputGroupIcon
          icon="address-card"
          type="text"
          name="AddrInfo"
          className="form-control"
          placeholder="Primary Address"
          disabled={!this.state.editing}
          value={this.state.value.AddrInfo}
          onChange={this.handleChange}
        />
        <InputGroupIcon
          icon="address-card-o"
          type="text"
          name="AddrDeta"
          className="form-control"
          placeholder="Secondary Address"
          disabled={!this.state.editing}
          value={this.state.value.AddrDeta}
          onChange={this.handleChange}
        />
        <InputGroupIcon
          icon="mobile-phone"
          type="number"
          name="TelNumb"
          className="form-control"
          placeholder="Mobile Phone Number"
          disabled={!this.state.editing}
          value={this.state.value.TelNumb}
          onChange={this.handleChange}
        />
        <InputGroupIcon
          icon="phone-square"
          type="number"
          name="PhonNumb"
          className="form-control"
          placeholder="Phone Number"
          disabled={!this.state.editing}
          value={this.state.value.PhonNumb}
          onChange={this.handleChange}
        />
        <InputGroupIcon
          icon="lock"
          type="text"
          name="FpasQues"
          className="form-control"
          placeholder="Secret Question"
          disabled={!this.state.editing}
          value={this.state.value.FpasQues}
          onChange={this.handleChange}
        />
        <InputGroupIcon
          icon="unlock-alt"
          type="text"
          name="FpasAnsw"
          className="form-control"
          placeholder="Secret Answer"
          disabled={!this.state.editing}
          value={this.state.value.FpasAnsw}
          onChange={this.handleChange}
        />
        <div className="feature">
          {!this.state.editing && (
            <button className="btn btn-up" onClick={() => this.setState({ editing: true })}>
              Update Profile
            </button>
          )}
          {this.state.editing && [
            <button className="btn btn-primary" key="bs">
              Submit
            </button>,
            <button className="btn btn-danger" key="cc">
              Cancel
            </button>
          ]}
        </div>
      </InfoHeaderCard>
    );
  }
}

export default ProfileForm;

// class ProfileCard extends Component {
//   constructor(props) {
//     super(props);

//     this.enableEditing = this.enableEditing.bind(this);
//     this.save = this.save.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   enableEditing() {
//     this.setState({ editing: true });
//   }

//   save() {
//     this.props.onEditProfile(this.state.value);
//     this.setState({ editing: false });
//   }

//   render() {
//     const { editing } = this.state;
//     return (

//     );
//   }
// }
