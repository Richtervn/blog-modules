import React, { Component } from 'react';

class AccountInfo extends Component {
	constructor(props) {
		super(props);
		const { account } = this.props;
		this.state = {
			value: {
				IsVip: account.IsVip ? true : false,
				VipExpirationTime: account.VipExpirationTime,
				addr_deta: account.addr_deta || '',
				addr_info: account.addr_info || '',
				appl_days: account.appl_days || undefined,
				bloc_code: account.bloc_code || 0,
				ctl1_code: account.ctl1_code || 0,
				fpas_answ: account.fpas_answ || '',
				fpas_ques: account.fpas_ques || '',
				job__code: account.job__code || 0,
				mail_addr: account.mail_addr || '',
				mail_chek: account.mail_chek ? true : false,
				memb___id: account.memb___id,
				memb__pwd: account.memb__pwd,
				memb_guid: account.memb_guid,
				memb_name: account.memb_name,
				modi_days: account.modi_days || undefined,
				out__days: account.out__days || undefined,
				phon_numb: account.phon_numb || 0,
				post_code: account.post_code || undefined,
				sno__numb: account.sno__numb || 0,
				tel__numb: account.tel__numb || 0,
				true_days: account.true_days || undefined
			},
			editing: false
		};
		this.enableEditing = this.enableEditing.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { account } = nextProps;
		this.setState({
			value: {
				IsVip: account.IsVip ? true : false,
				VipExpirationTime: account.VipExpirationTime,
				addr_deta: account.addr_deta || '',
				addr_info: account.addr_info || '',
				appl_days: account.appl_days || undefined,
				bloc_code: account.bloc_code || 0,
				ctl1_code: account.ctl1_code || 0,
				fpas_answ: account.fpas_answ || '',
				fpas_ques: account.fpas_ques || '',
				job__code: account.job__code || 0,
				mail_addr: account.mail_addr || '',
				mail_chek: account.mail_chek ? true : false,
				memb___id: account.memb___id,
				memb__pwd: account.memb__pwd,
				memb_guid: account.memb_guid,
				memb_name: account.memb_name,
				modi_days: account.modi_days || undefined,
				out__days: account.out__days || undefined,
				phon_numb: account.phon_numb || 0,
				post_code: account.post_code || undefined,
				sno__numb: account.sno__numb || 0,
				tel__numb: account.tel__numb || 0,
				true_days: account.true_days || undefined
			},
			editing: false
		});
	}

	enableEditing() {
		this.setState({ editing: true });
	}

	save() {}

	handleChange(event) {
		const { name, value } = event.target;
	}

	render() {
		const { account } = this.props;
		const { editing } = this.state;
		return (
			<div className="ds9799-admin-account-card">
				<div className="ds9799-admin-account-card-header">
					<strong>Account Infomation</strong>
					<span className="pull-right">
						<button onClick={editing ? this.save : this.enableEditing}>
							<i className={editing ? 'fa fa-save' : 'fa fa-pencil'} />
						</button>
						<button>
							<i className="fa fa-times" />
						</button>
					</span>
				</div>
				<div className="ds9799-admin-account-card-content">
					<div className="row no-row-margin">
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>DCM:</b>
								<input className="ds9799-admin-account-form-control form-control" type="text" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AccountInfo;

//   render() {
//     const { editing } = this.state;
//     return (
//       <div className="ds9799-profile-card">
//         <div className="ds9799-profile-card-header text-center">
//           <strong>Profile</strong>
//           <span className="pull-right">
//             <button onClick={editing ? this.save : this.enableEditing}>
//               <i className={editing ? 'fa fa-save' : 'fa fa-pencil'} />
//             </button>
//           </span>
//         </div>
//         <div className="ds9799-profile-card-content">
//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-id-card fa-fw" />
//             </span>
//             <input
//               type="text"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Name"
//               value={this.state.value.Name}
//               disabled
//             />
//           </div>
//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-user fa-fw" />
//             </span>
//             <input
//               type="text"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="User"
//               value={this.state.value.User}
//               disabled
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-envelope fa-fw" />
//             </span>
//             <input
//               type="email"
//               name="MailAddr"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Email Address"
//               disabled={!this.state.editing}
//               value={this.state.value.MailAddr}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-map-marker fa-fw" />
//             </span>
//             <input
//               type="number"
//               name="PostCode"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Post Code"
//               disabled={!this.state.editing}
//               value={this.state.value.PostCode}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-briefcase fa-fw" />
//             </span>
//             <input
//               type="number"
//               name="JobCode"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Job Code"
//               disabled={!this.state.editing}
//               value={this.state.value.JobCode}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-address-card fa-fw" />
//             </span>
//             <input
//               type="text"
//               name="AddrInfo"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Primary Address"
//               disabled={!this.state.editing}
//               value={this.state.value.AddrInfo}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-address-card-o fa-fw" />
//             </span>
//             <input
//               type="text"
//               name="AddrDeta"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Secondary Address"
//               disabled={!this.state.editing}
//               value={this.state.value.AddrDeta}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-mobile-phone fa-fw" />
//             </span>
//             <input
//               type="number"
//               name="TelNumb"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Mobile Phone Number"
//               disabled={!this.state.editing}
//               value={this.state.value.TelNumb}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-phone-square fa-fw" />
//             </span>
//             <input
//               type="number"
//               name="PhonNumb"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Phone Number"
//               disabled={!this.state.editing}
//               value={this.state.value.PhonNumb}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-lock fa-fw" />
//             </span>
//             <input
//               type="text"
//               name="FpasQues"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Secret Question"
//               disabled={!this.state.editing}
//               value={this.state.value.FpasQues}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="input-group ds9799-margin-bottom">
//             <span className="input-group-addon">
//               <i className="fa fa-unlock-alt fa-fw" />
//             </span>
//             <input
//               type="text"
//               name="FpasAnsw"
//               className="ds9799-admin-account-form-control form-control"
//               placeholder="Secret Answer"
//               disabled={!this.state.editing}
//               value={this.state.value.FpasAnsw}
//               onChange={this.handleChange}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ProfileCard;
