import React, { Component } from 'react';

class BankingCard extends Component {
	constructor(props) {
		super(props);
		const { banking } = this.props;
		const { memb___id, loan_money, zen_balance } = banking;
		this.state = {
			value: { memb___id, loan_money, zen_balance: parseInt(zen_balance) },
			editing: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
	}

	handleChange(event) {
		const nextState = this.state;
		const { name, value } = event.target;
		nextState.value[name] = value;
		this.setState(nextState);
	}

	save() {
		this.props.onEditBanking(this.state.value);
		this.setState({ editing: false });
	}

	toggleEdit() {
		this.setState({ editing: !this.state.editing });
	}

	render() {
		const { banking } = this.props;
		const { editing } = this.state;
		return (
			<div className="col-4">
				<div className="ds9799-admin-bank-card">
					<div className="ds9799-admin-bank-card-title">
						<h5 className="text-center">
							{banking.memb___id}
							{editing && (
								<span className="pull-right">
									<button onClick={this.save}>
										<i className="fa fa-save" />
									</button>
									<button onClick={this.toggleEdit}>
										<i className="fa fa-times" />
									</button>
								</span>
							)}
							{!editing && (
								<span className="pull-right">
									<button onClick={this.toggleEdit}>
										<i className="fa fa-pencil" />
									</button>
								</span>
							)}
						</h5>
					</div>
					<div className="ds9799-admin-bank-card-content">
						<div className="form-group">
							<label>
								<b>Zen Balance :</b>
							</label>
							<input
								type="number"
								className="form-control"
								value={this.state.value.zen_balance}
								onChange={this.handleChange}
								name="zen_balance"
								disabled={!editing}
							/>
						</div>
						<div className="form-group">
							<label>
								<b>Loan Money :</b>
							</label>
							<input
								type="number"
								className="form-control"
								value={this.state.value.loan_money}
								onChange={this.handleChange}
								name="loan_money"
								disabled={!editing}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BankingCard;
