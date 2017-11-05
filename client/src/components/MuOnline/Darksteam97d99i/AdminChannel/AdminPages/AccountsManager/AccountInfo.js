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
		this.test = this.test.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { account } = nextProps;
		this.setState({
			value: {
				memb_name: account.memb_name,
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

	test(e) {
		console.log(e.target.value);
	}

	enableEditing() {
		this.setState({ editing: true });
	}

	save() {}

	handleChange(event) {
		const { name, value } = event.target;
		const nextStateValue = { ...this.state.value };
		switch (name) {
			default:
				nextStateValue[name] = value;
		}
		this.setState({ value: nextStateValue });
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
								<b>Memb Guid :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="text"
									value={this.state.value.memb_guid}
									disabled
									name="memb_guid"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Real Name :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="text"
									value={this.state.value.memb_name}
									disabled={!this.state.editing}
									name="memb_name"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>SNO Number :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.sno__numb}
									disabled={!this.state.editing}
									name="sno__numb"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Email Address :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="email"
									value={this.state.value.mail_addr}
									disabled={!this.state.editing}
									name="mail_addr"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Address Info :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="date"
									value={this.state.value.addr_info}
									disabled={!this.state.editing}
									name="addr_info"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Address Deta :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="date"
									value={this.state.value.addr_deta}
									disabled={!this.state.editing}
									name="addr_deta"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Username :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="text"
									value={this.state.value.memb___id}
									disabled={!this.state.editing}
									name="memb___id"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Password :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="text"
									value={this.state.value.memb__pwd}
									disabled={!this.state.editing}
									name="memb__pwd"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>Control Code :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.ctl1_code}
									disabled={!this.state.editing}
									name="ctl1_code"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Secret Question :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="text"
									value={this.state.value.fpas_ques}
									disabled={!this.state.editing}
									name="fpas_ques"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Secret Answer :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="text"
									value={this.state.value.fpas_answ}
									disabled={!this.state.editing}
									name="fpas_answ"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Job Code :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.job__code}
									disabled={!this.state.editing}
									name="job__code"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Phone Number :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.phon_numb}
									disabled={!this.state.editing}
									name="phon_numb"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Telephone Number :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.tel__numb}
									disabled={!this.state.editing}
									name="tel__numb"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Post Code :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.post_code}
									disabled={!this.state.editing}
									name="post_code"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Block Code :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="number"
									value={this.state.value.bloc_code}
									disabled={!this.state.editing}
									name="bloc_code"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="col-4">
							<div>
								<b>Out Day :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="date"
									value={this.state.value.out__days}
									disabled={!this.state.editing}
									name="out__days"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Modification Day :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="date"
									value={this.state.value.modi_days}
									disabled={!this.state.editing}
									name="modi_days"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4 form-inline">
							<div className="form-check">
								<label className="form-check-label">
									<input
										className="form-check-input"
										type="checkbox"
										value={this.state.value.IsVip}
										disabled={!this.state.editing}
										name="IsVip"
										onChange={this.handleChange}
									/>
									<b>Is Vip</b>
								</label>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Vip Expiration Time :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="date"
									value={this.state.value.VipExpirationTime}
									disabled={!this.state.editing}
									name="VipExpirationTime"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>Apply Day :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="date"
									value={this.state.value.appl_days}
									disabled={!this.state.editing}
									name="appl_days"
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="col-4 form-inline">
							<div className="form-check">
								<label className="form-check-label">
									<input
										className="form-check-input"
										type="checkbox"
										value={this.state.value.mail_chek}
										disabled={!this.state.editing}
										name="mail_chek"
										onChange={this.handleChange}
									/>
									<b>Checked Mail</b>
								</label>
							</div>
						</div>

						<div className="col-4">
							<div>
								<b>True Day :</b>
								<input
									className="ds9799-admin-account-form-control form-control"
									type="date"
									value={this.state.value.true_days}
									disabled={!this.state.editing}
									name="true_days"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AccountInfo;
